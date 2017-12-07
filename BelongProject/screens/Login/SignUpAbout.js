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

export default class SignUpAbout extends Component {
  constructor(){
    super();
    this.state = {
      age: '',
      specialties: '', 
      about_me: '', 
      school: ''
    }
    this.addToState = this.addToState.bind(this)
  }

  addToState = () => {
      this.state.first_name = this.props.navigation.state.params.first_name 
      this.state.last_name = this.props.navigation.state.params.last_name 
      this.state.email = this.props.navigation.state.params.email
      this.state.phone = this.props.navigation.state.params.phone
      this.state.password = this.props.navigation.state.params.password
  }

  static navigationOptions = ({ navigation }) => ({
    header: null
  });

  checkState = () => {
    this.addToState()
    this.props.navigation.navigate("SignUpPermissions", this.state)
  }

  render() {
    return (
      <View style={styles.container}>
     
        <LinearGradient 
          start= {{x: 0, y: 1}}
          end={{x: 0.8, y:0.2}}
          colors={[Colors.accent,'#FADBD8',]} 
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
            tell us more about you.
          </Text> 
        </View> 

         <View style={styles.loginContainer} >
           <View style={styles.backgroundOverlay} / >
          <View style={styles.formContainer}>
           <Text style={[styles.loginText, {marginTop: 5}]}> specialties </Text>
            <FormInput 
              containerStyle={styles.forminput}
              inputStyle={{color:Colors.accent}}
              ref={input => this.password = input}
              secureTextEntry={true}
              onChangeText={(text) => this.setState({age: this.state.age, about_me: this.state.about_me, school: this.state.school, specialties: text})}
            />

           <Text style={styles.loginText}> school </Text>
            <FormInput 
              containerStyle={styles.forminput}
              inputStyle={{color:Colors.accent}}
              ref={input => this.password = input}
              secureTextEntry={true}
              onChangeText={(text) => this.setState({age: this.state.age, about_me: this.state.about_me, school: text, specialties: this.state.specialties})}
            />

           <Text style={styles.loginText}> about you </Text>
            <FormInput 
              containerStyle={styles.forminput}
              inputStyle={{color:Colors.accent}}
              ref={input => this.password = input}
              secureTextEntry={true}
              onChangeText={(text) => this.setState({age: this.state.age, about_me: this.state.about_me, school: this.state.school, specialties: text})}
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
    height:270,
    marginTop: 50,
    flexDirection: 'row', 
    justifyContent: 'center'
  },
});