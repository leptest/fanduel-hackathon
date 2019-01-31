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

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      players: players.players,
      names: playerNames,
      currentChoice: "t",
      scores: []
    };
  }

  handleScore = answer => {
    const answers = this.state.scores;
    answers.push(answer);
    if (answers.length < 10) {
      this.setState({ scores: answers });
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <CardsWrapper
          players={this.state.players}
          handleScore={this.handleScore}
        />
        <ScoreContainer scores={this.state.scores} />
        <Button onPress={() => this.setState({ scores: [] })} title="Reset" />
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
