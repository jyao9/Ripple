class Project < ActiveRecord::Base
  validates :title, :category, :blurb, :author_id, :duration, :goal, :status, presence: true


end
