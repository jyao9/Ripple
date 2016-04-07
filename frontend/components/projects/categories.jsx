var React = require('react');
var ApiUtil = require('../../util/api_util.js');
var ProjectStore = require('../../stores/project.js');

var ProjectCategories = React.createClass({
  getInitialState: function () {
    return({ projects: ProjectStore.all() });
  },

  componentDidMount: function () {
    this.projectListener = ProjectStore.addListener(this._onChange);
    ApiUtil.fetchAllProjects();
  },

  componentWillUnmount: function () {
    this.projectListener.remove();
  },

  _onChange: function () {
    this.setState({ projects: ProjectStore.all() });
  },

  render: function () {
    if (this.state.projects === undefined || this.state.projects.length === 0) {
      return <div>Loading...</div>;
    }


    var categories = this.state.projects[0].categories.map(function (category){
      return <li className="category-type">{category}</li>;
    });

    return(
      <ul className="categories group">
        {categories}
      </ul>
    );
  }
});

module.exports = ProjectCategories;
