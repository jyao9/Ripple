Project.create!(
  title: "Make Sennacy website",
  category: "Technology",
  blurb: "All hail Sennacy. We must make a website for her!",
  author_id: 1,
  duration: 30,
  goal: 500,
)

Project.create!(
  title: "Mac and cheese",
  category: "Food",
  blurb: "I want to make the best mac and cheese in the world",
  author_id: 2,
  duration: 30,
  goal: 100,
)

Project.create!(
  title: "Gold and white dress",
  category: "Fashion",
  blurb: "That dress is totally white and gold. I want to make it but with real gold.",
  author_id: 3,
  duration: 30,
  goal: 500000,
)

Project.create!(
  title: "Sennacy the Game",
  category: "Games",
  blurb: "A game where you try to open as many doors as possible as a cat.",
  author_id: 1,
  duration: 30,
  goal: 100000,
)

User.create!(
  username: "user",
  password: "password"
)

User.create!(
  username: "user2",
  password: "password2"
)

User.create!(
  username: "user3",
  password: "password3"
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
  value: 10,
  description: "Your name will be put on as a recognized donator"
)

Reward.create!(
  project_id: 1,
  value: 100,
  description: "You can suggest a featur for the website"
)
