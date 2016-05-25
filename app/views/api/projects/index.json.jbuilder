json.array!(@projects) do |project|
  json.partial!("projects", project: project)
  json.image_url asset_path(@project.image.url(:thumb))
end
