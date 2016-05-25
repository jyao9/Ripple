
User.create!(
  username: "Tommy",
  password: "password"
)

User.create!(
  username: "Mac Chedder",
  password: "password"
)

User.create!(
  username: "Color Blind Fashionista",
  password: "password"
)

User.create!(
  username: "Bobby Fillet",
  password: "password"
)

User.create!(
  username: "Gym Bunny",
  password: "password"
)

User.create!(
  username: "That Gamer",
  password: "password"
)

User.create!(
  username: "Amy",
  password: "password"
)

User.create!(
  username: "John Doe",
  password: "password"
)

User.create!(
  username: "Guest",
  password: "Password"
)

Project.create!(
  title: "Make Sennacy a Website",
  category: "Technology",
  blurb: "All hail Sennacy. We must make a website for her. I mean we already made an html template for a website for it so why not just continue from there?",
  author_id: 1,
  duration: 14,
  goal: 100,
)

project = Project.last
file = File.open('app/assets/images/cat_website.jpg')
project.image = file
project.save!

Project.create!(
  title: "World's Best Mac and Cheese",
  category: "Food",
  blurb: "I want to make the best mac and cheese in the world. I like cheese. I also like macaroni. If I surpass my goal, I may even put in some bacon.",
  author_id: 2,
  duration: 30,
  goal: 50,
)

project = Project.last
file = File.open('app/assets/images/mac_and_cheese.jpg')
project.image = file
project.save!

Project.create!(
  title: "Gold and White Dress",
  category: "Fashion",
  blurb: "That dress is totally white and gold. I want to make it but with real gold. Trust me, it's totally practical.",
  author_id: 3,
  duration: 30,
  goal: 500000,
)

project = Project.last
file = File.open('app/assets/images/gold_white.jpg')
project.image = file
project.save!

Project.create!(
  title: "Sennacy the Game",
  category: "Games",
  blurb: "A game where you try to open as many doors as possible as a cat. I couldn't imagine a more fun game. Golly, this game could even become more popular than cat clicker.",
  author_id: 1,
  duration: 30,
  goal: 200000,
)

project = Project.last
file = File.open('app/assets/images/cat_game.jpg')
project.image = file
project.save!

Project.create!(
  title: "Beef Bacon",
  category: "Food",
  blurb: "I want to make bacon made from beef that taste even better than bacon made from pork. Come on guys, I know we can do this!",
  author_id: 4,
  duration: 15,
  goal: 10000,
)

project = Project.last
file = File.open('app/assets/images/bacon.jpg')
project.image = file
project.save!

Project.create!(
  title: "The Truth about Steak",
  category: "Journalism",
  blurb: "Help me to discover the truth about what steak is one of the best meals for breakfast, lunch and dinner. Let's not forget brunch.",
  author_id: 4,
  duration: 30,
  goal: 30000,
)

project = Project.last
file = File.open('app/assets/images/steak.jpg')
project.image = file
project.save!

Project.create!(
  title: "Pop Workout",
  category: "Dance",
  blurb: "Exercise is an important part of my life and I want to share it with the world. That's why I want to create a workout dance to all of today's catchiest pop songs.",
  author_id: 5,
  duration: 7,
  goal: 500,
)

project = Project.last
file = File.open('app/assets/images/workout_dance.jpg')
project.image = file
project.save!

Project.create!(
  title: "Bounce",
  category: "Fashion",
  blurb: "Join me in creating a new fashion line for workout clothes. The goal is to create clothes that are super comfortable and easy to work out and move around in.",
  author_id: 5,
  duration: 30,
  goal: 500000,
)

project = Project.last
file = File.open('app/assets/images/workout_clothes.jpg')
project.image = file
project.save!

Project.create!(
  title: "Quantum Chess",
  category: "Games",
  blurb: "You've seen the video. You know what must be done.",
  author_id: 6,
  duration: 60,
  goal: 250000,
)

project = Project.last
file = File.open('app/assets/images/chess.jpg')
project.image = file
project.save!

Project.create!(
  title: "Knitted Scarves",
  category: "Crafts",
  blurb: "I like to knit and people say I make great scarves. Support my brand.",
  author_id: 7,
  duration: 40,
  goal: 3000,
)

project = Project.last
file = File.open('app/assets/images/scarves.jpg')
project.image = file
project.save!

