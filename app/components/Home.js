var React = require('react');

var Home = React.createClass({
  render: function() {
    return (
      <h2 className="text-center">
        Search by Github Username Above
      </h2>
    );
  }
});

//React.render(<Home />, document.getElementById('app'));
module.exports = Home;
