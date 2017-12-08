import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  TouchableHighlight,
  Alert,
  Text,
  View,
  TouchableOpacity
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
          <Title style={{fontWeight: '300', marginTop: 5}} color={Colors.accent}>Settings</Title>
        </Header>

        <View style={styles.optionContainer}> 
        <View style={styles.overlay}>
  <View style={styles.info}>
          <Left>
            <Text style={styles.headerText}>field</Text>
          </Left>
          <Right>
            <Text style={styles.headerText}>public?</Text>
          </Right>
        </View>

        <View style={styles.info}>
          <Left>
            <Text style={styles.infoText}>name</Text>
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
            <Text style={styles.infoText}>school</Text>
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
            <Text style={styles.infoText}>age</Text>
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
            <Text style={styles.infoText}>location</Text>
          </Left>
          <Right>
            <Switch 
              value={global.userInfo.location}
              onValueChange={(val) => global.functions.updateLocationShare(val)}
              backgroundActive={Colors.accent}/>
          </Right>
        </View>

       
        </View> 
      

        <View style={styles.buttonGroup}>

            <TouchableOpacity onPress={() => {this.signEmOut()}} style={styles.submitContainer}> 
              <View style={styles.submitOverlay} />
              <Text style={styles.submit}> logout </Text>
            </TouchableOpacity> 

        </View>

</View> 
      </View>
    )
  }
}

const styles = StyleSheet.create({
  overlay: {
    backgroundColor: 'white', 
    position: 'absolute', 
    top: 40, 
    left: 45, 
    width: 300, 
    height: 400,
    borderWidth: 1,
    borderRadius: 2,
    borderColor: Colors.unselectedTop,
    borderBottomWidth: 0,
    shadowColor: Colors.unselectedTab,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 1,
    elevation: 1,
  },
  optionsContainer: {

  },
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: 'white',
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
    fontWeight: '300',
    letterSpacing: 4
  },
  headerText: {
    fontSize: 20,
    fontWeight: '500',
    letterSpacing: 2
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
    marginTop: 20,
    position: 'absolute', 
    top: 445,
    left: 100
  },
  submitOverlay: {
    opacity: 0.3,
    backgroundColor: Colors.accent,
    position: 'absolute',
    width: 200,
    borderRadius: 100,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    height: 35
  },
  submitContainer: {
    backgroundColor: 'transparent', 
    marginTop: 10
  },
  submit: {
    fontSize: 20, 
    textAlign: 'center',
    marginTop: 5,
    color: 'white',
    fontWeight: '300',
    marginLeft: 60
  },
});