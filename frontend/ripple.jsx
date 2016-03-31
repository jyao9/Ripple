var React = require('react');
var ReactDOM = require('react-dom');
var ApiUtil = require('./util/api_util.js');

var Router = require('react-router').Router;
var Route = require('react-router').Route;
var IndexRoute = require('react-router').IndexRoute;
var hashHistory = require('react-router').hashHistory;

var ProjectIndex = require('./components/projects/index.jsx');
var NavBar = require('./components/nav_bar.jsx');
var ProjectForm = require('./components/projects/form.jsx');
var ProjectDetail = require('./components/projects/detail.jsx');
var UserForm = require('./components/users/form.jsx');
var SessionForm = require('./components/session/form.jsx');
var SessionStore = require('./stores/session.js');

var App = React.createClass({
  render: function () {
    return(
      <div>
        <NavBar />
        {this.props.children}
      </div>
    );
  }
});

var routes = (
  <Route path="/" component={App} onEnter={_fetchUser}>
    <IndexRoute component={ProjectIndex}/>
    <Route path="projects/new" component={ProjectForm} onEnter={_requireLoggedIn} />
    <Route path="users/new" component={UserForm} />
    <Route path="login" component={SessionForm} />
    <Route path="projects/:projectId" component={ProjectDetail} />
  </Route>
);

document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render(
    <Router history={hashHistory}>{routes}</Router>,
    document.getElementById('root')
  );
});

function _requireLoggedIn(nextState, replace, asyncCompletionCallback) {
  if (!SessionStore.currentUserHasBeenFetched()) {
    ApiUtil.fetchCurrentUser(_redirectIfNotLoggedIn);
  } else {
    _redirectIfNotLoggedIn();
  }

  function _redirectIfNotLoggedIn() {
    if (!SessionStore.isLoggedIn()) {
      replace("/login");
    }

    asyncCompletionCallback();
  }
}

function _fetchUser (nextState, replace, asyncCompletionCallback) {
  if (!SessionStore.currentUserHasBeenFetched()) {
    ApiUtil.fetchCurrentUser(asyncCompletionCallback);
  }
}
