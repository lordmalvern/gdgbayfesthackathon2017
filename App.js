import React from 'react';
import * as firebase from 'firebase';
import { StyleSheet, Text, TextInput, View, Image, ScrollView, Animated } from 'react-native';
import { StackNavigator } from 'react-navigation';

var config = {
	apiKey: "AIzaSyDPmU915I0VZJe_yuKafGBHBMx48d_5djc",
	authDomain: "crater-1891a.firebaseapp.com",
	databaseURL: "https://crater-1891a.firebaseio.com",
	projectId: "crater-1891a",
	storageBucket: "crater-1891a.appspot.com",
	messagingSenderId: "66736752409"
};

firebase.initializeApp(config);

const App = StackNavigator({
	Home: { screen: HomeScreen },
	Merchants: { screen: MerchantsScreen },
	Crates: { screen: CratesScreen },
	Rewards: { screen: RewardsScreen },
});

class HomeScreen extends React.Component {
	
}

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
