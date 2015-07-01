var React = require('react');

var Repos = React.createClass({

  propTypes: {
    //Validazione dei props passati dal parent
    username: React.PropTypes.string.isRequired,
    repos: React.PropTypes.array.isRequired
  },


  render: function() {
    return (
    <div>
      User Profile <br />
      Username: {this.props.username} <br />
      Repos: {this.props.repos}
    </div>
    );
  }
});

module.exports = Repos;
