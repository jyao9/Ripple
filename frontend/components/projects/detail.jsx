var React = require('react');
var ApiUtil = require('../../util/api_util.js');
var ProjectStore = require('../../stores/project.js');

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
    if(this.state.project === undefined) {
      return <div></div>;
    }

    return(
      <section>
        <div className="content-main">
          <div className="project-title"><h1>{this.state.project.title}</h1></div>
          <div className="project-author"><h3>{this.state.project.author_id}</h3></div>
          <div className="project-img">Project image here</div>
          <div className="project-description">{this.state.project.description}</div>
        </div>

        <div className="content-sidebar">
          <div className="backer-info">
            <div className="count">0</div>
            <span className="text">backers</span>
          </div>

          <div className="pledge-info">
            <div className="count">${this.state.project.status}</div>
            <span className="text">pledged of {this.state.project.goal} goal</span>
          </div>

          <div className="duration-info">
            <div className="count">{this.state.project.duration}</div>
            <span className="text">days to go</span>
          </div>
        </div>
      </section>
    );
  }
});

module.exports = ProjectDetail;
