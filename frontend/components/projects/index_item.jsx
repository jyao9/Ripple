var React = require('react');

var ProjectIndexItem = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  showDetail: function () {
    this.context.router.push("projects/" + this.props.project.id)
  },

  render: function () {
    var barWidth;

    if (this.props !== undefined) {
      barWidth = (this.props.project.status / this.props.project.goal) * 100;
    } else {
      barWidth = 100
    }

    var meterStyle = {
      width: barWidth + "%"
    };
    // debugger
    return(
      <li className="project-index-item group" onClick={this.showDetail}>
        <img className="icon" className="icon-image" src={this.props.project.image_url} />
        <div className="icon-title">{this.props.project.title}</div>
        <div className="icon-author">{this.props.project.author_name}</div>
        <div className="icon-blurb">{this.props.project.blurb}</div>
        <br />
        <div className="meter">
          <span style={meterStyle}></span>
        </div>
      </li>
    );
  }
});

module.exports = ProjectIndexItem;
