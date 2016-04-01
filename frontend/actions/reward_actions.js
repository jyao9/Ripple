var AppDispatcher = require("../dispatcher/dispatcher.js");
var RewardConstants = require("../constants/reward_constants.js");

var RewardActions = {
  receiveAllRewards: function (rewards) {
    AppDispatcher.dispatch({
      actionType: RewardConstants.REWARDS_RECEIVED,
      rewards: rewards
    });
  }
};

module.exports = RewardActions;
