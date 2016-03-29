var React = require('react');
var ReactDOM = require('react-dom');
var ApiUtil = require('./util/api_util.js');

var Router = require('react-router').Router;
var Route = require('react-router').Route;
var IndexRoute = require('react-router').IndexRoute;
var hashHistory = require('react-router').hashHistory;

var ProjectIndex = require('./components/projects/index.jsx');
var NavBar = require('./components/nav_bar.jsx');

var App = React.createClass({
  render: function () {
    return(
      <div>
        <NavBar />
        <ProjectIndex />
        {this.props.children}
      </div>
    );
  }
});

var routes = (
  <Route path="/" component={App}>

  </Route>
);

document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render(
    <Router hashHistory={hashHistory}>{routes}</Router>, document.getElementById('root')
  );
});
