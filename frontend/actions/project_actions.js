var AppDispatcher = require("../dispatcher/dispatcher.js");
var ProjectConstants = require("../constants/project_constants.js");

var ProjectActions = {
  receiveAllProjects: function (projects) {
    // debugger
    AppDispatcher.dispatch({
      actionType: ProjectConstants.PROJECTS_RECEIVED,
      projects: projects
    });
  }
};

module.exports = ProjectActions;
