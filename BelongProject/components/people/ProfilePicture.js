import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

export default class ProfilePicture extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.image} source={this.props.source} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  image: {
    width: 200, 
    height: 200, 
    borderRadius: 100,
    marginTop: 40, 
    marginBottom: 20
  },
  container: {
    flex: 1, 
    justifyContent: 'center',
    flexDirection: 'row'
  }
});