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
      <li className="project-index-item group" onClick={this.showDetail}>
        <div className="icon-title">{this.props.project.title}</div>
        <img className="icon" className="preview-image" src={this.props.project.image_url} />
      </li>
    );
  }
});

module.exports = ProjectIndexItem;
