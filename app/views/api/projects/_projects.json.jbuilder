json.extract!(
  project,
  :id, :title, :category, :blurb, :author_id, :duration, :goal, :status
)
json.author_name project.author.username
