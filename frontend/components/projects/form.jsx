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

    ApiUtil.createProject(newProject);
    this.setState({ title: null, category: null, blurb: null, duration: null, goal: null});
    this.context.router.push("/");
  },

  render: function () {
    return(
      <form className="new-project" onSubmit={this.createProject}>
        <label>Title:
          <input
            type="text"
            valueLink={this.linkState("title")}
          />
        </label>

        <label>Category:
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
          </select>
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
      </form>
    );
  }
});

module.exports = ProjectForm;
