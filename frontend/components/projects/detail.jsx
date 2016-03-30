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
    return(<div>{this.state.project.title}</div>);
  }
});

module.exports = ProjectDetail;
