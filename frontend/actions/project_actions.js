var AppDispatcher = require("../dispatcher/dispatcher.js");
var ProjectConstants = require("../constants/project_constants.js");

var ProjectActions = {
  receiveAllProjects: function (projects) {
    AppDispatcher.dispatch({
      actionType: ProjectConstants.PROJECTS_RECEIVED,
      projects: projects
    });
  },

  receiveSingleProject: function (project) {
    AppDispatcher.dispatch({
      actionType: ProjectConstants.PROJECT_RECEIVED,
      project: project
    });
  },

  receiveSelectProjects: function (projects) {
    AppDispatcher.dispatch({
      actionType: ProjectConstants.PROJECTS_RECEIVED,
      projects: projects
    });
  }
};

module.exports = ProjectActions;
