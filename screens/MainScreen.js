import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Header,
  Image,
  ImageBackground,
} from 'react-native';

import AppHeader from '../components/AppHeader';
export default class HomeScreen extends Component {
  render() {
    return (
      <View>
        <AppHeader />
        <View>
          <View style={styles.upperContainer}>
            <View style={styles.buttonsContainer}>
              <Image
                source={require('../assets/clipart.png')}
                style={styles.appicon}
              />

              <Text
                style={{
                  fontSize: 22,
                  fontWeight: 800,
                  color: 'slateblue',
                  alignItems: 'center',
                  marginTop: -28,
                }}>
                Are you bored of cooking the same dish everyday? Then worry not
                cause here you'll get new and different recipes everyday! You
                can try and experiment the dishes however you want..
              </Text>

              <TouchableOpacity
                style={styles.buttons}
                onPress={() => this.props.navigation.navigate('HomeScreen')}>
                <Text style={{ fontSize: 20, color: 'white' }}>
                  GET STARTED
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  upperContainer: {
    flex: 1,
    backgroundColor: '#e6e6fa',
  },
  buttonsContainer: {
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: 400,
  },

  buttons: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderRadius: 15,
    backgroundColor: 'rebeccapurple',
    margin: 10,
    width: 200,
    height: 50,
  },
  appicon: {
    width: 280,
    height: 280,
    resizeMode: 'contain',
    marginTop: -400,
  },
});
