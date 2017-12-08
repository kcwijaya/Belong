import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  Alert,
  TouchableHighlight
} from 'react-native'

import {Header, Body, Left, Right, Title, Button, Text} from "native-base";
import { FormLabel, FormInput } from 'react-native-elements'
import Video from 'react-native-video'
import Modal from 'react-native-modal';
import LinearGradient from 'react-native-linear-gradient';
import {Dimensions} from 'react-native';
import {Colors} from '../../constants/Colors.js'
import Icon from 'react-native-vector-icons/FontAwesome'

const deviceW = Dimensions.get('window').width
const deviceH = Dimensions.get('window').height

export default class SignUpPermissions extends Component {
  constructor(){
    super();
    this.state = {
      location: false, 
      noti: false
    }
    this.addToState = this.addToState.bind(this)
    this.triggerBell = this.triggerBell.bind(this)
    this.triggerMap = this.triggerMap.bind(this)
  }

  addToState = () => {
      this.state.first_name = this.props.navigation.state.params.first_name 
      this.state.last_name = this.props.navigation.state.params.last_name 
      this.state.email = this.props.navigation.state.params.email
      this.state.phone = this.props.navigation.state.params.phone
      this.state.specialties = this.props.navigation.state.params.specialties
      this.state.about_me = this.props.navigation.state.params.about_me
      this.state.school = this.props.navigation.state.params.school
      this.props.navigation.navigate("TabNavigation", this.state)
  }

  static navigationOptions = ({ navigation }) => ({
    header: null
  });

  triggerMap = () => {
    Alert.alert(
      "'Belong' would like to use your current location.",
      '',
      [
        {text: "Don't Allow", onPress: () => this.setState({location: false, noti: this.state.noti})},
        {text: 'Ok', onPress:  () => this.setState({location: true, noti: this.state.noti})},
      ]
    )
    this.forceUpdate()
  }

  triggerBell = () => {
    Alert.alert(
      "'Belong' would like to send you notifications",
      '',
      [
        {text: "Don't Allow", onPress: () => this.setState({location: this.state.location, noti: false})},
        {text: 'Ok', onPress: () => this.setState({location: this.state.location, noti: true})},
      ]
    )
    this.forceUpdate()
  }

  render() {
    return (
      <View style={styles.container}>
     
         <View style={styles.linearGradient} />


      <Header stye={styles.header}>
        <Left>
          <Button transparent onPress={() => this.props.navigation.goBack()}>
            <Icon size={20} name="chevron-left" color={Colors.accent}/>
          </Button>
        </Left>
        <Body>
          <Title style={styles.title}>Sign Up</Title>
        </Body>
        <Right>
          <Button transparent onPress={() => {this.addToState(); global.functions.signUp(this.state)}}>
            <Icon size={20} name="check" color={Colors.accent}/>
          </Button>
        </Right>
       </Header>


        <View style={styles.questionContainer} >
           <View style={styles.backgroundOverlay} / >
          <Text style={styles.question}> 
            adjust some settings. 
          </Text> 
        </View> 

         <View style={styles.loginContainer} >
           <View style={styles.backgroundOverlay} / >
              <View style={styles.formContainer}>
                 <TouchableHighlight style={styles.buttonContainer} onPress={() => {this.triggerBell()}}>
                    <View style={styles.button}>
                    {!this.state.noti && <View style={[styles.buttonOverlay, {opacity: 0.4}]} />}
                    {this.state.noti && <View style={[styles.buttonOverlay, {opacity: 0.9}]} />}

                    <Icon name='bell' color={Colors.accent} size={25} />
                    {!this.state.noti && <Text style={styles.buttonText}> turn on notifications </Text>}
                    {this.state.noti && <Text style={styles.buttonText}> turned on notifications </Text>}
                    
                    </View>
                 </TouchableHighlight> 
                  <TouchableHighlight style={styles.buttonContainer} onPress={() => {this.triggerMap()}}>
                    <View style={styles.button}>
                      {!this.state.location && <View style={[styles.buttonOverlay, {opacity: 0.4}]} />}
                      {this.state.location && <View style={[styles.buttonOverlay, {opacity: 0.9}]} />}
                      
                      <Icon name='location-arrow'  color={Colors.accent} size={25} />
                       {!this.state.noti && <Text style={styles.buttonText}> turn on location services </Text>}
                    {this.state.noti && <Text style={styles.buttonText}> turned on location services </Text>}
                    
                    </View>
                 </TouchableHighlight> 
            </View>
          </View>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  title: {
    fontWeight: '300'
  },
  button: {
    flexDirection: 'row',
    backgroundColor: 'transparent',
    width: 300,
    justifyContent: 'center',
    padding: 5
  },
   buttonOverlay: {
    backgroundColor: 'white',
    position: 'absolute',
    width: 300,
    borderRadius: 100,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    height: 35
  },
  buttonContainer: {
    backgroundColor: 'transparent', 
    marginTop: 10,
    flexDirection: 'row'
  },
  buttonGroup: {
  },
  buttonText: {
    fontSize: 20, 
    textAlign: 'center',
    color: 'black',
    fontWeight: '300',
    marginBottom: 3,
    marginLeft: 10
  },
  questionContainer: {
    backgroundColor: 'transparent',
    marginTop: 100,
    height:100,
    padding: 30,
    flexDirection: 'row', 
    justifyContent: 'center'
  },
  question: {
    fontSize: 30, 
    color: 'black', 
    fontWeight: '300',
  },
  header: {
    backgroundColor: 'white', 
    opacity: 0.8
  },
  linearGradient: {
    top: 0, 
    bottom: 0, 
    right: 0, 
    left: 0,
    position: 'absolute',
    backgroundColor: Colors.accent
  },
  container: {
    flex: 1,
  },
  formContainer: {
    marginTop: 60
  },
  loginText: {
    color: 'black', 
    fontSize: 20,
    fontFamily: 'System',
    fontWeight: '300', 
    marginLeft: 40,
    marginTop: 10
  },
  fontContainer: {
    marginLeft: 40
  },
  forminput: {
    width: 270,
    marginLeft: 45,
    borderBottomWidth: 1,
    borderBottomColor: 'black'
  },
  background: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
   backgroundOverlay: {
    opacity: 0.4,
    backgroundColor: 'white',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  loginContainer: {
    backgroundColor: 'transparent',
    height:240,
    marginTop: 50,
    flexDirection: 'row', 
    justifyContent: 'center'
  },
});