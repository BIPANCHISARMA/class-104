import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class AppHeader extends React.Component {
  render() {
    return (
      <View style={styles.textContainer}>
        <Text style={styles.text}>Recipe Train </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textContainer: {
    backgroundColor: 'slateblue',
  },
  text: {
    color: 'white',
    padding: 20,
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
