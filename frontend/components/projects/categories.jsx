var React = require('react');
var ApiUtil = require('../../util/api_util.js');
var ProjectStore = require('../../stores/project.js');

var ProjectCategories = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

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

  handleClick: function (e) {
    var category = $(e.target).text();

    this.context.router.push({
      pathname: "filtered",
      query: {},
      state: {category: category}
    });
  },

  render: function () {
    if (this.state.projects === undefined || this.state.projects.length === 0) {
      return <div>Loading...</div>;
    }


    var id = 0;

    var categories = this.state.projects[0].categories.map(function (category){
      var method = category.toLowerCase();
      var projects = this.state.projects[0][method];
      id++;
      return(
        <ul key={id} className="category-type">
          <li onClick={this.handleClick} className="category">{category}</li>
          <li className="project-num">{projects} projects</li>
        </ul>
      )
    }.bind(this));

    return(
      <div className="categories group">
        {categories}
        {this.props.children}
      </div>
    );
  }
});

module.exports = ProjectCategories;
