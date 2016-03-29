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
      }
    });
  },

  createProject: function (project) {
    $.ajax({
      type: "POST",
      url: "api/projects",
      data: {project: project},
      success: function (project) {
        console.log(project.title);
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
