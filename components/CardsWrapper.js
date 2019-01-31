import React, { Component } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import Player from "./Player";

class CardsWrapper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      player1: "",
      player2: ""
    };
    this.pickTwoRandom = this.pickTwoRandom.bind(this);
  }

  componentDidMount() {
    this.pickTwoRandom();
  }

  pickTwoRandom() {
    const allPayers = this.props.players;

    const index1 = Math.floor(Math.random() * allPayers.length);
    const index2 = Math.floor(Math.random() * allPayers.length);

    console.log(index1);
    console.log(index2);

    if (index1 === index2) {
      pickTwoRandom();
    }

    this.setState(
      {
        player1: allPayers[index1],
        player2: allPayers[index2]
      },
      () => {
        console.log(this.state);
      }
    );
  }
  // onChoice() {
  // }
  //
  // checkScore() {
  // }
  //
  // updateScore() {
  // }

  handlePlayerClick = player => {
    if (player === "player1") {
      return this.state.player1.fppg > this.state.player2.fppg;
    } else if (player === "player2") {
      return this.state.player2.fppg > this.state.player1.fppg;
    }
  };

  render() {
    const allPlayers = this.props.allPlayers;

    return (
      <View>
        <Player
          player={this.state.player1}
          onClick={() => handlePlayerClick("player1")}
        />
        <Player
          player={this.state.player2}
          onClick={() => handlePlayerClick("player2")}
        />
      </View>
    );
  }
}

export default CardsWrapper;
