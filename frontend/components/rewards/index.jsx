var React = require('react');
var ApiUtil = require('../../util/api_util.js');
var RewardStore = require('../../stores/reward.js');
var RewardIndexItem = require('./index_item.jsx');

var RewardsIndex = React.createClass({
  getInitialState: function () {
    return({ rewards: RewardStore.all(this.props.params.projectId) });
  },

  componentDidMount: function () {
    this.rewardListener = RewardStore.addListener(this._onChange);
    ApiUtil.fetchAllRewards(this.props.params.projectId);
    this.forceUpdate();
  },

  componentWillUnmount: function () {
    this.rewardListener.remove();
  },

  _onChange: function () {
    this.setState({ rewards: RewardStore.all() });
  },

  render: function () {

    var header;

    if (this.state.rewards[0] === undefined) {
      header = <div></div>;
    } else {
      header = <div className="reward-header">
        <div className="reward-header-title">{this.state.rewards[0].project_title}</div>
        <div className="reward-header-author">by {this.state.rewards[0].project_author}</div>
      </div>
    }

    var rewards = this.state.rewards.map(function (reward) {
      return(
        <RewardIndexItem key={reward.id} reward={reward} />
      );
    })

    return(
      <div className="group">
        {header}
        <ul className="reward-list group">
          <div className="reward-list-title">Let's choose your reward!</div>
          {rewards}
        </ul>
      </div>
    )
  }

});

module.exports = RewardsIndex;
