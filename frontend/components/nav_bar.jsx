var React = require('react');
var Link = require('react-router').Link;

var NavBar = React.createClass({
  render: function () {
    return(
      <header className="header group">
        <nav className="header-nav group">
          <ul className="header-list">
            <h1 className="header-logo"><Link to="/">Ripple</Link></h1>
            <li className="project-list-item"><Link to="projects/new">Start a project</Link></li>
          </ul>
        </nav>
      </header>
    );
  }
});

module.exports = NavBar;
