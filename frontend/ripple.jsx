var React = require('react');
var ReactDOM = require('react-dom');
var ApiUtil = require('./util/api_util.js');

var Router = require('react-router').Router;
var Route = require('react-router').Route;
var IndexRoute = require('react-router').IndexRoute;
var hashHistory = require('react-router').hashHistory;

var App = React.createClass({
  render: function () {
    return(
      <div>
        <header><h1>Ripple</h1></header>
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
    <Router>{routes}</Router>, document.getElementById('root')
  );
});
