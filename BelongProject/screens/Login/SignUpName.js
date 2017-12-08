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

export default class SignUpName extends Component {
  constructor(){
    super();
    this.state = {
      first_name: '',
      last_name: '',
      age: ''
    }
    this.checkSubmit = this.checkSubmit.bind(this)
  }

  static navigationOptions = ({ navigation }) => ({
    header: null
  });

  checkSubmit = () => {
    if (this.state.first_name != '' && this.state.last_name != '' && this.state.age != '') {
      this.props.navigation.navigate("SignUpContact", {first_name: this.state.first_name, last_name: this.state.last_name, age: this.state.age})
    } else {
      if (this.state.first_name == '') {
        this.first_name.shake()
      } 
      if (this.state.last_name == '') {
        this.last_name.shake()
      }
      if (this.state.age == '') {
        this.age.shake()
      }
    }
  }

  render() {
    return (
      <View style={styles.container}>
     
        <LinearGradient 
          start= {{x: 0, y: 1}}
          end={{x: 0.2, y:0.8}}
          colors={[Colors.accent, Colors.lightGradient,]} 
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
          <Button transparent onPress={() => this.checkSubmit()}>
            <Icon size={20} name="chevron-right" color={Colors.accent}/>
          </Button>
        </Right>
       </Header>


        <View style={styles.questionContainer} >
           <View style={styles.backgroundOverlay} / >
          <Text style={styles.question}> 
                   what's your name? 
          </Text> 
        </View> 

         <View style={styles.loginContainer} >
           <View style={styles.backgroundOverlay} / >
          <View style={styles.formContainer}>
            <Text style={styles.loginText}> first name </Text>
            <FormInput 
              containerStyle={styles.forminput}
              inputStyle={{color:Colors.accent}}
              ref={input => this.first_name = input}
              onChangeText={(text) => this.setState({first_name: text, last_name: this.state.last_name, age: this.state.age})}

            />

            <Text style={styles.loginText}> last name </Text>
            <FormInput 
              containerStyle={styles.forminput}
              inputStyle={{color:Colors.accent}}
              ref={input => this.last_name = input}
              onChangeText={(text) => this.setState({first_name: this.state.first_name, last_name: text, age: this.state.age})}
            />

            <Text style={styles.loginText}> age </Text>
            <FormInput 
              containerStyle={styles.forminput}
              inputStyle={{color:Colors.accent}}
              ref={input => this.age = input}
              onChangeText={(text) => this.setState({first_name: this.state.first_name, last_name: this.state.last_name, age: text})}
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