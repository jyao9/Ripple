var React = require('react');
var ApiUtil = require('../../util/api_util.js');
var LinkedStateMixin = require('react-addons-linked-state-mixin');


var ProjectForm = React.createClass ({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  mixins: [LinkedStateMixin],

  getInitialState: function () {
    return({ title: "", category: null, blurb: "", duration: null, goal: null, imageFile: null, imageUrl: null });
  },

  createProject: function (e) {
    e.preventDefault();
    var formData = new FormData();
    formData.append("project[title]", this.state.title);
    formData.append("project[category]", this.state.category);
    formData.append("project[blurb]", this.state.blurb);
    formData.append("project[duration]", this.state.duration);
    formData.append("project[goal]", this.state.goal);
    formData.append("project[image]", this.state.imageFile);

    ApiUtil.createProject(formData, function (projectId) {
      this.context.router.push({pathname: "projects/new/rewards", query: {}, state: {projectId: projectId}});
    }.bind(this));

    this.setState({ title: null, category: null, blurb: null, duration: null, goal: null, imageFile: null, imageUrl: null});
  },

  handleFileChange: function (e) {
    var file = e.currentTarget.files[0];
    var reader = new FileReader();

    reader.onloadend = function () {
      var result = reader.result;
      this.setState({ imageFile: file, imageUrl: result });
    }.bind(this);

    reader.readAsDataURL(file);
  },

  render: function () {
    return(
      <form className="new-project group" onSubmit={this.createProject}>
        <div className="form-title"><h2>What are you going to create?</h2></div>

        <label>I want to start a
          <select className="category" valueLink={this.linkState("category")}>
            <option value=""></option>
            <option value="art">Art</option>
            <option value="comics">Comics</option>
            <option value="crafts">Crafts</option>
            <option value="dance">Dance</option>
            <option value="design">Design</option>
            <option value="fashion">Fashion</option>
            <option value="film">Film & Video</option>
            <option value="food">Food</option>
            <option value="games">Games</option>
            <option value="journalism">Journalism</option>
            <option value="music">Music</option>
            <option value="photography">Photography</option>
            <option value="publishing">Publishing</option>
            <option value="technology">Technology</option>
            <option value="theater">Theater</option>
          </select> project.
        </label>

        <label>Title:
          <input
            type="text"
            valueLink={this.linkState("title")}
            />
        </label>

        <label>Image
          <input
            type="file"
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

        <button>Create Project</button>
        <br />
        {this.props.children}
      </form>
    );
  }
});

module.exports = ProjectForm;
