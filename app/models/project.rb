class Project < ActiveRecord::Base
  validates :title, :category, :blurb, :author_id, :duration, :goal, presence: true
  has_attached_file :image, styles: {full: "650x450", thumb: "320x240"}, default_url: "missing.png"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/

  CATEGORIES = [
    "Art",
    "Comics",
    "Crafts",
    "Dance",
    "Design",
    "Fashion",
    "Film",
    "Food",
    "Games",
    "Journalism",
    "Music",
    "Photography",
    "Publishing",
    "Technology",
    "Theater"
  ]

  include PgSearch
  PgSearch.multisearch_options = {
    :using => {:tsearch => {:prefix => true}},
  }

  multisearchable :against => [:title]

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

  def self.by_category(category)
    self.where("projects.category = ?", category)
  end

end
