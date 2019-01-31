import React, { Component } from "react";
import { StyleSheet, Text, View, ScrollView, Button } from "react-native";

class ScoreDot extends Component {
  render() {
    return (
      <View
        style={[
          styles.dot,
          { backgroundColor: this.props.score ? "green" : "red" }
        ]}
      />
    );
  }
}

const styles = StyleSheet.create({
  dot: {
    height: 30,
    width: 30,
    borderRadius: 50
  }
});

export default ScoreDot;
