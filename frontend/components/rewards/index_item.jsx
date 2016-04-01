var React = require('react');

var RewardIndexItem = React.createClass({
  render: function () {
    return(
      <li className="reward-index-item">
        <div className="reward-value">${this.props.reward.value}</div>
        <div className="reward-description">{this.props.reward.description}</div>
      </li>
    );
  }
});

module.exports = RewardIndexItem;
