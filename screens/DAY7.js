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

export default class HomeScreen extends Component {
  render() {
    return (
      <View>
        <View>
          <View style={styles.buttonsContainer}>
            <Image
              source={require('../assets/day7.png')}
              style={styles.appicon}
            />
            <Text
              style={{
                fontSize: 32,
                fontWeight: 800,
                color: 'orange',
                marginTop: -28,
              }}>
              MEATBALLS AND SOUP
            </Text>

            <TouchableOpacity
              style={styles.buttons}
              onPress={() => this.props.navigation.navigate('HomeScreen')}>
              <Text style={{ fontSize: 20, color: 'white' }}>Back</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
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
    backgroundColor: 'green',
    margin: 10,
    width: 200,
    height: 50,
  },
  appicon: {
    width: 280,
    height: 280,
    resizeMode: 'contain',
    marginTop: -350,
  },
});
