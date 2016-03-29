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
  }
};


module.exports = ApiUtil;
