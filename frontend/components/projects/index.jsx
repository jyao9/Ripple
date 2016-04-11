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
    this.forceUpdate();
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
      <main className="homepage">
        <img className="img-banner" src={window.homepage} />
        <div className="welcome">Welcome to Ripple!</div>
        <span className="banner">Take a dip. Make a splash.</span>
        <ul className="project-list group">
          {projects}
        </ul>
      </main>
    );
  }
});

module.exports = ProjectIndex;
