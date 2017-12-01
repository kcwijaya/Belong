import React, { Component } from 'react';
import MapView from 'react-native-maps';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import Icon from 'react-native-vector-icons/FontAwesome'
import {Dimensions} from 'react-native'
import Legend from '../../components/Legend.js'
import { Colors } from '../../constants/Colors.js' 

const deviceW = Dimensions.get('window').width
const deviceH = Dimensions.get('window').height

const basePx = 375

function px2dp(px) {
  return px *  deviceW / basePx
}

export default class Map extends Component {
  constructor() {
    super();
    this.state = {
      location: false
    };
    this.toggleLocation = this.toggleLocation.bind(this);
  }

  render() {
    return (
      <ScrollView
          style={styles.container}>
          <Legend />
          <TouchableOpacity style={styles.ghost} onPress={() => this.toggleLocation()}> 
            <Icon size={20} style={styles.eye} name={this.state.location ? "eye" : "eye-slash"} color='white'/>
          </TouchableOpacity>
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

  toggleLocation = () => {
    this.setState({location: !this.state.location});
    this.forceUpdate();
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  ghost: {
    borderWidth:1,
   borderColor:'white',
   alignItems:'center',
   justifyContent:'center',
   width:40,
   height:40,
   backgroundColor: Colors.accent,
   borderRadius:20,
   padding: 3,
   overflow: 'hidden',
   position: 'absolute', 
   right: 20, 
   top: 20
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