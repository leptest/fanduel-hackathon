import React from "react";
import { StyleSheet, Text, View, ScrollView, Button } from "react-native";
import Player from "./components/Player";
import CardsWrapper from "./components/CardsWrapper";
import ScoreContainer from "./components/ScoreContainer";

const playerDataUrl =
  "https://gist.github.com/liamjdouglas/bb40ee8721f1a9313c22c6ea0851a105";

const players = require("./Player.json");
const playerNames = players.players.map(player => {
  return {
    name: `${player.last_name} ${player.last_name}`,
    image: player.images.default.url,
    fppg: player.fppg
  };
});

console.log("Player names", playerNames);

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      players: players.players.map(player => player),
      names: playerNames,
      currentChoice: "t",
      scores: [true, true, false, false, true, true, true, false, false, true]
    };
    // this.onPress
  }

  render() {
    return (
      <View style={styles.container}>
        <CardsWrapper players={this.state.players} />
        <ScoreContainer scores={this.state.scores} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  header: {
    marginBottom: 40,
    fontSize: 24,
    color: "#404040"
  },
  subHeader: {
    marginBottom: 10,
    fontSize: 20,
    color: "#404040"
  },
  content: {
    marginLeft: 40,
    marginRight: 40,
    fontSize: 16,
    color: "#404040"
  }
});
