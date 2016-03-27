# Phase 5: Rewards

## Rails
### Models
* Rewards

### Controllers
* RewardsController (new, create, index)

### Views
* rewards/index.json.jbuilder

## Flux
### Views (React Components)
* RewardsIndex
  - RewardIndexItem
* RewardForm

### Stores
* Rewards

### Actions
* ApiActions.receiveAllRewards -> triggered by ApiUtil
* RewardActions.fetchAllRewards -> triggers ApiUtil
* RewardActions.createReward
* ProjectActions.updateProject

### ApiUtil
* ApiUtil.fetchAllRewards
* ApiUtil.fetchSingleReward
* ApiUtil.createReward
* ApiUtil.updateProject

## Gems/Libraries
