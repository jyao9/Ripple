# Ripple

Ripple is a KickStarter clone that allows users to create projects and to donate to currently existing projects. It was built using Ruby on Rails and React.js.

View the website at: [ripplestarter.herokuapp.com][heroku]
[heroku]: www.ripplestarter.herokuapp.com

## Home View:
![Homepage](/app/assets/images/homepage.jpg?raw=true)

## Technical Details:
* When someone donates to a project on Ripple, that project will update based on the amount of money that person has donated. In order for the project to update properly, a separate backings table was needed to keep track of how many backings there were per reward and then sum up those backings to obtain the total amount donated to that project. Therefore, when a reward is selected by the current user, an ajax request is sent to the server to create a backing.

createBacking: function (backing, project_id, callback) {
  $.ajax({
    type: "POST",
    url: "api/projects/" + project_id + "/backings",
    data: {backing: backing},
    dataType: "json",
    success: function (backing) {
      callback && callback();
    },
    error: function () {
      console.log("Backing creation failed");
    }
  });

* To update to project itself, a status method was created in the projects controller to sum up all the rewards that have been backed.

has_many(
  :rewards,
  class_name: "Reward",
  foreign_key: :project_id,
  primary_key: :id
)

has_many(
  :backings,
  through: :rewards,
  source: :backings
)

def status
  sql_sum = self.backings.select("SUM(rewards.value) AS status")
  return 0 if sql_sum[0].status == nil
  return sql_sum[0].status
end

## Features

* Log in or Sign up with or without Facebook
* Create, edit, delete and view projects
  * Upload pictures to projects
* Create rewards for projects
* Fund/select rewards from projects
* Search for projects by author or title
* Click on project icon to see the details about that specific project
* See projects current user has created and backed
* Project icons on home page show percentage of goal achieved

[Original Design Docs][original]
[original]: ./docs/wakthrough.md