Project.create!(
  title: "Bambi Remake",
  category: "Film",
  blurb: "The original Bambi movie was just too sad. Let's remake it so that Bambi's mother doesn't die.",
  author_id: 8,
  duration: 25,
  goal: 750000,
)

project = Project.last
file = File.open('app/assets/images/bambi.png')
project.image = file
project.save!

Reward.create!(
  project_id: 1,
  value: 1,
  description: "I just want to help out. No reward needed."
)

Reward.create!(
  project_id: 1,
  value: 5,
  description: "Your name will be put on as a recognized donator."
)

Reward.create!(
  project_id: 1,
  value: 20,
  description: "You can suggest a feature for the website."
)

Reward.create!(
  project_id: 2,
  value: 1,
  description: "I just want to help out. No reward needed."
)

Reward.create!(
  project_id: 2,
  value: 5,
  description: "You will get a sample of the amazing mac and cheese."
)

Reward.create!(
  project_id: 2,
  value: 20,
  description: "You will get a sample of the amazing mac and cheese as well as a copy of the recipe."
)

Reward.create!(
  project_id: 3,
  value: 1,
  description: "I just want to help out. No reward needed."
)

Reward.create!(
  project_id: 3,
  value: 20,
  description: "You will get pictures of the progress of the dress."
)

Reward.create!(
  project_id: 3,
  value: 100,
  description: "You will get the above rewards as well as a personalized hand written thank you card."
)

Reward.create!(
  project_id: 3,
  value: 1000,
  description: "You will get the above rewards as well as some left over dress fabric."
)

Reward.create!(
  project_id: 3,
  value: 50000,
  description: "You will get the above rewards as well as a copy of the dress (gold not real)."
)

Reward.create!(
  project_id: 4,
  value: 1,
  description: "I just want to help out. No reward needed."
)

Reward.create!(
  project_id: 4,
  value: 100,
  description: "Your name will be put on as a recognized donator."
)

Reward.create!(
  project_id: 4,
  value: 1000,
  description: "You will be able to suggest a skin for Sennacy."
)

Reward.create!(
  project_id: 5,
  value: 1,
  description: "I just want to help out. No reward needed."
)

Reward.create!(
  project_id: 5,
  value: 100,
  description: "You will receive 5 strips of the beef bacon."
)

Reward.create!(
  project_id: 5,
  value: 1000,
  description: "You will receive 1 pack (20 strips) of the beef bacon."
)

Reward.create!(
  project_id: 6,
  value: 1,
  description: "I just want to help out. No reward needed."
)

Reward.create!(
  project_id: 6,
  value: 100,
  description: "Your name will be put on as a recognized donator."
)

Reward.create!(
  project_id: 6,
  value: 2000,
  description: "You will get the chance to suggest a recipe to be featured."
)

Reward.create!(
  project_id: 7,
  value: 1,
  description: "I just want to help out. No reward needed."
)

Reward.create!(
  project_id: 7,
  value: 100,
  description: "You will receive a personalized thank you card."
)

Reward.create!(
  project_id: 7,
  value: 1000,
  description: "You will get to choose a song."
)

Reward.create!(
  project_id: 8,
  value: 1,
  description: "I just want to help out. No reward needed."
)

Reward.create!(
  project_id: 8,
  value: 100,
  description: "You will receive a personalized thank you card."
)

Reward.create!(
  project_id: 8,
  value: 1000,
  description: "You will receive a piece of clothing of your choice from the clothing line."
)

Reward.create!(
  project_id: 9,
  value: 1,
  description: "I just want to help out. No reward needed."
)

Reward.create!(
  project_id: 9,
  value: 1000,
  description: "Your name will be put on as a recognized donator."
)

Reward.create!(
  project_id: 9,
  value: 5000,
  description: "You will be able to demo the game early."
)

Reward.create!(
  project_id: 10,
  value: 1,
  description: "I just want to help out. No reward needed."
)

Reward.create!(
  project_id: 10,
  value: 100,
  description: "You will receive a personalized thank you letter."
)

Reward.create!(
  project_id: 10,
  value: 500,
  description: "You will receive a scarf."
)

Reward.create!(
  project_id: 11,
  value: 1,
  description: "I just want to help out. No reward needed."
)

Reward.create!(
  project_id: 11,
  value: 100,
  description: "Your name will be put on as a recognized donator."
)

Reward.create!(
  project_id: 11,
  value: 10000,
  description: "You will be able voice act for the remake."
)
