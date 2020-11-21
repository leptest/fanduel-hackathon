import React from 'react';
import {
	StyleSheet,
	Text,
	View,
	Button,
} from 'react-native';
import { shuffle } from 'underscore';
import Players from './components/Players';
import Scores from './components/Scores';

const jsonData = require('./Player.json');

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	won: {
		fontSize: 40,
		color: 'red',
	},
});

const playersReduced = jsonData.players.map((player) => ({
	name: `${player.last_name} ${player.last_name}`,
	image: player.images.default.url,
	fppg: player.fppg,
}));

const initialShuffle = shuffle(playersReduced);
const initialPair = initialShuffle.slice(0, 2);

export default class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			players: playersReduced,
			scores: [],
			currentPair: initialPair,
		};
		this.handleScore = this.handleScore.bind(this);
		this.getNewPair = this.getNewPair.bind(this);
	}

	componentDidMount() {
		// this.getNewPair();
	}

	handleScore(answer) {
		const { scores } = this.state;

		if (scores.length > 9) return;

		if (answer && scores.length < 10) {
			scores.push(answer);
			this.setState({ scores });
		}
		if (scores.length > 9) {
			this.setState({ won: true });
		}
		this.getNewPair();
	}

	getNewPair() {
		const { players } = this.state;
		const newShuffle = shuffle(players);
		const pair = newShuffle.slice(0, 2);
		this.setState({ currentPair: pair });
	}

	render() {
		const { currentPair, scores, won } = this.state;

		let WonMessage;
		if (won) {
			WonMessage = <Text style={styles.won}>Won!</Text>;
		}

		return (
			<View style={styles.container}>
				{WonMessage}
				<Players
					players={currentPair}
					handleScore={this.handleScore}
				/>
				<Scores scores={scores} />
				<Button onPress={() => this.setState({ scores: [], won: false })} title="Reset" />
			</View>
		);
	}
}
