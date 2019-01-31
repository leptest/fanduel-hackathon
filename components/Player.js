import React, { Component } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

class Player extends Component {
  constructor(props) {
    super(props);
  }

  onClick() {}

  render() {
    const { name, images, fppg } = this.props.player;
  //  console.log(this.props.player.images["default"])
    //console.log(this.props.player)

    return (
      <TouchableOpacity
        onPress={() => console.log("Hello there")}
        style={styles.container}
      >
        <Image source={{ uri: "https://d17odppiik753x.cloudfront.net/playerimages/nba/9680.png"}} style={{ width: 150, height: 210 }} />
        <Text>{name}</Text>
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
