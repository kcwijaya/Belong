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
import TabNavigator from 'react-native-tab-navigator';
import Icon from 'react-native-vector-icons/FontAwesome'
import {Dimensions} from 'react-native'

const deviceW = Dimensions.get('window').width

const basePx = 375

function px2dp(px) {
  return px *  deviceW / basePx
}

class QA extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          QA
        </Text>
      </View>
    )
  }
}

class Resources extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Resources
        </Text>
      </View>
    )
  }
}

class Map extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Map
        </Text>
      </View>
    )
  }
}

class People extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          People
        </Text>
      </View>
    )
  }
}

class Settings extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Settings
        </Text>
      </View>
    )
  }
}



export default class TabDemo extends Component {
  state= {
    selectedTab: 'map'
  };

  render() {
    return (
      <TabNavigator style={styles.container}>
        <TabNavigator.Item
          selected={this.state.selectedTab === 'QA'}
          title="Q & A"
          selectedTitleStyle={{color: "#ee5e5e"}}
          renderIcon={() => <Icon name="question-circle-o" size={px2dp(22)} color="#666"/>}
          renderSelectedIcon={() => <Icon name="question-circle-o" size={px2dp(22)} color="#ee5e5e"/>}
          onPress={() => this.setState({selectedTab: 'QA'})}>
          <QA/>
        </TabNavigator.Item>
        <TabNavigator.Item
          selected={this.state.selectedTab === 'resources'}
          title="Resources"
          selectedTitleStyle={{color: "#ee5e5e"}}
          renderIcon={() => <Icon name="cutlery" size={px2dp(22)} color="#666"/>}
          renderSelectedIcon={() => <Icon name="cutlery" size={px2dp(22)} color="#ee5e5e"/>}
          onPress={() => this.setState({selectedTab: 'resources'})}>
          <Resources/>
        </TabNavigator.Item>
         <TabNavigator.Item
          selected={this.state.selectedTab === 'map'}
          title="Map"
          selectedTitleStyle={{color: "#ee5e5e"}}
          renderIcon={() => <Icon name="map-marker" size={px2dp(22)} color="#666"/>}
          renderSelectedIcon={() => <Icon name="map-marker" size={px2dp(22)} color="#ee5e5e"/>}
          onPress={() => this.setState({selectedTab: 'map'})}>
          <Map/>
        </TabNavigator.Item>
         <TabNavigator.Item
          selected={this.state.selectedTab === 'people'}
          title="People"
          selectedTitleStyle={{color: "#ee5e5e"}}
          renderIcon={() => <Icon name="users" size={px2dp(22)} color="#666"/>}
          renderSelectedIcon={() => <Icon name="users" size={px2dp(22)} color="#ee5e5e"/>}
          onPress={() => this.setState({selectedTab: 'people'})}>
          <People/>
        </TabNavigator.Item>
        <TabNavigator.Item
          selected={this.state.selectedTab === 'settings'}
          title="Settings"
          selectedTitleStyle={{color: "#ee5e5e"}}
          renderIcon={() => <Icon name="cog" size={px2dp(22)} color="#666"/>}
          renderSelectedIcon={() => <Icon name="cog" size={px2dp(22)} color="#ee5e5e"/>}
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