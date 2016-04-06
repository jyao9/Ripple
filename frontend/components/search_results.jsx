var React = require("react");
var SearchResultsStore = require("../stores/results.js");
var ApiUtil = require('../util/api_util.js');
var ProjectIndexItem = require('./projects/index_item.jsx');
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

  render: function () {
    var userProjects = [];
    this.props.projects.forEach(function (item) {
      if (item._type === "Project") {
        userProjects.push(
          <ProjectIndexItem key={item.id} project={item} />
        );
      } else {
        item.projects.forEach(function (project) {
          userProjects.push(
            <ProjectIndexItem key={project.id} project={project} />
          )
        });
      }
    });

    var allResults;
    if (this.state.isSearching) {
      if (this.props.projects.length !== 0) {

        allResults = userProjects.splice(0, 4);
      } else if (this.props.projects.length === 0) {
        allResults = <div className="no-result">No results found</div>;
      }
    } else {
      allResults = <div className="searching">Searching...</div>
    }

    return (
      <ul className="search-results group">
        { allResults }

        {this.props.children}
      </ul>
    );
  }

});

module.exports = SearchResults;
