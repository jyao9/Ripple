var React = require('react');
var ApiUtil = require('../../util/api_util.js');
var ProjectStore = require('../../stores/project.js');
var ProjectIndexItem = require('./index_item.jsx');

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
        <ProjectIndexItem key={project.id} project={project} />
      );
    })

    return(
      <ul className="group">
        {projects}
      </ul>
    );
  }
});

module.exports = ProjectIndex;
