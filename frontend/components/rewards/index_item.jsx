var React = require('react');

var RewardIndexItem = React.createClass({
  render: function () {
    return(
      <li className="reward-index-item">
        {this.props.reward.description}
      </li>
    );
  }
});

module.exports = RewardIndexItem;
