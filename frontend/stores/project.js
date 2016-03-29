var Store = require("flux/utils").Store;
var AppDispatcher = require("../dispatcher/dispatcher.js");
var ProjectStore = new Store(AppDispatcher);

var ProjectConstants = require("../constants/project_constants.js");

var _projects = {};

ProjectStore.all = function () {
  var projects = [];
  Object.keys(_projects).forEach(function (id) {
    projects.push(_projects[id]);
  });
  return projects;
};

var resetProjects = function (projects) {
  _projects = {};
  projects.forEach(function (project) {
    _projects[project.id] = project;
  });
};

ProjectStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case ProjectConstants.PROJECTS_RECEIVED:
    resetProjects(payload.projects);
    ProjectStore.__emitChange();
    break;
  }
};

module.exports = ProjectStore;
