var React = require('react');

var ProjectIndexItem = React.createClass({
  render: function () {
    return(
      <li className="project-index-item">
        {this.props.project.title}
      </li>
    );
  }
});

module.exports = ProjectIndexItem;
