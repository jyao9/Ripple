var React = require('react');
var History = require('react-router').History;

var NavBar = React.createClass({
  render: function () {
    return(
      <header class="header">
        <nav class="header-nav">
          <h1 class="header-logo">Ripple</h1>
          <ul class="header-list">
            <li>Start a project</li>
          </ul>
        </nav>
      </header>
    );
  }
});

module.exports = NavBar;
