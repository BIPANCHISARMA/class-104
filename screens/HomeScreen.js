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
          <ImageBackground
            source={require('../assets/wallpaper.png')}
            style={styles.backgroundImage}>
            <Text
              style={{
                fontSize: 25,
                fontWeight: 800,
                color: 'midnightblue',
                alignSelf: 'center',
              }}>
              DAY ORDER
            </Text>
            <View style={styles.buttonsContainer}>
              <TouchableOpacity
                style={styles.button1}
                onPress={() => this.props.navigation.navigate('DAY1')}>
                <Text style={{ fontSize: 20, color: 'white' }}>DAY1</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.button2}
                onPress={() => this.props.navigation.navigate('DAY2')}>
                <Text style={{ fontSize: 20, color: 'white' }}>DAY2</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.button3}
                onPress={() => this.props.navigation.navigate('DAY3')}>
                <Text style={{ fontSize: 20, color: 'white' }}>DAY3</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.button4}
                onPress={() => this.props.navigation.navigate('DAY4')}>
                <Text style={{ fontSize: 20, color: 'white' }}>DAY4</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.button5}
                onPress={() => this.props.navigation.navigate('DAY5')}>
                <Text style={{ fontSize: 20, color: 'white' }}>DAY5</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.button6}
                onPress={() => this.props.navigation.navigate('DAY6')}>
                <Text style={{ fontSize: 20, color: 'white' }}>DAY6</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.button7}
                onPress={() => this.props.navigation.navigate('DAY7')}>
                <Text style={{ fontSize: 20, color: 'white' }}>DAY7</Text>
              </TouchableOpacity>
            </View>
          </ImageBackground>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  buttonsContainer: {
    alignSelf: 'center',
    marginTop: 1,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },

  button1: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderRadius: 15,
    backgroundColor: 'orange',
    margin: 10,
    width: 200,
    height: 50,
  },
  button2: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderRadius: 15,
    backgroundColor: 'seagreen',
    margin: 10,
    width: 200,
    height: 50,
  },
  button3: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderRadius: 15,
    backgroundColor: 'crimson',
    margin: 10,
    width: 200,
    height: 50,
  },
  button4: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderRadius: 15,
    backgroundColor: 'deeppink',
    margin: 10,
    width: 200,
    height: 50,
  },
  button5: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderRadius: 15,
    backgroundColor: 'darkolivegreen',
    margin: 10,
    width: 200,
    height: 50,
  },
  button6: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderRadius: 15,
    backgroundColor: 'darkmagenta',
    margin: 10,
    width: 200,
    height: 50,
  },
  button7: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderRadius: 15,
    backgroundColor: 'lightcoral',
    margin: 10,
    width: 200,
    height: 50,
  },
});
