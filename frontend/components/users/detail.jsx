var React = require('react');
var ApiUtil = require('../../util/api_util.js');
var SessionStore = require('../../stores/session.js');
var ProjectIndexItem = require('../projects/index_item.jsx');


var UserDetail = React.createClass({
  getInitialState: function () {
    return({ currentUser: SessionStore.currentUser() });
  },

  render: function () {
    var createdProjects = this.state.currentUser.projects.map(function (project) {
      return(<ProjectIndexItem key={project.id} project={project} />)
    });

    var backedProjects = this.state.currentUser.backed_projects.map(function (project) {
      return(<ProjectIndexItem key={project.title} project={project} />)
    });

    return(
      <div className="user-page group">
        <ul className="user-projects group">
          <li className="user-span">Created Projects:</li>
          {createdProjects}
        </ul>

        <ul className="user-projects group">
          <li className="user-span">Backed Projects:</li>
          {backedProjects}
        </ul>
      </div>
    );
  }
});

module.exports = UserDetail;
