import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  TouchableHighlight,
  Text,
  View
} from 'react-native';
import TabNavigator from 'react-native-tab-navigator'
import Icon from 'react-native-vector-icons/FontAwesome'
import {Dimensions} from 'react-native'
import { Colors } from '../../constants/Colors.js'
import ProfilePicture from '../../components/people/ProfilePicture.js'
import PeerSummary from '../../components/people/PeerSummary.js'
import {Header, Body, Left, Right, Title, Button} from "native-base"
import { Switch } from 'react-native-switch'
import LargeButton from '../../components/buttons/LargeButton.js'

const deviceW = Dimensions.get('window').width

const basePx = 375

function px2dp(px) {
  return px *  deviceW / basePx
}

export default class Settings extends Component {

  static navigationOptions = ({ navigation }) => ({
    header: null
  });

  render() {
    return (

      <View style={styles.container}>
        <Header>
          <Title style={{fontWeight: '300'}} color={Colors.accent}>Settings</Title>
        </Header>

        <Header>
          <Left>
            <Text color={Colors.accent}>Info</Text>
          </Left>
          <Right>
            <Text color={Colors.accent}>Public?</Text>
          </Right>
        </Header>

        <View style={styles.info}>
          <Left>
            <Text>Name: Tristan Vanech</Text>
          </Left>
          <Right>
            <Switch 
              value={false}
              onValueChange={(val) => console.log(val)}
              backgroundActive={Colors.accent}/>
          </Right>
        </View>

        <View style={styles.info}>
          <Left>
            <Text>School: Palo Alto High School</Text>
          </Left>
          <Right>
            <Switch 
              value={false}
              onValueChange={(val) => console.log(val)}
              backgroundActive={Colors.accent}/>
          </Right>
        </View>

        <View style={styles.info}>
          <Left>
            <Text>Year: Junior</Text>
          </Left>
          <Right>
            <Switch 
              value={false}
              onValueChange={(val) => console.log(val)}
              backgroundActive={Colors.accent}/>
          </Right>
        </View>

        <View style={styles.info}>
          <Left>
            <Text>Gender: Male</Text>
          </Left>
          <Right>
            <Switch 
              value={false}
              onValueChange={(val) => console.log(val)}
              backgroundActive={Colors.accent}/>
          </Right>
        </View>

        <View style={styles.info}>
          <Left>
            <Text>Last Active: Now</Text>
          </Left>
          <Right>
            <Switch 
              value={false}
              onValueChange={(val) => console.log(val)}
              backgroundActive={Colors.accent}/>
          </Right>
        </View>

        <View style={styles.buttonGroup}>
          <TouchableHighlight style={styles.logout}>
              <Text style={styles.buttonText}> Logout </Text>
              </TouchableHighlight>
              <View style={{width: 10}} />
        </View>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  info: {
    flex: 1,
    flexDirection: 'row',
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
    fontWeight: '300'
  },
  logout: {
    backgroundColor: Colors.buttongen,
    borderRadius:10,
    borderWidth: 2,
    borderColor: 'transparent',
    width: 140,
    height: 40, 
    paddingBottom: 5,
    paddingTop: 6,
    overflow: 'hidden'
  },
  buttonGroup: {
    flexDirection: 'row', 
    flex: 1,
    justifyContent: 'center',
    marginTop: 20
  },
});