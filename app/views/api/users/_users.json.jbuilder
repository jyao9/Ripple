json.extract!(user, :id, :username)

json.projects user.projects do |project|
  json.partial!("api/projects/projects", project: project)
end
