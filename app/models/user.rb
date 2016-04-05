class User < ActiveRecord::Base
  validates :username, presence: true
  validates :password, length: { minimum: 6, allow_nil: true}

  include PgSearch
  multisearchable :against => [:username]

  has_many(
    :projects,
    class_name: "Project",
    foreign_key: :author_id,
    primary_key: :id
  )

  has_many(
    :backings,
    class_name: "Backing",
    foreign_key: :user_id,
    primary_key: :id
  )

  has_many(
    :backed_rewards,
    through: :backings,
    source: :reward
  )

  has_many(
    :backed_projects,
    through: :backed_rewards,
    source: :project
  )

  attr_reader :password

  after_initialize :ensure_session_token

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    return nil unless user && user.is_password?(password)
    user
  end

  def self.find_or_create_by_auth_hash(auth_hash)
    provider = auth_hash[:provider]
    uid = auth_hash[:uid]

    user = User.find_by(provider: provider, uid: uid)
    return user if user

    User.create(
      provider: provider,
      uid: uid,
      username: auth_hash[:extra][:raw_info][:name]
    )
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64(16)
    self.save!
    self.session_token
  end

  private

  def ensure_session_token
    self.session_token ||= self.session_token = SecureRandom.urlsafe_base64(16)
  end

end
