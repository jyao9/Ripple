var AppDispatcher = require("../dispatcher/dispatcher.js");
var SessionConstants = require("../constants/session_constants.js");

var SessionActions = {
  currentUserReceived: function(currentUser) {
    AppDispatcher.dispatch({
      actionType: SessionConstants.CURRENT_USER_RECEIVED,
      currentUser: currentUser
    });
  },

  logout: function() {
    AppDispatcher.dispatch({
      actionType: SessionConstants.LOGOUT
    });
  }
};

module.exports = SessionActions;
