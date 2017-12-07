import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
import Search from '../../components/Search.js'
import { Colors } from '../../constants/Colors.js'

export default class PlusIcon extends Component {
  render() {
    return (
        <Icon size={55} 
          color={Colors.accent} 
          name='plus-circle' 
          style={[styles.plus,this.props.style]} 
          onPress={this.props.onPress}
        />
    )
  }
}

const styles = StyleSheet.create({
  plus: {
    position: 'absolute', 
    zIndex: 1, 
    backgroundColor: 'transparent',
    right: 20,
    opacity: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 1,
  }
});