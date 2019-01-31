import React from 'react';
import { StyleSheet, Text, View, ScrollView, Button } from 'react-native';
import { createStackNavigator, createAppNavigator } from 'react-navigation';
import Player from './components/Player';

const playerDataUrl = "https://gist.github.com/liamjdouglas/bb40ee8721f1a9313c22c6ea0851a105"

const players = require('./Player.json')
const playerNames = players.players.map(player => player.last_name);

// import HomeScreen from './screens/HomeScreen';
// import ProfileScreen from './screens/ProfileScreen';
//
// const MainNavigator = createStackNavigator({
//   Home: {screen: HomeScreen},
//   Profile: {screen: ProfileScreen},
// },
// {
//   initialRouteName: 'Home',
// });
//
//
// const App = createAppNavigator(MainNavigator);
//
// export default App;


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      players: players.players.map(player => player),
      names: playerNames
    };
    // this.onPress
  }

  onPress() {
    console.log('pressed');
  }
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          {this.state.names.map((name, index) => {
            return <Button key={index} title={name} />
          })}
        </ScrollView>
        {/* <Text style={styles.header}> Welcome to the Hackathon</Text>
        <Text style={styles.subHeader} >PlayerData url:</Text>
        <Text style={styles.content} >{playerDataUrl}</Text> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    padding: 40,
    paddingTop: 100
  },
  header: {
    marginBottom: 40,
    fontSize: 24,
    color: '#404040',
  },
  subHeader: {
    marginBottom: 10,
    fontSize: 20,
    color: '#404040',
  },
  content: {
    marginLeft: 40,
    marginRight: 40,
    fontSize: 16,
    color: '#404040',
  }
});
