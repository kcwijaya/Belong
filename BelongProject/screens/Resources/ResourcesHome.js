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
     tabBarIcon: ({ tintColor}) => (
        <Icon name='list' color={tintColor} style={{marginTop: 2}} size={20} />
        ),
      tabBarLabel: 'All',
    },
  },
  Bookmarks: {
    screen: ResourcesBookmarks,
     navigationOptions: {
       tabBarIcon: ({ tintColor}) => (
          <Icon name='bookmark' color={tintColor} size={22} />
          ),
        tabBarLabel: 'Bookmarks',
    },
  },
},
{
  tabBarPosition: 'top',
  animationEnabled: false,
  //screenProps: false,
  tabBarOptions: {
    activeTintColor: Colors.accent,
    activeBackgroundColor: Colors.white, 
    inactiveBackgroundColor: Colors.unselectedTop, 
    inactiveTintColor: Colors.unselectedTab, 
    activeTintColor: Colors.accent,
    labelStyle: {
      fontSize: 14,
      marginTop: 7,
      fontWeight: '300'

    },
    tabStyle: {
      padding: 5    
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
