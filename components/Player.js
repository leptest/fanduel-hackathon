import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

class Player extends Component {
	constructor(props) {
		super(props);
		// this.state = ;
	}

	render() {
		return (
      <View>
        <Text>{this.props.test}</Text>
      </View>
		);
	}

}

export default Player;
