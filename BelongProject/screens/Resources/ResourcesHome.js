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
import ResourcesAll from './ResourcesAll.js'
import ResourcesBookmarks from './ResourcesBookmarks.js'

const deviceW = Dimensions.get('window').width
const deviceH = Dimensions.get('window').height;


const ResourcesTabNav = TabNavigator({
  All: {
    screen: ResourcesAll,
    navigationOptions: {
      tabBarLabel: 'All',
    },
  },
  Bookmarks: {
    screen: ResourcesBookmarks,
     navigationOptions: {
      tabBarLabel: 'Bookmarks',
    },
  },
},
{
  tabBarPosition: 'top',
  animationEnabled: true,
  tabBarOptions: {
    activeTintColor: Colors.accent,
    labelStyle: {
      fontSize: 15,
    },
    tabStyle: {
      padding: 10    
    },
  },
  initialRouteName: 'All'
});

export default ResourcesTabNav;

const styles = StyleSheet.create({
  icon: {
    width: 26,
    height: 26,
  },
});
