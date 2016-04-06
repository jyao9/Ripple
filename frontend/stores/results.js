var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher.js');
var SearchResultConstants = require('../constants/search_result_constants.js');

var SearchResultsStore = new Store(AppDispatcher);

var _searchResults = [];

var _searchStatus = false;

SearchResultsStore.all = function () {
  return _searchResults.slice();
};

SearchResultsStore.isSearching = function () {
  return _searchStatus;
};


SearchResultsStore.__onDispatch = function (payload) {

  switch (payload.actionType) {
    case SearchResultConstants.SEARCH_RESULTS_RECEIVED:
      _searchResults = payload.searchResults;
      SearchResultsStore.__emitChange();
      break;
    case SearchResultConstants.SEARCH_INITIATED:
      _searchStatus = true;
      SearchResultsStore.__emitChange();
      break;
  }
};

module.exports = SearchResultsStore;
