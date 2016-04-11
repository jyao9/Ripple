json.extract!(reward, :id, :project_id, :value, :description)

json.project_title reward.project.title
json.project_author reward.project.author.username
json.backers reward.backers
