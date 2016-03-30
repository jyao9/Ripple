var ProjectActions = require("../actions/project_actions.js");

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
      success: function (project) {
        console.log(project.title);
        ProjectActions.receiveSingleProject(project);
        callback && callback(project.id);
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
  }
};


module.exports = ApiUtil;
