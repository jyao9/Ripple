class Backing < ActiveRecord::Base
  validates :reward_id, :user_id, presence: true

  belongs_to(
    :user,
    class_name: "User",
    foreign_key: :user_id,
    primary_key: :id
  )

  belongs_to(
    :reward,
    class_name: "Reward",
    foreign_key: :reward_id,
    primary_key: :id
  )


end
