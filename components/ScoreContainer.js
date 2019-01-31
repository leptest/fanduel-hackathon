import React, { Component } from "react";
import { StyleSheet, Text, View, ScrollView, Button } from "react-native";
import ScoreDot from "./ScoreDot";

class ScoreContainer extends Component {
  render() {
    console.log("Scores", this.props);
    return (
      <View style={styles.container}>
        {this.props.scores.map((score, i) => (
          <ScoreDot score={score} key={i} />
        ))}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: 300,
    height: 60,
    backgroundColor: "#ddd"
  }
});

export default ScoreContainer;
