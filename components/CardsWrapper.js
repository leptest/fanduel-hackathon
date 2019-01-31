import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Player from './Player';

class CardsWrapper extends Component {
	constructor(props) {
		super(props);
		this.state={
			player1: '',
			player2: ''
		}
		this.pickTwoRandom = this.pickTwoRandom.bind(this);

	}

componentDidMount(){
	this.pickTwoRandom();
}

	pickTwoRandom() {
		const allPayers = this.props.players;

		const index1 = Math.floor(Math.random() * allPayers.length);
		const index2 = Math.floor(Math.random() * allPayers.length);

		console.log(index1);
		console.log(index2);

		if(index1 === index2){
			pickTwoRandom();
		}

		this.setState({
			player1: allPayers[index1],
			player2: allPayers[index2]
		}, () => {console.log(this.state)});

	}
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
