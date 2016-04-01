var Store = require("flux/utils").Store;
var AppDispatcher = require("../dispatcher/dispatcher.js");
var RewardStore = new Store(AppDispatcher);

var RewardConstants = require("../constants/reward_constants.js");


var _rewards = {};

RewardStore.all = function () {
  var rewards = [];
  Object.keys(_rewards).forEach(function (id) {
    rewards.push(_rewards[id]);
  });
  return rewards;
};

var resetRewards = function (rewards) {
  _rewards = {};
  rewards.forEach(function (reward) {
    _rewards[reward.id] = reward;
  });
};

RewardStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case RewardConstants.REWARDS_RECEIVED:
      resetRewards(payload.rewards);
      RewardStore.__emitChange();
      break;
  }
};

module.exports = RewardStore;
