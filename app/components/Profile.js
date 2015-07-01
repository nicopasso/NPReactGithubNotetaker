var React = require('react');
var Router = require('react-router');
var UserProfile = require('./github/UserProfile');
var Repos = require('./github/Repos');
var Notes = require('./notes/Notes');
var ReactFireMixin = require('reactfire');
var Firebase = require('firebase');


var Profile = React.createClass({

  mixins: [Router.State, ReactFireMixin], //mi permette di ottenere il parametro 'username' appeso alla route "profile/{username}"

  getInitialState: function() {
    return {
      notes: [],
      bio: {name: 'Nico'},
      repos: ['repo1', 'repo2', 'repo3']
    }
  },

  componentDidMount: function() {
    //ajax, Firebase ecc...
    this.ref = new Firebase('https://github-saver-react.firebaseio.com/');
    var childRef = this.ref.child(this.getParams().username); //https://github-saver-react.firebaseio.com/{username}
    this.bindAsArray(childRef, 'notes'); //prende i dati da childRef e li mette in notes
  },

  componentWillUnmount: function() {
    this.unbind('notes'); //remove the listener on Firebase
  },

  handleAddNote: function(newNote) {
    this.ref.child(this.getParams().username).set(this.state.notes.concat([newNote]));
  },

  render: function() {

    var username = this.getParams().username;

    return (
      <div className="row">
        <div className="col-md-4">
          <UserProfile username={username} bio={this.state.bio}/>
        </div>
        <div className="col-md-4">
          <Repos username={username} repos={this.state.repos}/>
        </div>
        <div className="col-md-4">
          <Notes
            username={username}
            notes={this.state.notes}
            addNote={this.handleAddNote} />
        </div>
      </div>
    );
  }
});

module.exports = Profile;
