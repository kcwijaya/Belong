import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
import Search from '../../components/Search.js'
import { Colors } from '../../constants/Colors.js'

export default class SearchIcon extends Component {
  render() {
    return (
        <TouchableHighlight  style={[styles.container, this.props.style]}> 
          <Icon size={30} 
            name='search' 
            style={styles.search} 
            onPress={this.props.onPress}
          />
        </TouchableHighlight>
    )
  }
}

const styles = StyleSheet.create({
  search: {
    zIndex: 2,
    color:'white'
  },
  container: {
    backgroundColor: Colors.accent, 
    width: 48, 
    height: 48, 
    borderRadius: 24,
    zIndex: 3,
    position: 'absolute', 
    padding: 6,
    paddingLeft: 7, 
    borderWidth: 1,
    overflow: 'hidden',
    borderColor: 'transparent',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.6,
    shadowRadius: 2,
  }
});