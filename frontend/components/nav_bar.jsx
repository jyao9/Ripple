var React = require('react');
var Link = require('react-router').Link;
var SessionStore = require('../stores/session.js');
var ApiUtil = require('../util/api_util.js');

var NavBar = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  getInitialState: function() {
    return {
      currentUser: null
    };
  },

  componentDidMount: function() {
    this.sessionStoreToken = SessionStore.addListener(this.handleChange);
    this.handleChange();
  },

  componentWillUnmount: function() {
    this.sessionStoreToken.remove();
  },

  handleChange: function() {
    if (SessionStore.isLoggedIn()) {
      this.setState({ currentUser: SessionStore.currentUser() });
    }
  },

  handleClick: function () {
    ApiUtil.logout();
    this.setState({ currentUser: null })
  },

  render: function () {
    var button;
    var user;
    var sessionLinks;

    if (this.state.currentUser) {
      button = <button onClick={this.handleClick}>Logout</button>
      user = <div className="user">Me</div>;
    } else {
      sessionLinks = sessionLinks = <div className="user-info group">
        <div><Link to="users/new">Sign Up</Link></div>
        <div><Link to="login">Sign in</Link></div>
        </div>
    }

    return(
      <header className="header group">
        <nav className="header-nav group">
          <ul className="header-list">
            <h1 className="header-logo"><Link to="/">Ripple</Link></h1>
            <li className="project-list-item"><Link to="projects/new">Start a project</Link></li>
          </ul>
          {sessionLinks}
          {user}
          {button}
        </nav>
      </header>
    );
  }
});

module.exports = NavBar;
