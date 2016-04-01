var React = require('react');
var ApiUtil = require('../../util/api_util.js');
var RewardStore = require('../../stores/reward.js');

var RewardsIndex = React.createClass({
  getInitialState: function () {
    return({ rewards: RewardStore.all(this.props.params.projectId) });
  },

  componentDidMount: function () {
    this.rewardListener = RewardStore.addListener(this._onChange);
    ApiUtil.fetchAllRewards(this.props.params.projectId);
  },

  componentWillUnmount: function () {
    this.rewardListener.remove();
  },

  _onChange: function () {
    this.setState({ rewards: RewardStore.all() });
  },

  render: function () {
    var rewards = this.state.rewards.map(function (reward) {
      return(<li>{reward.description}</li>);
    })

    return(
      <ul>
        {rewards}
      </ul>
    )
  }

});

module.exports = RewardsIndex;
