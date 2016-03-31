json.extract!(
  project,
  :id, :title, :category, :blurb, :author_id, :duration, :goal
)
json.author_name project.author.username
