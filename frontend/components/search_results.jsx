var React = require("react");
var SearchResultsStore = require("../stores/results.js");
var ApiUtil = require('../util/api_util.js');

var SearchResults = React.createClass({

  getInitialState: function () {
    return({ isSearching: false });
  },

  componentDidMount: function () {
    this.storeListener = SearchResultsStore.addListener(this._onChange);
  },

  componentWillUnmount: function () {
    this.storeListener.remove();
  },

  _onChange: function () {
    this.setState({isSearching: SearchResultsStore.isSearching()});
  },

  resultLis: function () {
    return <div>You found something!</div>;
  },

  render: function () {
    var allResults;
    if (this.state.isSearching) {
      if (this.props.projects.length !== 0) {
      
        allResults = this.resultLis();
      } else if (this.props.projects.length === 0) {
        allResults = <div>No results found</div>;
      }
    } else {
      allResults = <div>Searching...</div>
    }

    return (
      <ul>
        { allResults }
      </ul>
    );
  }

});

module.exports = SearchResults;
