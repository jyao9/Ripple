var React = require('react');
var ProjectIndexItem = require('./index_item.jsx');
var ProjectStore = require('../../stores/project.js');
var ApiUtil = require('../../util/api_util.js');


var ProjectCategoriesIndex = React.createClass({
  getInitialState: function () {
    return({ projects: [] });
  },

  componentDidMount: function () {
    ApiUtil.fetchProjectByCategory(
      this.props.location.state.category,
      function () {
        this.setState({ projects: ProjectStore.all() })
      }.bind(this)
    );
  },

  render: function () {

    var projects = this.state.projects.map(function (project) {
      return(<ProjectIndexItem key={project.id} project={project} />);
    })

    return(
      <div className="filter group">
        <div className="category-header">Sorted by: {this.props.location.state.category}</div>
        {projects}
      </div>
    );
  }
});

module.exports = ProjectCategoriesIndex;
