class Project < ActiveRecord::Base
  validates :title, :category, :blurb, :author_id, :duration, :goal, presence: true
  has_attached_file :image, default_url: "missing.png"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/

  include PgSearch
  PgSearch.multisearch_options = {
    :using => {:tsearch => {:prefix => true}},
  }
  
  multisearchable :against => [:title],
                  :using => {:tsearch => {:prefix => true}}

  belongs_to(
    :author,
    class_name: "User",
    foreign_key: :author_id,
    primary_key: :id
  )

  has_many(
    :rewards,
    class_name: "Reward",
    foreign_key: :project_id,
    primary_key: :id
  )

  has_many(
    :backings,
    through: :rewards,
    source: :backings
  )

  has_many(
    :backers,
    through: :backings,
    source: :user
  )

  def status
    sql_sum = self.backings.select("SUM(rewards.value) AS status")
    return 0 if sql_sum[0].status == nil
    return sql_sum[0].status
  end

end
