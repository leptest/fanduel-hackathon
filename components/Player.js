import React, { Component } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

class Player extends Component {
  constructor(props) {
    super(props);
  }

  onClick() {}

  render() {
    const { name, image, fppg } = this.props.player;
    return (
      <TouchableOpacity
        onPress={() => console.log("Hello there")}
        style={styles.container}
      >
        <Text>{name}</Text>
        <Image source={image} />
        <Text>{fppg}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: 150,
    height: 300,
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start"
  }
});

export default Player;
