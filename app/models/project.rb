class Project < ActiveRecord::Base
  validates :title, :category, :blurb, :author_id, :duration, :goal, presence: true

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
    sum = 0
    sql_sum = self.backings.group("backings.id").select("SUM(rewards.value) AS status")
    sql_sum.each do |backing|
      sum += backing.status
    end
    return sum
  end

end
