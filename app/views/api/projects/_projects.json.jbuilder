json.extract!(
  project,
  :id, :title, :category, :blurb, :author_id, :duration, :goal
)

json.author_name project.author.username
json.num_of_backers project.backers.count
json.status project.status
