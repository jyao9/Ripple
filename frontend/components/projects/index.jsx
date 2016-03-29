var React = require('react');
var ApiUtil = require('../../util/api_util.js');
var ProjectStore = require('../../stores/project.js');

var ProjectIndex = React.createClass({
  getInitialState: function () {
    return({ projects: ProjectStore.all() });
  },

  componentDidMount: function () {
    this.projectListener = ProjectStore.addListener(this._onChange);
    ApiUtil.fetchAllProjects();
  },

  componentWillUnmount: function () {
    this.projectListener.remove();
  },

  _onChange: function () {
    this.setState({ projects: ProjectStore.all() });
  },

  render: function () {
    var projects = this.state.projects.map(function (project) {
      return(
        <li key={project.id}>{project.title}</li>
      );
    })

    return(
      <ul>
        {projects}
      </ul>
    );
  }
});

module.exports = ProjectIndex;
