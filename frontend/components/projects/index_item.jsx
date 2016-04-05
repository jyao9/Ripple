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

    var today = Date.now();
    var projectStart = Date.parse(this.props.project.created_at);
    var daysPast = Math.floor((today - projectStart)/(24 * 60 * 60 * 1000));
    var daysLeft = this.props.project.duration - daysPast;

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
        <br />
        <div className="icon-info group">
          <div className="num">{barWidth}%</div>
          <span>funded</span>
        </div>

        <div className="icon-info group">
          <div className="num">${this.props.project.status}</div>
          <span>pledged</span>
        </div>

        <div className="icon-info group">
          <div className="num">{daysLeft}</div>
          <span>days to go</span>
        </div>
      </li>
    );
  }
});

module.exports = ProjectIndexItem;
