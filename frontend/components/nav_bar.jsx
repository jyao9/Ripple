var React = require('react');
var Link = require('react-router').Link;
var SessionStore = require('../stores/session.js');
var SearchResultsStore = require("../stores/results.js");
var ApiUtil = require('../util/api_util.js');
var SearchResults = require('./search_results.jsx');

var NavBar = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  getInitialState: function() {
    return {currentUser: null, query: ""};
  },

  componentDidMount: function() {
    this.sessionStoreToken = SessionStore.addListener(this.handleSessionChange);
    this.storeListener = SearchResultsStore.addListener(this.handleResultChange);
    this.handleSessionChange();
    this.handleResultChange();
    document.addEventListener("click", this.exitSearch);
  },

  exitSearch: function () {
    this.setState({ query: "" });
  },

  componentWillUnmount: function() {
    this.sessionStoreToken.remove();
    this.storeListener.remove();
    document.removeEventListener("click", this.exitSearch);
  },

  handleSessionChange: function() {
    if (SessionStore.isLoggedIn()) {
      this.setState({ currentUser: SessionStore.currentUser() });
    }
  },

  handleResultChange: function () {
    this.forceUpdate();
  },

  handleClick: function () {
    ApiUtil.logout();
    this.setState({ currentUser: null })
  },

  handleInputChange: function (e) {
    var query = e.currentTarget.value;
    this.setState({ query: query }, function () {
      if (query.length > 1) {
        this.search();
      }
    }.bind(this));
  },

  search: function (e) {
    ApiUtil.search(this.state.query);
  },

  signInAsGuest: function () {
    ApiUtil.login({ username: "Guest", password: "Password" }, this.handleSessionChange)
  },

  render: function () {
    var button;
    var user;
    var sessionLinks;
    var searchResults;

    if (this.state.currentUser) {
      button = <button className="logout" onClick={this.handleClick}>Logout</button>
      user = <div className="user" >
          <Link to="user/account">
            {this.state.currentUser.username}
          </Link>
        </div>;
    } else {
      sessionLinks = <div className="user-info group">
        <div><Link to="users/new">Sign Up</Link></div>
        <div><Link to="login">Sign in</Link></div>
        <div onClick={this.signInAsGuest} className="guest">Sign in as guest</div>
        </div>
    }

    if (this.state.query) {
      searchResults = <SearchResults projects={SearchResultsStore.all()}/>
    }

    return(
      <header className="header group">
        <nav className="header-nav group">
          <ul className="header-list group">
            <li>
              <h1 className="header-logo">
                <Link to="/">Ripple</Link>
              </h1>
            </li>
            <li className="project-list-item">
              <Link to="projects/new">Start a project</Link>
            </li>
            <li className="project-list-item header-category">
              <Link to="categories">Discover</Link>
            </li>
            <li>
              <img className="mglass" src={window.glass} />
            </li>
            <li>
              <input
                className="search-bar"
                placeholder="Search Projects"
                type="text"
                value={this.state.query}
                onChange={ this.handleInputChange } />
            </li>
          </ul>

          {sessionLinks}
          {user}
          {button}
        </nav>
        {searchResults}
      </header>
    );
  }
});

module.exports = NavBar;
