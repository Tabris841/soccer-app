import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RadioButton';

import TeamList from './Team-list';
import TeamStats from './Team-stats';
import Player from './Player';

export default class App extends Component {
  constructor(props) {
    super(props);

    // setting up the state
    this.state = { players: [] };
  }

  componentWillMount() {
    this.setState({
      players: [
        {
          _id: 1,
          name: 'Manny Henri',
          ballManipulation: 2,
          kickingAbilities: 3,
          passingAbilities: 1,
          duelTackling: 1,
          fieldCoverage: 3,
          blockingAbilities: 2,
          gameStrategy: 3,
          playmakingRisks: 2
        },
        {
          _id: 2,
          name: 'Speedy Gonz',
          ballManipulation: 2,
          kickingAbilities: 3,
          passingAbilities: 1,
          duelTackling: 1,
          fieldCoverage: 3,
          blockingAbilities: 2,
          gameStrategy: 3,
          playmakingRisks: 2
        },
        {
          _id: 3,
          name: 'Tracey Good',
          ballManipulation: 2,
          kickingAbilities: 3,
          passingAbilities: 1,
          duelTackling: 1,
          fieldCoverage: 3,
          blockingAbilities: 2,
          gameStrategy: 3,
          playmakingRisks: 2
        }
      ]
    });
  }

  renderPlayers() {
    return this.state.players.map(player => (
      <TeamList key={player._id} player={player} />
    ));
  }
  render() {
    return (
      <MuiThemeProvider>
        <RaisedButton label="Oh Yeah we did it!" />
      </MuiThemeProvider>
    );
  }
}
