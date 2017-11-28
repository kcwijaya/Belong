import React, { Component } from 'react';
import MapView from 'react-native-maps';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView
} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import Icon from 'react-native-vector-icons/FontAwesome'
import {Dimensions} from 'react-native'
import Legend from '../../components/Legend.js'
const deviceW = Dimensions.get('window').width
const deviceH = Dimensions.get('window').height

const basePx = 375

function px2dp(px) {
  return px *  deviceW / basePx
}

export default class Map extends Component {
  render() {
    return (
      <ScrollView
          style={styles.container}>
          <Legend />
           <MapView
              style={styles.map}
              region={{ latitude: 37.2969326, 
              longitude: -121.9578387,
              latitudeDelta: 0.1,
              longitudeDelta: 0.1}}
            >
            </MapView>
        </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  map: {
    width: deviceW, 
    height: deviceH,
    zIndex: -10
  },
});