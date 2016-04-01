var React = require('react');
var ApiUtil = require('../../util/api_util.js');
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var Link = require('react-router').Link;

var RewardForm = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  mixins: [LinkedStateMixin],

  getInitialState: function () {
    return({ project_id: null, value: null, description: "" });
  },

  componentDidMount: function () {
    this.setState({ rewardSent: false, project_id: this.props.location.state.projectId })
  },

  createReward: function (event) {
    event.preventDefault();
    ApiUtil.createReward(this.state, function () {
      this.setState({ rewardSent: true, value: null, description: "" });
    }.bind(this));
  },

  render: function () {
    var link;
    var nextLink = "projects/" + this.state.project_id;

    if (this.state.rewardSent === true) {
      link = <div className="reward-done"><Link to={nextLink}>Finish rewards</Link></div>
    } else {
      link = <div></div>
    }

    return(
      <form className="new-reward-form group" onSubmit={this.createReward}>
        <div className="new-reward-form-title">How will you thank the people who support you?</div>

        <div className="info group">
          <div className="new-reward">Reward</div>
          <div className="reward-form-info">
            <label className="pledge-amount">Pledge amount
              <input
                type="number"
                valueLink={this.linkState("value")}
                />
            </label>

            <label className="pledge-description">Description
              <textarea valueLink={this.linkState("description")} />
            </label>
          </div>
        </div>
        <button className="reward-submit">Create reward</button>
        {link}
      </form>
    );
  }
});

module.exports = RewardForm;
