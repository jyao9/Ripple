json.extract!(user, :id, :username)

json.projects user.projects do |project|
  json.partial!("api/projects/projects", project: project)
end

json.backed_projects user.backed_projects do |back_project|
  json.partial!("api/projects/projects", project: back_project)
end
