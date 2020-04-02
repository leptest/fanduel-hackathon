import React, { Component } from 'react';
import {
	View,
} from 'react-native';
import Player from './Player';

class Players extends Component {
	handlePlayerClick(player) {
		const {
			players,
			handleScore,
		} = this.props;

		const player1 = players[0];
		const player2 = players[1];

		let answer;

		if (player === 'player1') {
			answer = player1.fppg > player2.fppg;
		}
		if (player === 'player2') {
			answer = player2.fppg > player1.fppg;
		}

		return handleScore(answer);
	}

	render() {
		const {
			players,
		} = this.props;

		const player1 = players[0];
		const player2 = players[1];

		return (
			<View>
				<Player
					player={player1}
					onClick={() => this.handlePlayerClick('player1')}
				/>
				<Player
					player={player2}
					onClick={() => this.handlePlayerClick('player2')}
				/>
			</View>
		);
	}
}

export default Players;
