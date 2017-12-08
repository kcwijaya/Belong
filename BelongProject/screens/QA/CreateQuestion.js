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

import MultipleSelect from 'react-native-multiple-select'
import {FormLabel, FormInput, FormValidationMessage} from 'react-native-elements'
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete'
import DateTimePicker from 'react-native-modal-datetime-picker'
import ModalDropdown from 'react-native-modal-dropdown'

const deviceW = Dimensions.get('window').width
const basePx = 375

function px2dp(px) {
  return px *  deviceW / basePx
}

export default class ResourceCreate extends Component {
  constructor(){
    super()
    this.state = {
      detailsHeight: 0,
      questionHeight: 0,
      category: '', 
      question: '',
      details: '',
      visibility: -1, 
      vDropColor: '#9e9e9e',
      cDropColor: '#9e9e9e',     
      categoryColor: '#9e9e9e',
      visibilityColor: '#9e9e9e',
      detailsColor: '#9e9e9e',
      questionColor:  '#9e9e9e'
    };
  }

  checkSubmit = () => {
    canSubmit = true
    if (this.state.category == '') {
      this.state.categoryColor = Colors.accent
      canSubmit = false
    } else {
      this.state.categoryColor = '#9e9e9e'
    }

    if (this.state.question == '') {
      this.state.questionColor = Colors.accent
      canSubmit = false
    } else {
      this.state.questionColor = '#9e9e9e'
    }

    if (this.state.details == '') {
      this.state.detailsColor = Colors.accent
      canSubmit = false
    } else {
      this.state.detailsColor = '#9e9e9e'
    }

    //console.log(this.state.visibility)
    //console.log(this.state.visibility == -1)
    if (this.state.visibility == -1) {
      this.state.visibilityColor = Colors.accent
      canSubmit = false
    } else {
      this.state.visibilityColor = '#9e9e9e'
    }

    this.forceUpdate()
    if (canSubmit) {
      this.submitForm()
    }

  }

  submitForm = () => {
    resource = {
      category: this.state.category,
      question: this.state.question,
      details: this.state.details, 
      visibility: this.state.visibility
    }

    global.functions.addQuestion(resource)
    this.forceUpdate()
    //console.log(resource)
    this.props.navigation.navigate("QAHome");
  }

  static navigationOptions = ({ navigation }) => ({
    header: null
  });

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
          <Title color={Colors.accent} style={{fontWeight: '300'}}>Ask</Title>
        </Body>
        <Right>
         <Button transparent onPress={() => {this.checkSubmit()}}>
            <Icon size={20} name="check" color={Colors.accent}/>
          </Button>
        </Right>
      </Header>
      <ScrollView style={styles.container}>
        <View style={styles.formContainer}>

        <FormLabel
          labelStyle={[styles.name,{color: this.state.categoryColor}]}> category </FormLabel>
          <ModalDropdown 
            animated={false}
            defaultValue='Select category'
            style={styles.button}
            textStyle={[styles.dropdownButtonStyle, {color: this.state.dropdownColor}]}
            dropdownStyle={styles.dropdownStyle}
            options={['Counseling', 'Food', 'Shelter', 'Hacks', 'Schoolwork', 'Social', 'Miscellaneous']}
            onSelect={(index, value) => {this.state.category = value; this.state.cDropColor = 'black'; this.forceUpdate() }}
            dropdownTextStyle={styles.dropdownTextStyle}
          />

        <FormLabel
          labelStyle={[styles.name,{color: this.state.questionColor}]}> question </FormLabel>
       
         <FormInput 
          placeholder="ask a question"
          inputStyle={styles.text}
          containerStyle={[styles.inputStyle, {height: Math.max(50, this.state.detailsHeight)}]}
          numberOfLines={40}
          multiline={true}
          onChangeText={(text) => {this.state.question = text}}
          onContentSizeChange={(event) => {this.state.questionHeight = event.nativeEvent.contentSize.height}}
        />
        <FormLabel
          labelStyle={[styles.name,{color: this.state.visibilityColor}]}> visibility </FormLabel>
         <ModalDropdown 
            animated={false}
            defaultValue='Select visibility'
            style={styles.button}
            textStyle={[styles.dropdownButtonStyle, {color: this.state.dropdownColor}]}
            dropdownStyle={styles.dropdownStyle}
            options={['show my name', 'be anonymous']}
            onSelect={(index, value) => {this.state.visibility = index; this.state.vDropColor = 'black'; this.forceUpdate() }}
            dropdownTextStyle={styles.dropdownTextStyle}
          />

        <FormLabel
          labelStyle={[styles.name,{color: this.state.detailsColor}]}> description </FormLabel>

        <FormInput 
          placeholder="tell us more"
          inputStyle={styles.text}
          containerStyle={[styles.inputStyle, {height: Math.max(50, this.state.detailsHeight)}]}
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