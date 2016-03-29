var React = require('react');
var History = require('react-router').History;

var NavBar = React.createClass({
  render: function () {
    return(
      <header className="header group">
        <nav className="header-nav group">
          <h1 className="header-logo">Ripple</h1>
          <ul className="header-list">
            <li>Start a project</li>
          </ul>
        </nav>
      </header>
    );
  }
});

module.exports = NavBar;
