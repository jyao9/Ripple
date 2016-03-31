var React = require('react');
var ApiUtil = require('../../util/api_util.js');
var LinkedStateMixin = require('react-addons-linked-state-mixin');

var SessionForm = React.createClass ({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  mixins: [LinkedStateMixin],

  getInitialState: function() {
    return {
      username: "",
      password: ""
    };
  },

  handleSubmit: function(e) {
    e.preventDefault();

    var router = this.context.router;
    ApiUtil.login(this.state, function() {
      router.push("/");
    });
  },

  render: function () {
    return(
      <form className="new-user group" onSubmit={this.handleSubmit}>
        <div className="title">Sign in</div>
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

        <button>Sign in</button>
      </form>
    );
  }
});

module.exports = SessionForm;
