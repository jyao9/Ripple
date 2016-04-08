var React = require('react');
var ReactDOM = require('react-dom');
var Modal = require('react-modal');
var ApiUtil = require('./util/api_util.js');

var Router = require('react-router').Router;
var Route = require('react-router').Route;
var IndexRoute = require('react-router').IndexRoute;
var hashHistory = require('react-router').hashHistory;

var ProjectIndex = require('./components/projects/index.jsx');
var NavBar = require('./components/nav_bar.jsx');
var ProjectForm = require('./components/projects/form.jsx');
var ProjectDetail = require('./components/projects/detail.jsx');
var ProjectCategories = require('./components/projects/categories.jsx');
var ProjectCategoriesIndex = require('./components/projects/categories_index.jsx');
var UserDetail = require('./components/users/detail.jsx');
var UserForm = require('./components/users/form.jsx');
var SessionForm = require('./components/session/form.jsx');
var SessionStore = require('./stores/session.js');
var RewardsIndex = require('./components/rewards/index.jsx');
var RewardForm = require('./components/rewards/form.jsx');
var Footer = require('./components/footer.jsx');

var App = React.createClass({
  render: function () {
    return(
      <div>
        <NavBar />
        {this.props.children}
        <Footer />
      </div>
    );
  }
});

var routes = (
  <Route path="/" component={App} onEnter={_fetchUser}>
    <IndexRoute component={ProjectIndex}/>
    <Route path="projects/new" onEnter={_requireLoggedIn}>
      <IndexRoute component={ProjectForm} />
      <Route path="rewards" component={RewardForm} />
    </Route>
    <Route path="categories" component={ProjectCategories} />
    <Route path="filtered" component={ProjectCategoriesIndex} />
    <Route path="users/new" component={UserForm} />
    <Route path="user/account" component={UserDetail} />
    <Route path="login" component={SessionForm} />
    <Route path="projects/:projectId">
      <IndexRoute component={ProjectDetail} />
      <Route path="rewards" component={RewardsIndex} onEnter={_requireLoggedIn} />
      <Route path="edit" component={ProjectForm} />
    </Route>
  </Route>
);

document.addEventListener("DOMContentLoaded", function () {
  Modal.setAppElement(document.getElementById('root'));

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
