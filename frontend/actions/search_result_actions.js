var AppDispatcher = require('../dispatcher/dispatcher.js');
var SearchResultConstants = require('../constants/search_result_constants.js');

var SearchResultActions = {
  receiveResults: function (response) {
    AppDispatcher.dispatch({
      actionType: SearchResultConstants.SEARCH_RESULTS_RECEIVED,
      searchResults: response.search_results
    });
  },

  searchInitiate: function () {
    AppDispatcher.dispatch({
      actionType: SearchResultConstants.SEARCH_INITIATED,
    });
  }
};

module.exports = SearchResultActions;
