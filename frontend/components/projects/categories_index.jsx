var React = require('react');
var ProjectIndexItem = require('./index_item.jsx');

var ProjectCategoriesIndex = React.createClass({
  render: function () {
    var projects = this.props.projects.map(function (project) {
      return(<ProjectIndexItem key={project.id} project={project} />);
    })

    return(
      <div>
        {projects}
      </div>
    );
  }
});

module.exports = ProjectCategoriesIndex;
