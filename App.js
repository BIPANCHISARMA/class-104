import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import Constants from 'expo-constants';

// You can import from local files

import DAY1 from './screens/DAY1';
import DAY2 from './screens/DAY2';
import DAY3 from './screens/DAY3';
import DAY4 from './screens/DAY4';
import DAY5 from './screens/DAY5';
import DAY6 from './screens/DAY6';
import DAY7 from './screens/DAY7';
import HomeScreen from './screens/HomeScreen';
import MainScreen from './screens/MainScreen';
export default class App extends React.Component {
  render() {
    return (
      <View>
        <AppContainer />
      </View>
    );
  }
}

var AppNavigator = createSwitchNavigator({
  MainScreen: MainScreen,
  DAY1: DAY1,
  DAY2: DAY2,
  DAY3: DAY3,
  DAY4: DAY4,
  DAY5: DAY5,
  DAY6: DAY6,
  DAY7: DAY7,
  HomeScreen: HomeScreen,
});

const AppContainer = createAppContainer(AppNavigator);
