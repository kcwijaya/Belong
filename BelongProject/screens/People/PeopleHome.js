import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { TabNavigator, StackNavigator } from "react-navigation";

import Icon from 'react-native-vector-icons/FontAwesome'
import {Dimensions} from 'react-native'
import { Col, Row, Grid } from "react-native-easy-grid";
import LargeButton from '../../components/buttons/LargeButton.js'
import Search from '../../components/Search.js'
import { Colors } from '../../constants/Colors.js'
import Peers from './PeersList.js'
import Messages from './MessagesList.js'

const deviceW = Dimensions.get('window').width
const deviceH = Dimensions.get('window').height;


const PeopleTabNav = TabNavigator({
  Messages: {
    screen: Messages,
     navigationOptions: {
      tabBarIcon: ({ tintColor}) => (
        <Icon name='comments' color={tintColor} size={22} />
        ),
      tabBarLabel: 'Messages',
    },
  },
  Peers: {
    screen: Peers,
    navigationOptions: {
       tabBarIcon: ({ tintColor}) => (
        <Icon name='user' color={tintColor} size={22} />
        ),
      tabBarLabel: 'Peers',
    },
  },

},
{
  tabBarPosition: 'top',
  animationEnabled: true,
  tabBarOptions: {
    activeTintColor: Colors.accent,
    activeBackgroundColor: Colors.unselectedTop, 
    inactiveBackgroundColor: Colors.white, 
    inactiveTintColor: Colors.unselectedTab, 
    labelStyle: {
      fontSize: 14,
      marginTop: 7,
      fontFamily: 'HelveticaNeue-Thin'
    },
    tabStyle: {
      padding: 5  
    },
  },
  initialRouteName: 'Messages'
});

export default PeopleTabNav;

const styles = StyleSheet.create({
  icon: {
    width: 26,
    height: 26,
  },
});
