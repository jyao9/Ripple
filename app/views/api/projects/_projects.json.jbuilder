json.extract!(
  project,
  :id, :title, :category, :blurb, :author_id, :duration, :goal, :created_at
)

json.author_name project.author.username
json.num_of_backers project.backers.count
json.image_url asset_path(project.image.url(:original))

json.status project.status

categories_list = Project.all.pluck(:category)

json.art categories_list.count("Art")

json.comics categories_list.count("Comics")
json.crafts categories_list.count("Crafts")
json.dance categories_list.count("Dance")
json.design categories_list.count("Design")
json.fashion categories_list.count("Fashion")
json.film categories_list.count("Film")
json.food categories_list.count("Food")
json.games categories_list.count("Games")
json.journalism categories_list.count("Journalism")
json.music categories_list.count("Music")
json.photography categories_list.count("Photography")
json.publishing categories_list.count("Publishing")
json.technology categories_list.count("Technology")
json.theater categories_list.count("Theater")

json.categories Project::CATEGORIES
# Project.all.pluck(:category)
