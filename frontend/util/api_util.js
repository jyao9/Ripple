var ProjectActions = require("../actions/project_actions.js");
var SessionActions = require('../actions/session_actions.js');

var ApiUtil = {
  fetchAllProjects: function () {
    $.ajax({
      type: "GET",
      url: "api/projects",
      dataType: "json",
      success: function (projects) {
        projects.forEach(function (project) {
          console.log(project.title);
        });
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
        console.log(project.title);
        ProjectActions.receiveSingleProject(project);
      }
    });
  },

  createProject: function (project, callback) {
    $.ajax({
      type: "POST",
      url: "api/projects",
      data: {project: project},
      dataType: "json",
      success: function (project) {
        console.log(project.title);
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
        console.log("User created");
        callback && callback();
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

  fetchCurrentUser: function(completion) {
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
  }

};


module.exports = ApiUtil;
