var React = require('react');

var UserProfile = React.createClass({

  propTypes: {
    //Validazione dei props passati dal parent
    username: React.PropTypes.string.isRequired,
    bio: React.PropTypes.object.isRequired
  },

  render: function() {
    return (
      <div>
        User Profile <br />
        Username: {this.props.username} <br />
        Bio: {this.props.bio}
      </div>
    );
  }
});

module.exports = UserProfile;
