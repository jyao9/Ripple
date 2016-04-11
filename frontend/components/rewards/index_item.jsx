var React = require('react');
var ApiUtil = require('../../util/api_util.js');
var Modal = require('react-modal');
var SessionStore = require('../../stores/session.js');

var customStyles = {
  overlay: {
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100%',
    height: '180%',
    zIndex: '10',
    backgroundColor: 'rgba(0,0,0,0.5)'
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    backdrop: '#ccc',
  }
};

var RewardIndexItem = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  getInitialState: function () {
    return { modalIsOpen: false, currentUser: null };
  },

  componentDidMount: function () {
    this.sessionStoreToken = SessionStore.addListener(this.handleSessionChange);
    this.handleSessionChange();
  },

  componentWillUnmount: function() {
    this.sessionStoreToken.remove();
  },

  handleSessionChange: function() {
    if (SessionStore.isLoggedIn()) {
      this.setState({ currentUser: SessionStore.currentUser() });
    }
  },

  openModal: function() {
    this.setState({modalIsOpen: true});
  },

  closeModal: function() {
    this.setState({modalIsOpen: false});
    this.context.router.push("projects/" + this.props.reward.project_id)
  },

  handleClick: function (e) {
    e.preventDefault();

    var backers = this.props.reward.backers;
    var isBacker = false;
    for (var i = 0; i < backers.length; i++) {
      if (backers[i].id === this.state.currentUser.id) {
        isBacker = true;
      };
    };

    if (isBacker) {
      alert("You have already backed this project and cannot donate again.");
      this.context.router.push("projects/" + this.props.reward.project_id);
    } else {
      ApiUtil.createBacking(
        { reward_id: this.props.reward.id },
        this.props.reward.project_id,
        this.presentMessage()
      );
    }
  },

  presentMessage: function () {
    this.openModal();
  },

  render: function () {

    return(
      <li className="reward-index-item" onClick={this.handleClick}>
        <div className="reward-value">${this.props.reward.value}</div>
        <div className="reward-description">{this.props.reward.description}</div>
          <Modal
            isOpen={this.state.modalIsOpen}
            onRequestClose={this.closeModal}
            style={customStyles} >

            <h2>Thank you for contributing to this project!</h2>
            <div className="pop-message">You have just created a ripple</div>

          </Modal>
      </li>
    );
  }
});

module.exports = RewardIndexItem;
