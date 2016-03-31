class Reward < ActiveRecord::Base
  validates :project_id, :value, :description, presence: true

  belongs_to(
    :project,
    class_name: "Project",
    foreign_key: :project_id,
    primary_key: :id
  )

  has_many(
    :backings,
    class_name: "Backing",
    foreign_key: :reward_id,
    primary_key: :id
  )

  has_many(
    :backers,
    through: :backings,
    source: :user
  )

end
