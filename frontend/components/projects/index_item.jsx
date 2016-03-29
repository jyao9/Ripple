var React = require('react');
var History = require('react-router').History;

var ProjectIndexItem = React.createClass({
  render: function () {
    return(
      <li>
        {this.props.project.title}
      </li>
    );
  }
});

module.exports = ProjectIndexItem;
