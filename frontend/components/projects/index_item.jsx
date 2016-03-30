var React = require('react');

var ProjectIndexItem = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  showDetail: function () {
    this.context.router.push("projects/" + this.props.project.id)
  },

  render: function () {
    return(
      <li
        className="project-index-item" onClick={this.showDetail}>
        {this.props.project.title}
      </li>
    );
  }
});

module.exports = ProjectIndexItem;
