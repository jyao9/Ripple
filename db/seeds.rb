Project.create!(
  title: "Make Sennacy a Website",
  category: "Technology",
  blurb: "All hail Sennacy. We must make a website for her. I mean we already made an html template for a website for it so why not just continue from there?",
  author_id: 1,
  duration: 14,
  goal: 100,
)

Project.create!(
  title: "World's Best Mac and Cheese",
  category: "Food",
  blurb: "I want to make the best mac and cheese in the world. I like cheese. I also like maccaroni. If I surpass my goal, I may even put in some bacon.",
  author_id: 2,
  duration: 30,
  goal: 50,
)

Project.create!(
  title: "Gold and White Dress",
  category: "Fashion",
  blurb: "That dress is totally white and gold. I want to make it but with real gold. Trust me, it's totally practical.",
  author_id: 3,
  duration: 30,
  goal: 500000,
)

Project.create!(
  title: "Sennacy the Game",
  category: "Games",
  blurb: "A game where you try to open as many doors as possible as a cat. I couldn't imagine a more fun game. Golly, this game could even become more popular than cat clicker.",
  author_id: 1,
  duration: 30,
  goal: 200000,
)

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
  username: "Guest",
  password: "Password"
)

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
