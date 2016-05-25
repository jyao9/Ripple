json.partial!("projects", project: @project)
json.image_url asset_path(@project.image.url(:full))
