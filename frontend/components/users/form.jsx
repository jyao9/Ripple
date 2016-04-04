var React = require('react');
var ApiUtil = require('../../util/api_util.js');
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var Link = require('react-router').Link;

var UserForm = React.createClass ({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  mixins: [LinkedStateMixin],

  getInitialState: function () {
    return({ username: null, password: null });
  },

  createUser: function (event) {
    event.preventDefault();
    var newUser = this.state;

    ApiUtil.createUser(newUser, function () {
      this.context.router.push("/");
    }.bind(this));

    this.setState({ username: null, password: null });
  },

  render: function () {
    return(
      <form className="new-user group" onSubmit={this.createUser}>
        <div className="title">Sign up</div>
        <label>Username:
          <input
            type="text"
            valueLink={this.linkState("username")}
          />
        </label>

        <label>Password:
          <input
            type="password"
            valueLink={this.linkState("password")}
          />
        </label>

        <button className="enter">Sign up</button>
        <div className="account-change">Have an account?
          <Link to="login">Log in</Link>
        </div>
        <span className="or">------------------------------------- or -------------------------------------</span>
        <div className="fb"><a href="/auth/facebook">Sign in with Facebook</a></div>
      </form>
    );
  }
});

module.exports = UserForm;
