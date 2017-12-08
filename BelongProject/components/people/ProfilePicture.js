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
    width: 340, 
    height: 340, 
    borderRadius: 170,
    position: 'absolute', 
    left: 120, 
    top: -30
  },
  container: {
    flex: 1, 
    justifyContent: 'center',
    flexDirection: 'row'
  },
});