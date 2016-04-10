json.extract!(
  project,
  :id, :title, :category, :blurb, :author_id, :duration, :goal, :created_at
)

json.author_name project.author.username
json.num_of_backers project.backers.count
json.image_url asset_path(project.image.url(:original))

json.status project.status
<<<<<<< HEAD

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
=======



json.categories Project::CATEGORIES

json.art Project.by_category("Art")
json.comics Project.by_category("Comics")
json.crafts Project.by_category("Crafts")
json.dance Project.by_category("Dance")
json.design Project.by_category("Design")
json.fashion Project.by_category("Fashion")
json.film Project.by_category("Film")
json.food Project.by_category("Food")
json.games Project.by_category("Games")
json.journalism Project.by_category("Journalism")
json.music Project.by_category("Music")
json.photography Project.by_category("Photography")
json.publishing Project.by_category("Publishing")
json.technology Project.by_category("Technology")
json.theater Project.by_category("Theater")

>>>>>>> master
# Project.all.pluck(:category)
