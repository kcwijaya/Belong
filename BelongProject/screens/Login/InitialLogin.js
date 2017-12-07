import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
} from 'react-native'

import { FormLabel, FormInput } from 'react-native-elements'
import Video from 'react-native-video'
import Modal from 'react-native-modal';
import LinearGradient from 'react-native-linear-gradient';
import {Dimensions} from 'react-native';
import {Colors} from '../../constants/Colors.js'

const deviceW = Dimensions.get('window').width


export default class InitialLogin extends Component {
  constructor(){
    super();
    this.state = {
      email: '', 
      password: ''
    }
  }

  static navigationOptions = ({ navigation }) => ({
    header: null
  });

  checkState = () => {
    if (this.state.email != '' && this.state.password != '') {
      this.props.navigation.navigate("TabNavigation", this.state)
    } else {
      if (this.state.email == '') {
        this.email.shake()
      } 
      if (this.state.password == '') {
        this.password.shake()
      }
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Video source={require("../../videos/login.mp4")}
               style={styles.backgroundVideo}
               rate={1} volume={1} muted={true}
               resizeMode="cover" repeat={true} key="video1"
               repeat={true}              

           />

        <View style={styles.logoContainer}>
        <View style={styles.logoOverlay} / >
        <Image source={require('../../imgs/logo/big_logo.png')} style={styles.logo} />
        
        </View> 

        <View style={styles.loginContainer} >
           <View style={styles.backgroundOverlay} / >

          <View style={styles.formContainer}>

            <Text style={styles.loginText}> email </Text>
            <FormInput 
              containerStyle={styles.forminput}
              inputStyle={{color:'white'}}
              keyboardType='email-address'
              ref={input => this.email = input}
              onChangeText={(text) => this.setState({email: this.state.email, password: text})}
            />

            <Text style={styles.loginText}> password </Text>
            <FormInput 
              containerStyle={styles.forminput}
              inputStyle={{color:'white'}}
              ref={input => this.password = input}
              secureTextEntry={true}
              onChangeText={(text) => this.setState({email: this.state.first_name, password: text})}
            />

            <TouchableOpacity onPress={() => this.checkState()} style={styles.submitContainer}> 
              <View style={styles.submitOverlay} />
              <Text style={styles.submit}> login </Text>
            </TouchableOpacity> 

          </View>
        </View>

        <TouchableOpacity onPress={() => this.props.navigation.navigate("SignUpName")} style={styles.footerContainer}> 
          <Text style={styles.signup}> want to belong? sign up. </Text>
        </TouchableOpacity> 
      </View>
    );
  }
}

const styles = StyleSheet.create({
  logoContainer: {
    position: 'absolute', 
    top: 40,
    width: 250, 
    height: 250, 
    borderRadius: 125
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
    marginLeft: 70,
    marginTop: 10,
    height: 35
  },
  submitContainer: {
    backgroundColor: 'transparent', 
    marginTop: 10
  },
  submit: {
    fontSize: 20, 
    textAlign: 'center',
    marginTop: 15,
    color: 'white',
    fontWeight: '300'
  },
  signup: {
    fontWeight: '300', 
    fontSize: 20,
    color: 'white',
  },
  footerContainer: {
    backgroundColor: 'transparent',
    position: 'absolute', 
    bottom: 80
  },
  logoOverlay: {
    opacity: 0.85,
    backgroundColor: 'white',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: 250, 
    height: 250, 
    borderRadius: 125
  },
  logo: {
    width: 215, 
    height: 215, 
    marginTop: 15,
    marginLeft: 20
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  formContainer: {
    marginTop: 30
  },
  loginText: {
    color: 'white', 
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
    borderBottomColor: 'white'
  },
  background: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  linearGradient: {
    paddingLeft: 15,
    paddingRight: 15,
  },
  backgroundOverlay: {
    opacity: 0.4,
    backgroundColor: 'black',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  loginContainer: {
    backgroundColor: 'transparent',
    marginTop: 200,
    height:240
  },
  contentContainer: {
    position: 'absolute',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    backgroundColor: 'transparent',
  },
});