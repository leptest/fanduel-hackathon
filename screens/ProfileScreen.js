import React, { Component } from 'react';
import { Text } from 'react-native';

class ProfileScreen extends Component {
  static navigationOptions = {
    title: 'Profile',
  };
  render() {
    const {navigate} = this.props.navigation;
    return (
      <Text>Some text</Text>
    );
  }
}

export default ProfileScreen;
