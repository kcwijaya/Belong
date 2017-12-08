import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  TouchableHighlight,
  Alert,
  Text,
  Alert,
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
  constructor(){
    super();
    this.state = {
      renderNotification: true,
    }
    this.triggerMatch = this.triggerMatch.bind(this)
  }

  triggerMatch = () => {
    Alert.alert(
      "There's another Belong member near you!",
      '',
      [
        {text: "Dismiss"},
        {text: 'See Profile', onPress:  () => {
          if (this.state.renderNotification) {
            this.state.renderNotification = false;
          }
          this.props.navigation.navigate('ProfilePage', global.users[7]);
        }},
      ]
    )
    this.forceUpdate()
  }

  static navigationOptions = ({ navigation }) => ({
    header: null
  });


signEmOut = () => {
  Alert.alert(
      "Confirm sign out",
      '',
      [
        {text: "Don't Allow"},
        {text: 'Sign out', onPress:  () => {this.props.navigation.navigate('InitialLogin')}}
      ]
    )
}



  render() {
    return (

      <View style={styles.container}>
        <Header>
          <Title color={Colors.accent}>Settings</Title>
        </Header>

        <View style={styles.info}>
          <Left>
            <Text style={styles.headerText}>Info</Text>
          </Left>
          <Right>
            <Text style={styles.headerText}>Public?</Text>
          </Right>
        </View>

        <View style={styles.info}>
          <Left>
            <Text style={styles.infoText}>Name:</Text>
          </Left>
          <Right>
            <Switch 
              value={true}
              onValueChange={(val) => global.functions.updateNameShare(val)}
              backgroundActive={Colors.accent}/>
          </Right>
        </View>

        <View style={styles.info}>
          <Left>
            <Text style={styles.infoText}>School:</Text>
          </Left>
          <Right>
            <Switch 
              value={true}
              onValueChange={(val) => global.functions.updateSchoolShare(val)}
              backgroundActive={Colors.accent}/>
          </Right>
        </View>

        <View style={styles.info}>
          <Left>
            <Text style={styles.infoText}>Age:</Text>
          </Left>
          <Right>
            <Switch 
              value={true}
              onValueChange={(val) => {
                global.functions.updateAgeShare(val);
                this.triggerMatch();
              }}
              backgroundActive={Colors.accent}/>
          </Right>
        </View>

        <View style={styles.info}>
          <Left>
            <Text style={styles.infoText}>Location:</Text>
          </Left>
          <Right>
            <Switch 
              value={global.userInfo.location}
              onValueChange={(val) => global.functions.updateLocationShare(val)}
              backgroundActive={Colors.accent}/>
          </Right>
        </View>

       

        <View style={styles.buttonGroup}>
          <TouchableHighlight style={styles.logout} onPress={() => {this.signEmOut()}}>
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
    marginLeft: 30,
    marginRight: 30,
  },
  infoText: {
    // fontWeight: 'bold',
    fontSize: 20,
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 20,
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