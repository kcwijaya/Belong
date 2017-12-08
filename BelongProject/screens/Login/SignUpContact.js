import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
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

export default class SignUpContact extends Component {
  constructor(){
    super();
    this.state = {
      email: '', 
      password: '',
    }
    this.addToState = this.addToState.bind(this)
  }

  addToState = () => {
      this.state.first_name = this.props.navigation.state.params.first_name 
      this.state.last_name = this.props.navigation.state.params.last_name 
      this.state.age = this.props.navigation.state.params.age
  }

  static navigationOptions = ({ navigation }) => ({
    header: null
  });

  checkState = () => {
    if (this.state.email != '' && this.state.phone != '') {
      this.addToState()
      this.props.navigation.navigate("SignUpSecurity", this.state)
    } else {
      if (this.state.email == '') {
        this.email.shake()
      } 
      if (this.state.phone == '') {
        this.phone.shake()
      }
    }
  }

  render() {
    return (
      <View style={styles.container}>
     
        <LinearGradient 
          start= {{x: 0, y: 1}}
          end={{x: 0.4, y:0.6}}
          colors={[Colors.accent,Colors.lightGradient,]} 
          style={styles.linearGradient}>
        </LinearGradient>

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
          <Button transparent onPress={() => this.checkState()}>
            <Icon size={20} name="chevron-right" color={Colors.accent}/>
          </Button>
        </Right>
       </Header>


        <View style={styles.questionContainer} >
           <View style={styles.backgroundOverlay} / >
          <Text style={styles.question}> 
            how can we reach you?
          </Text> 
        </View> 

         <View style={styles.loginContainer} >
           <View style={styles.backgroundOverlay} / >
          <View style={styles.formContainer}>
            <Text style={styles.loginText}> email address </Text>
            <FormInput 
              containerStyle={styles.forminput}
              inputStyle={{color: Colors.accent}}
              keyboardType='email-address'
              ref={input => this.email = input}
              onChangeText={(text) => this.setState({phone: this.state.phone, email: text})}

            />

            <Text style={styles.loginText}> phone number </Text>
            <FormInput 
              containerStyle={styles.forminput}
              inputStyle={{color: Colors.accent}}
              keyboardType='phone-pad'
              ref={input => this.phone = input}
              onChangeText={(text) => this.setState({phone: text, email: this.state.email})}           
            />
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
    position: 'absolute'
  },
  container: {
    flex: 1,
  },
  formContainer: {
    marginTop: 30
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