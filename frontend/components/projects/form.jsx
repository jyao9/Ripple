var React = require('react');
var ApiUtil = require('../../util/api_util.js');
var LinkedStateMixin = require('react-addons-linked-state-mixin');


var ProjectForm = React.createClass ({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  mixins: [LinkedStateMixin],

  getInitialState: function () {
    return({ title: null, category: null, blurb: null, duration: null, goal: null, status: 0 });
  },

  createProject: function (event) {
    event.preventDefault();
    var newProject = this.state;

    // ApiUtil.createProject(newProject, function (id) {
    //   this.context.router.push("projects/" + id);
    // }.bind(this));

    ApiUtil.createProject(newProject, function (projectId) {
      this.context.router.push({pathname: "projects/new/rewards", query: {}, state: {projectId: projectId}});
    }.bind(this));

    this.setState({ title: null, category: null, blurb: null, duration: null, goal: null});
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
