var React = require('react');
var ApiUtil = require('../../util/api_util.js');
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var ProjectStore = require('../../stores/project.js');


var ProjectForm = React.createClass ({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  mixins: [LinkedStateMixin],

  getInitialState: function () {
    var currentProject = ProjectStore.find(parseInt(this.props.params.projectId));
    if (currentProject) {
      return({ title: currentProject.title, category: currentProject.category , blurb: currentProject.blurb, duration: currentProject.duration, goal: currentProject.goal, imageUrl: currentProject.image_url })
    } else {
      return({ title: "", category: null, blurb: "", duration: null, goal: null, imageFile: null, imageUrl: null });
    }

    this.imageAdded = false;
  },

  handleSubmit: function (e) {
    e.preventDefault();
    var currentProject = ProjectStore.find(parseInt(this.props.params.projectId));

    var formData = new FormData();
    formData.append("project[title]", this.state.title);
    formData.append("project[category]", this.state.category);
    formData.append("project[blurb]", this.state.blurb);
    formData.append("project[duration]", this.state.duration);
    formData.append("project[goal]", this.state.goal);

    if (this.imageAdded) {
      formData.append("project[image]", this.state.imageFile);
    }

    if (currentProject) {
      this.editProject(formData, currentProject);
    } else {
      this.createProject(formData);
    }

  },

  createProject: function (project) {
    ApiUtil.createProject(project, function (projectId) {
      this.context.router.push({pathname: "projects/new/rewards", query: {}, state: {projectId: projectId}});
    }.bind(this));

    this.setState({ title: null, category: null, blurb: null, duration: null, goal: null, imageFile: null, imageUrl: null});
  },

  editProject: function (project, currentProject) {
    ApiUtil.editProject(project, currentProject.id, function (id) {
      this.context.router.push("projects/" + id)
    }.bind(this))
  },

  handleFileChange: function (e) {
    var file = e.currentTarget.files[0];
    var reader = new FileReader();

    reader.onloadend = function () {
      var result = reader.result;
      this.setState({ imageFile: file, imageUrl: result });
    }.bind(this);

    reader.readAsDataURL(file);
    this.imageAdded = true;
  },


  render: function () {
    var header;
    var buttonText;

    var currentProject = ProjectStore.find(parseInt(this.props.params.projectId));
    if (currentProject) {
      header = "Edit project"
      buttonText = "Edit project"
    } else {
      header = "What are you going to create?"
      buttonText = "Create Project"
    }

    return(
      <form className="new-project group" onSubmit={this.handleSubmit}>
        <div className="form-title"><h2>{header}</h2></div>

        <label>I want to start a
          <select className="category" valueLink={this.linkState("category")}>
            <option value=""></option>
            <option value="Art">Art</option>
            <option value="Comics">Comics</option>
            <option value="Crafts">Crafts</option>
            <option value="Dance">Dance</option>
            <option value="Design">Design</option>
            <option value="Fashion">Fashion</option>
            <option value="Film">Film & Video</option>
            <option value="Food">Food</option>
            <option value="Games">Games</option>
            <option value="Journalism">Journalism</option>
            <option value="Music">Music</option>
            <option value="Photography">Photography</option>
            <option value="Publishing">Publishing</option>
            <option value="Technology">Technology</option>
            <option value="Theater">Theater</option>
          </select> project.
        </label>

        <label>Title:
          <input
            type="text"
            valueLink={this.linkState("title")}
            />
        </label>

        <label>Image:
          <input
            type="file"
            className="image-input"
            onChange={this.handleFileChange}
            />
        </label>

        <img className="preview-image" src={this.state.imageUrl} />

        <label>Blurb:
          <textarea valueLink={this.linkState("blurb")} />
        </label>

        <label>Duration:
          <input
            type="number"
            valueLink={this.linkState("duration")}
          />
        </label>

        <label>Goal:
          <input
            type="number"
            valueLink={this.linkState("goal")}
          />
        </label>

        <button>{buttonText}</button>
        <br />
        {this.props.children}
      </form>
    );
  }
});

module.exports = ProjectForm;
