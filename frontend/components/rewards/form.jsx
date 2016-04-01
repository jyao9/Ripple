var React = require('react');
var ApiUtil = require('../../util/api_util.js');
var LinkedStateMixin = require('react-addons-linked-state-mixin');

var RewardForm = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  mixins: [LinkedStateMixin],

  getInitialState: function () {
    return({ project_id: null, value: null, description: null });
  },

  componentDidMount: function () {
    this.setState({ project_id: this.props.location.state.project_id })
  },

  createReward: function (event) {
    event.preventDefault();
    ApiUtil.createReward(this.state, function (project_id) {
      this.context.router.push("projects/" + project_id)
    }.bind(this));
  },

  render: function () {

    return(
      <form className="new-reward-form group" onSubmit={this.createReward}>
        <div className="new-reward-form-title">How will you thank the people who support you?</div>

        <div className="new-reward-num">Reward #1</div>
        <label className="pledge-amount">Pledge amount
          <input
            type="number"
            valueLink={this.linkState("value")}
          />
        </label>

        <label className="pledge-description">Description
          <textarea valueLink={this.linkState("description")} />
        </label>
        <button className="reward-submit">Create rewards</button>
      </form>
    );
  }
});

module.exports = RewardForm;
