import React from 'react';
import { StyleSheet, View } from 'react-native';
import Router from './Router';
import Icon from 'react-native-vector-icons/FontAwesome';
import { TabNavigator, StackNavigator } from "react-navigation";
import Colors from './constants/Colors';

import QA from './screens/QA/QAHome.js'
import Resources from './screens/Resources/ResourcesHome.js'
import Map from './screens/Map/MapHome.js'
import People from './screens/People/PeopleHome.js'
import Settings from './screens/Settings/SettingsHome.js'
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
        <Icon name="question-circle-o" size={px2dp(22)} color={Colors.unselectedTab}/>
      ),
    },
  },
  Resources: {
    screen: Resources,
     navigationOptions: {
      tabBarLabel: 'Resources',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="cutlery" size={px2dp(22)} color={Colors.unselectedTab}/>
      ),
    },
  },
  Map: {
    screen: Map,
     navigationOptions: {
      tabBarLabel: 'Map',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="map-marker" size={px2dp(22)} color={Colors.unselectedTab}/>
      ),
    },
  },
  People: {
    screen: People,
     navigationOptions: {
      tabBarLabel: 'People',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="users" size={px2dp(22)} color={Colors.unselectedTab}/>
      ),
    },
  },
  Settings: {
    screen: Settings,
     navigationOptions: {
      tabBarLabel: 'Settings',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="cog" size={px2dp(22)} color={Colors.unselectedTab}/>
      ),
    },
  }
},
{
  tabBarPosition: 'bottom',
  animationEnabled: true,
  tabBarOptions: {
    activeTintColor: Colors.accent,
  },
  initialRouteName: 'Map'
});

export default RootNavigator;

const styles = StyleSheet.create({
  icon: {
    width: 26,
    height: 26,
  },
});
