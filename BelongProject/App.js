/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import QA from './screens/QA/QAHome.js'
import Resources from './screens/Resources/ResourcesHome.js'
import Map from './screens/Map/MapHome.js'
import People from './screens/People/PeopleHome.js'
import Settings from './screens/Settings/SettingsHome.js'

import TabNavigator from 'react-native-tab-navigator';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Dimensions} from 'react-native';
import { Colors } from './constants/Colors.js';

const deviceW = Dimensions.get('window').width

const basePx = 375

function px2dp(px) {
  return px *  deviceW / basePx
}

export default class NavigationBar extends Component {
  state= {
    selectedTab: 'map'
  };

  render() {
    return (
      <TabNavigator style={styles.container}>
        <TabNavigator.Item
          selected={this.state.selectedTab === 'QA'}
          title="Q & A"
          selectedTitleStyle={{color: Colors.accent}}
          renderIcon={() => <Icon name="question-circle-o" size={px2dp(22)} color={Colors.unselectedTab}/>}
          renderSelectedIcon={() => <Icon name="question-circle-o" size={px2dp(22)} color={Colors.accent}/>}
          onPress={() => this.setState({selectedTab: 'QA'})}>
          <QA/>
        </TabNavigator.Item>
        <TabNavigator.Item
          selected={this.state.selectedTab === 'resources'}
          title="Resources"
          selectedTitleStyle={{color: Colors.accent}}
          renderIcon={() => <Icon name="cutlery" size={px2dp(22)} color={Colors.unselectedTab}/>}
          renderSelectedIcon={() => <Icon name="cutlery" size={px2dp(22)} color={Colors.accent}/>}
          onPress={() => this.setState({selectedTab: 'resources'})}>
          <Resources/>
        </TabNavigator.Item>
         <TabNavigator.Item
          selected={this.state.selectedTab === 'map'}
          title="Map"
          selectedTitleStyle={{color: Colors.accent}}
          renderIcon={() => <Icon name="map-marker" size={px2dp(22)} color={Colors.unselectedTab}/>}
          renderSelectedIcon={() => <Icon name="map-marker" size={px2dp(22)} color={Colors.accent}/>}
          onPress={() => this.setState({selectedTab: 'map'})}>
          <Map/>
        </TabNavigator.Item>
         <TabNavigator.Item
          selected={this.state.selectedTab === 'people'}
          title="People"
          selectedTitleStyle={{color: Colors.accent}}
          renderIcon={() => <Icon name="users" size={px2dp(22)} color={Colors.unselectedTab}/>}
          renderSelectedIcon={() => <Icon name="users" size={px2dp(22)} color={Colors.accent}/>}
          onPress={() => this.setState({selectedTab: 'people'})}>
          <People/>
        </TabNavigator.Item>
        <TabNavigator.Item
          selected={this.state.selectedTab === 'settings'}
          title="Settings"
          selectedTitleStyle={{color: Colors.accent}}
          renderIcon={() => <Icon name="cog" size={px2dp(22)} color={Colors.unselectedTab}/>}
          renderSelectedIcon={() => <Icon name="cog" size={px2dp(22)} color={Colors.accent}/>}
          onPress={() => this.setState({selectedTab: 'settings'})}>
          <Settings/>
        </TabNavigator.Item>
      </TabNavigator>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});