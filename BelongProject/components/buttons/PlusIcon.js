import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
import {Dimensions} from 'react-native'
import { Col, Row, Grid } from "react-native-easy-grid";
import LargeButton from '../../components/buttons/LargeButton.js'
import Search from '../../components/Search.js'
import { Colors } from '../../constants/Colors.js'
import QAListingView from '../../components/listings/QAListingView.js'

export default class QAHome extends Component {
  render() {
    return (
        <Icon size={55} 
          color={Colors.accent} 
          name='plus-circle' 
          style={styles.plus} 
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
    bottom: 60, 
    right: 20
  }
});