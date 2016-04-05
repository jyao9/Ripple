var React = require('react');
var ApiUtil = require('../../util/api_util.js');
var ProjectStore = require('../../stores/project.js');
var Link = require('react-router').Link;

var ProjectDetail = React.createClass({
  getStateFromStore: function () {
    return({ project: ProjectStore.find(parseInt(this.props.params.projectId)) });
  },

  getInitialState: function () {
    return(this.getStateFromStore());
  },

  _onChange: function () {
    this.setState(this.getStateFromStore());
  },

  componentWillReceiveProps: function (newProps) {
    ApiUtil.fetchSingleProject(parseInt(newProps.params.projectId));
  },

  componentDidMount: function () {
    this.detailListener = ProjectStore.addListener(this._onChange);
    ApiUtil.fetchSingleProject(parseInt(this.props.params.projectId));
  },

  componentWillUnmount: function () {
    this.detailListener.remove();
  },

  render: function () {
    if (this.state.project === undefined) {
      return <div></div>;
    }

    var today = Date.now();
    var projectStart = Date.parse(this.state.project.created_at);
    var daysPast = Math.floor((today - projectStart)/(24 * 60 * 60 * 1000));
    var daysLeft = this.state.project.duration - daysPast;

    var rewardLink = "projects/" + this.state.project.id + "/rewards"

    return(
      <section className="detail group">
        <div className="detail-header">
          <div className="project-title"><h1>{this.state.project.title}</h1></div>
          <div className="project-author"><h3>by {this.state.project.author_name}</h3></div>
        </div>
        <div className="content-main">
          <img className="preview-image" src={this.state.project.image_url} />
          <div className="project-blurb">{this.state.project.blurb}</div>
        </div>

        <div className="content-sidebar">
          <div className="sidebar-info">
            <div className="count">{this.state.project.num_of_backers}</div>
            <span className="text">backers</span>
          </div>

          <div className="sidebar-info">
            <div className="count">${this.state.project.status}</div>
            <span className="text">pledged of ${this.state.project.goal} goal</span>
          </div>

          <div className="sidebar-info">
            <div className="count">{daysLeft}</div>
            <span className="text">days to go</span>
          </div>

          <div className="view-rewards"><Link to={rewardLink}>Back this project</Link></div>
        </div>
        {this.props.children}
      </section>
    );
  }
});

module.exports = ProjectDetail;
