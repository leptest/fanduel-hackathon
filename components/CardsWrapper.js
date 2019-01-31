import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Player from './Player';

class CardsWrapper extends Component {
	constructor(props) {
		super(props);
		// this.state = ;
	}

	// pickTwoRandom() {
	// }
	//
	// onChoice() {
	// }
	//
	// checkScore() {
	// }
	//
	// updateScore() {
	// }

	render() {
		const allPlayers = this.props.allPlayers;
		const test = {
			name: "daniel chapman",
			image: "https://d17odppiik753x.cloudfront.net/playerimages/nba/15860.png",
			fppg: "15.124312"
		};
		return (
			<View>
          <Player player={test} />
		      <Player player={test} />
			</View>
		);
	}

}

export default CardsWrapper;
