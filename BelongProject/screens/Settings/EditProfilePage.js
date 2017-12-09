import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  ScrollView,
  TextInput,
  TouchableHighlight,
  Picker,
  Alert
} from 'react-native';
import { Container, Card, CardItem, Body, Content, Header, Left, Right, Title, Button, Text } from "native-base";
import Icon from 'react-native-vector-icons/FontAwesome'
import {Dimensions} from 'react-native'
import { Col, Row, Grid } from "react-native-easy-grid";
import Search from '../../components/Search.js'
import { Colors } from '../../constants/Colors.js'
import AnswerListingView from '../../components/listings/AnswerListingView.js'
import Hr from '../../components/hr.js'
import {FormLabel, FormInput, FormValidationMessage} from 'react-native-elements'
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete'
import DateTimePicker from 'react-native-modal-datetime-picker'
import ModalDropdown from 'react-native-modal-dropdown'

const deviceW = Dimensions.get('window').width
const basePx = 375

function px2dp(px) {
  return px *  deviceW / basePx
}

export default class EditProfilePage extends Component {
  constructor(){
    super()
    this.state = {
      height: 0,
      detailsHeight: 0,
      phone: '',
      details: '',
      specialties: '',
      school: '', 
      openColor: '#9e9e9e',
      closeColor: '#9e9e9e',
      categoryColor: '#9e9e9e',
      locationColor: '#9e9e9e',
      phoneColor: '#9e9e9e',
      detailsColor: '#9e9e9e',

      first_name: '',
      last_name: '',
      nameColor: '#9e9e9e'
    };
  }

  submitForm = () => {
    userInfo = global.userInfo
    console.log(this.state)
    if (this.state.first_name != '') {
      userInfo.firstName = this.state.first_name
    }

    if (this.state.last_name != '') {
      userInfo.lastName = this.state.last_name
    }

    if (this.state.email !='') {
      userInfo.email = this.state.email
    }

    if (this.state.specialties !='') {
      userInfo.specialties = this.state.specialties
    }

    if (this.state.school != '') {
      userInfo.school = this.state.school
    }

    if (this.state.phone !='') {
      userInfo.phone = this.state.phone
    }

    if (this.state.details !='') {
      userInfo.about = this.state.details
    }

    console.log(userInfo)

    global.functions.updateUserInfo(userInfo)
    this.props.navigation.navigate("EditableProfilePage", userInfo);
  }

  static navigationOptions = ({ navigation }) => ({
    header: null
  });

  _showOpenDatePicked = () => {
    this.state.openHoursVisible = true
    this.forceUpdate()
  }
  _handleOpenDatePicked = (date) => {
    var hour = date.getHours()
    if (hour < 12) {
      if (hour == 0) {
        hour = 12
      }
      this.state.openHours = hour + ' AM';
    } else {
      if (hour == 12) {
        this.state.openHours = '12PM'
      } else {
       this.state.openHours = hour-12 + ' PM';       
      }
    }
    this._hideOpenDatePicker()
  }

  _hideOpenDatePicker = () => {
    this.state.openHoursVisible = false
    this.forceUpdate()
  }

  _showCloseDatePicked = () => {
    this.state.closeHoursVisible = true
    this.forceUpdate()
  }
  _handleCloseDatePicked = (date) => {
    var hour = date.getHours()
    if (hour < 12) {
      if (hour == 0) {
        hour = 12
      }
      this.state.closedHours = hour + ' AM';
    } else {
      if (hour == 12) {
        this.state.closedHours = '12PM'
      } else {
       this.state.closedHours = hour-12 + ' PM';       
      }
    }
    this._hideCloseDatePicker()
  }

  _hideCloseDatePicker = () => {
    this.state.closeHoursVisible = false
    this.forceUpdate()
  }


