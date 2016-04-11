var React = require('react');

var Footer = React.createClass({
  render: function () {
    var http = require("http");
    setInterval(function() {
        http.get("http://ripplestarter.herokuapp.com");
    }, 1200000);

    return(
      <footer className="footer">
        <ul>
          <li>Ripple</li>
        </ul>
      </footer>
    );
  }
});

module.exports = Footer;
