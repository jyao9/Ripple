var AppDispatcher = require("../dispatcher/dispatcher.js");
var RewardConstants = require("../constants/reward_constants.js");

var RewardActions = {
  receiveAllRewards: function (rewards) {
    AppDispatcher.dispatch({
      actionType: RewardConstants.REWARDS_RECEIVED,
      rewards: rewards
    });
  },
  receiveSingleReward: function (reward) {
    AppDispatcher.dispatch({
      actionType: RewardConstants.REWARD_RECEIVED,
      reward: reward
    });
  }
};

module.exports = RewardActions;
