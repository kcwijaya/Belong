/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React from 'react';
import { StyleSheet, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { TabNavigator, StackNavigator } from "react-navigation";

import {Colors} from '../constants/Colors.js'
import QA from '../screens/QA/index.js'
import Resources from '../screens/Resources/index.js'
import Map from '../screens/Map/index.js'
import People from '../screens/People/index.js'
import Settings from '../screens/Settings/SettingsHome.js'
import {Dimensions} from 'react-native';
const deviceW = Dimensions.get('window').width
const basePx = 375

function px2dp(px) {
  return px *  deviceW / basePx
}


const RootNavigator = TabNavigator({
  QA: {
    screen: QA,
    navigationOptions: {
      tabBarLabel: 'QA',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="question-circle-o" size={px2dp(22)} color={tintColor}/>
      ),
    },
  },
  Resources: {
    screen: Resources,
     navigationOptions: {
      tabBarLabel: 'Resources',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="cutlery" size={px2dp(22)} color={tintColor}/>
      ),
    },
  },
  Map: {
    screen: Map,
     navigationOptions: {
      tabBarLabel: 'Map',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="map-marker" size={px2dp(22)} color={tintColor}/>
      ),
    },
  },
  People: {
    screen: People,
     navigationOptions: {
      tabBarLabel: 'Peers',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="users" size={px2dp(22)} color={tintColor}/>
      ),
    },
  },
  Settings: {
    screen: Settings,
     navigationOptions: {
      tabBarLabel: 'Settings',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="cog" size={px2dp(22)} color={tintColor}/>
      ),
    },
  }
},
{
  tabBarPosition: 'bottom',
  animationEnabled: false,
  tabBarOptions: {
    activeTintColor: Colors.accent,
    inactiveTintColor: Colors.unselectedTab,
  },
  initialRouteName: 'Map',

});

export default RootNavigator;

const styles = StyleSheet.create({
  icon: {
    width: 26,
    height: 26,
  },
});