  render() {
    return (
      <View style={styles.container}>

        <Header>
        <Left>
          <Button transparent onPress={() => this.props.navigation.goBack()}>
            <Icon size={20} name="chevron-left" color={Colors.accent}/>
          </Button>
        </Left>
        <Body>
          <Title color={Colors.accent} style={{fontWeight: '300'}}>Edit</Title>
        </Body>
        <Right>
         <Button transparent onPress={() => {this.submitForm()}}>
            <Icon size={20} name="check" color={Colors.accent}/>
          </Button>
        </Right>
      </Header>
      <ScrollView style={styles.container}>

       <View>
            <FormLabel
              labelStyle={[styles.name,{color: this.state.nameColor}]}
              > first name </FormLabel>
            <FormInput 
              placeholder= 'Enter first name'
              containerStyle={styles.inputStyle}
              multiline={true}
              inputStyle={styles.text}
              onChangeText={(text) => {this.state.first_name = text}}
              />

                <FormLabel
              labelStyle={[styles.name,{color: this.state.nameColor}]}
              > last name </FormLabel>
            <FormInput 
              placeholder= 'Enter last name'
              containerStyle={styles.inputStyle}
              multiline={true}
              inputStyle={styles.text}
              onChangeText={(text) => {this.state.last_name = text}}
              />
          </View> 

        <View style={styles.formContainer}>
        <FormLabel
              labelStyle={[styles.name,{color: this.state.nameColor}]}
              > email </FormLabel>
            <FormInput 
              placeholder= 'Enter email'
              containerStyle={styles.inputStyle}
              multiline={true}
              inputStyle={styles.text}
              onChangeText={(text) => {this.state.email = text}}
              />

          <FormLabel
              labelStyle={[styles.name,{color: this.state.nameColor}]}
              > password </FormLabel>
            <FormInput 
              placeholder= 'Enter password'
              containerStyle={styles.inputStyle}
              multiline={true}
              secureTextEntry={true}
              inputStyle={styles.text}
              onChangeText={(text) => {this.state.school = text}}
              />

                          <FormLabel
              labelStyle={[styles.name,{color: this.state.phoneColor}]}
              keyboardType='phone-pad'> phone </FormLabel>
            <FormInput 
              placeholder= 'Enter phone number'
              containerStyle={styles.inputStyle}
              multiline={true}
              inputStyle={styles.text}
              onChangeText={(text) => {this.state.phone = text}}
              />

          <FormLabel
              labelStyle={[styles.name,{color: this.state.nameColor}]}
              > specialties </FormLabel>
            <FormInput 
              placeholder= 'Enter specialties'
              containerStyle={styles.inputStyle}
              multiline={true}
              inputStyle={styles.text}
              onChangeText={(text) => {this.state.specialties = text}}
              />

               <FormLabel
              labelStyle={[styles.name,{color: this.state.nameColor}]}
              > school </FormLabel>
            <FormInput 
              placeholder= 'Enter school'
              containerStyle={styles.inputStyle}
              multiline={true}
              inputStyle={styles.text}
              onChangeText={(text) => {this.state.school = text}}
              />



        <FormLabel
          labelStyle={[styles.name,{color: this.state.detailsColor}]}> about you </FormLabel>
        <FormInput 
          placeholder="Describe as much as you can"
          inputStyle={styles.text}
          containerStyle={[styles.inputStyle, {paddingRight: 20, height: Math.max(50, this.state.detailsHeight)}]}
          numberOfLines={40}
          multiline={true}
          onChangeText={(text) => {this.state.details = text}}
          onContentSizeChange={(event) => {this.state.detailsHeight = event.nativeEvent.contentSize.height}}
        />
        </View>
      </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.formbg,
    flex:1,
  },
  map: {
    backgroundColor: 'red'
  },
  nameRight: {
    letterSpacing: 3,
    fontWeight: '400',
    marginLeft: 5,
    color: Colors.unselectedTab,
  },
  placeholder: {
    fontFamily: 'System', 
    fontWeight: '300',
    color: '#9e9e9e',
    marginLeft: 5,
    fontSize: 16,
    marginBottom: 5
  },
  name: {
    letterSpacing: 3,
    fontWeight: '400',
    color: Colors.unselectedTab
  },
  inputStyle: {
    width: 320, 
    marginLeft: 25,
    marginRight: 25,
    backgroundColor: 'white',
    borderRadius: 5,
    borderBottomWidth: 0,
    marginTop: 10,
    padding: 10
  },
  dropdownButtonStyle: {
    marginTop: 5,
    fontFamily: 'System', 
    fontWeight: '300',
    marginLeft: 10,
    fontSize: 18
  },
  button: {
    width: 320, 
    borderRadius: 5,
    backgroundColor: 'white',
    marginTop: 10,
    height: 35,
    marginLeft: 25,
    marginRight: 25,
  },
  dropdownStyle: {
    marginTop: 10,
    width: 320,
    borderRadius: 5
  },
  dropdownTextStyle: {
    fontFamily: 'System',
    fontSize: 15, 
    fontWeight: '300',
  },
  twoInputStyle: {
    width: 145, 
    marginLeft: 25,
    marginRight: 25,
    backgroundColor: 'white',
    borderRadius: 5,
    borderBottomWidth: 0,
    marginTop: 10,
    height: 35,
    padding: 10
  },
  text: {
    fontWeight: '300',
    color: 'black'
  },
  twoInputStyleRight: {
    height: 35,
    width: 145, 
    marginLeft: 5,
    marginRight: 25,
    backgroundColor: 'white',
    borderRadius: 5,
    borderBottomWidth: 0,
    marginTop: 10,
    padding: 9
  } ,   
  two: {
    flexDirection: 'row'
  }
});