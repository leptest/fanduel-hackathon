import React, { Component } from "react";
import { StyleSheet, Text, View, ScrollView, Button } from "react-native";

class ScoreDot extends Component {
  render() {
    return <View style={styles} />;
  }
}

const styles = StyleSheet.create({
  dot: {
    height: 40,
    width: 40,
    borderRadius: 50,
    backgroundColor: "red"
  }
});

export default ScoreDot;
