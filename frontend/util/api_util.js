var ProjectActions = require("../actions/project_actions.js");
var SessionActions = require('../actions/session_actions.js');
var RewardActions = require('../actions/reward_actions.js');
var SearchResultActions = require('../actions/search_result_actions.js');

var ApiUtil = {
  fetchAllProjects: function () {
    $.ajax({
      type: "GET",
      url: "api/projects",
      dataType: "json",
      success: function (projects) {
        ProjectActions.receiveAllProjects(projects);
      }
    });
  },

  fetchSingleProject: function (id) {
    $.ajax({
      type: "GET",
      url: "api/projects/" + id,
      dataType: "json",
      success: function (project) {
        ProjectActions.receiveSingleProject(project);
      }
    });
  },

  createProject: function (project, callback) {
    $.ajax({
      type: "POST",
      url: "api/projects",
      processData: false,
      contentType: false,
      data: project,
      dataType: "json",
      success: function (project) {
        ProjectActions.receiveSingleProject(project);
        callback && callback(project.id);
      }
    });
  },

  createUser: function (user, callback) {
    $.ajax({
      type: "POST",
      url: "api/users",
      data: {user: user},
      dataType: "json",
      success: function (user) {
        callback && callback();
      }
    });
  },

  createReward: function (reward, callback) {
    $.ajax({
      type: "POST",
      url: "api/projects/" + reward.project_id + "/rewards",
      data: {reward: reward},
      dataType: "json",
      success: function (reward) {
        RewardActions.receiveSingleReward(reward);
        callback && callback();
      }
    });
  },

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
  },

  // Must have a key of id in the project object for this to work
  editProject: function (project) {
    $.ajax({
      type: "PATCH",
      url: "api/projects/" + project.id,
      data: {project: project},
      dataType: "json",
      success: function (project) {
        console.log(project.title);
        console.log(project.blurb);
      }
    });
  },

  login: function(credentials, callback) {
    $.ajax({
      type: "POST",
      url: "/api/session",
      dataType: "json",
      data: credentials,
      success: function(currentUser) {
        SessionActions.currentUserReceived(currentUser);
        callback && callback();
      }
    });
  },

  logout: function() {
    $.ajax({
      type: "DELETE",
      url: "/api/session",
      dataType: "json",
      success: function() {
        SessionActions.logout();
      }
    });
  },

  fetchCurrentUser: function (completion) {
    $.ajax({
      type: "GET",
      url: "/api/session",
      dataType: "json",
      success: function(currentUser) {
        SessionActions.currentUserReceived(currentUser);
      },
      complete: function() {
        completion && completion();
      }
    });
  },

  fetchAllRewards: function (projectId) {
    $.ajax({
      type: "GET",
      url: "/api/projects/" + projectId + "/rewards",
      dataType: "json",
      success: function (rewards) {
        RewardActions.receiveAllRewards(rewards);
      }
    });
  },

  search: function (query) {
    SearchResultActions.searchInitiate();
    $.ajax({
      type: "GET",
      url: "/api/searches",
      dataType: "json",
      data: {query: query},
      success: function (results) {
        SearchResultActions.receiveResults(results);
        console.log("Search sent");
        
      },
      error: function () {
        console.log("ApiUtil#search error!");
      }

    });
  }

};


module.exports = ApiUtil;
