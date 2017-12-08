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
      height: 0,
      detailsHeight: 0,
      category: '', 
      locationCoords: {latitude: 0, longitude: 0}, 
      location: '', 
      phone: '',
      details: '',
      dropdownColor: '#9e9e9e',
      picked: 0,
      openHours: '', 
      closedHours: '',
      openHoursVisible: false, 
      closedHoursVisible: false,
      openColor: '#9e9e9e',
      closeColor: '#9e9e9e',
      categoryColor: '#9e9e9e',
      locationColor: '#9e9e9e',
      phoneColor: '#9e9e9e',
      detailsColor: '#9e9e9e'
    };
    this._showOpenDatePicked = this._showOpenDatePicked.bind(this);
    this._handleOpenDatePicked = this._handleOpenDatePicked.bind(this)
    this._hideOpenDatePicker = this._hideOpenDatePicker.bind(this)
  }

  checkSubmit = () => {
    canSubmit = true
    if (this.state.category == '') {
      this.state.categoryColor = Colors.accent
      canSubmit = false
    } else {
      this.state.categoryColor = '#9e9e9e'
    }

    if (this.state.location == '' && this.state.locationCoords.latitude == 0 && this.state.locationCoords.longitude == 0) {
      this.state.locationColor = Colors.accent
      canSubmit = false
    } else {
      this.state.locationColor = '#9e9e9e'
    }

    if (this.state.phone == '') {
      this.state.phoneColor = Colors.accent
      canSubmit = false
    } else {
      this.state.phoneColor = '#9e9e9e'
    }

    if (this.state.details == '') {
      this.state.detailsColor = Colors.accent
      canSubmit = false
    } else {
      this.state.detailsColor = '#9e9e9e'
    }

    if (this.state.openHours == '') {
      this.state.openColor = Colors.accent
      canSubmit = false
    } else {
      this.state.openColor = '#9e9e9e'
    }

    if (this.state.closedHours == '') {
      this.state.closeColor = Colors.accent
      canSubmit = false
    } else {
      this.state.closeColor = '#9e9e9e'
    }

    this.forceUpdate()
    if (canSubmit) {
      this.submitForm()
    }

  }

  submitForm = () => {
    resource = {
      category: this.state.category,
      locationCoords: this.state.locationCoords,
      img: require('../../imgs/placeholders/resource.jpg'),
      location: this.state.location,
      phone: this.state.phone,
      openHours: this.state.openHours, 
      closeHours: this.state.closedHours,
      about: this.state.details,
      name: ""
    }

    //console.log(resource)
    global.functions.addResource(resource)
    this.props.navigation.navigate("ResourcesHome");
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
          <Title color={Colors.accent} style={{fontWeight: '300'}}>Create</Title>
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
            options={['Education', 'Food Bank', 'Shelter', "Miscellaneous"]}
            onSelect={(index, value) => {this.state.category = value; this.state.dropdownColor = 'black'; this.forceUpdate() }}
            dropdownTextStyle={styles.dropdownTextStyle}
          />

        <FormLabel
          labelStyle={[styles.name,{color: this.state.locationColor}]}> location </FormLabel>

       <GooglePlacesAutocomplete
          placeholder='Type in Address'
          minLength={2} // minimum length of text to search
          autoFocus={false}
          listViewDisplayed='auto'    
          fetchDetails={true}
          renderDescription={(row) => row.description} // custom description render
          onPress={(data, details = null) => { 
            this.state.picked = 100;
            this.state.location = data['description'];
            this.state.locationCoords.latitude = details['geometry']['location']['lat'];
            this.state.locationCoords.longitude = details['geometry']['location']['lng'];}}
          query={{
            // available options: https://developers.google.com/places/web-service/autocomplete
            key: 'AIzaSyDZVxpVPsWVxRqXvfzyXYZzLT564pDcD20',
            language: 'en', // language of the results
          }}
          styles={{
            textInputContainer: {
              borderTopWidth: 0,
              borderBottomWidth:0,
              width: 320, 
              marginLeft: 25,
              backgroundColor: 'transparent'
            },
            container: {
              backgroundColor: 'transparent'
            },
            textInput: {
              marginLeft: 0,
              marginRight: 0,
              height: 38,
              color: '#5d5d5d',
              fontSize: 16
            },
            predefinedPlacesDescription: {
              color: '#1faadb'
            },
            poweredContainer: {
              display: 'none'
            },
            powered: {
              display: 'none'
            },
            listView: {
              width: 320, 
              marginLeft: 25,
              backgroundColor: 'white'
            }
          }}
          nearbyPlacesAPI='GooglePlacesSearch' // Which API to use: GoogleReverseGeocoding or GooglePlacesSearch
          debounce={200} // debounce the requests in ms. Set to 0 to remove debounce. By default 200ms.
      />


        <View style={styles.two}>
          <View> 
            <FormLabel
              labelStyle={[styles.name,{color: this.state.openColor}]}> hours: open </FormLabel>
            <TouchableHighlight onPress={() => {this._showOpenDatePicked()}} 
              style={styles.twoInputStyle}>
              <View>
              {this.state.openHours != '' &&  <Text style={styles.text}> {this.state.openHours} </Text> 
              }

             {this.state.openHours == '' && 
                <Text style={styles.placeholder}>
                  Select time
                </Text> 
              }
              </View>
            </TouchableHighlight> 
           <DateTimePicker 
            isVisible={this.state.openHoursVisible}
            onConfirm={this._handleOpenDatePicked}
            onCancel={this._hideOpenDatePicker}
            mode='time'
            />
          </View> 
          <View> 
            <FormLabel
              labelStyle={[styles.name,{color: this.state.closeColor}]}> hours: close </FormLabel>
           <TouchableHighlight onPress={() => {this._showCloseDatePicked()}} 
              style={styles.twoInputStyleRight}>
              <View> 
              {this.state.closedHours != '' && 
                <Text style={styles.text}> {this.state.closedHours} </Text> 
              }

             {this.state.closedHours == '' && 
                <Text style={styles.placeholder}> Select time </Text> 
              }
              </View>
             </TouchableHighlight> 
           <DateTimePicker 
            isVisible={this.state.closeHoursVisible}
            onConfirm={this._handleCloseDatePicked}
            onCancel={this._hideCloseDatePicker}
            mode='time'
            />  

          </View>
         
        </View>

          <View>
            <FormLabel
              labelStyle={[styles.name,{color: this.state.phoneColor}]}
              keyboardTyle='phone-pad'> phone </FormLabel>
            <FormInput 
              placeholder= 'Enter phone number.'
              containerStyle={styles.inputStyle}
              multiline={true}
              inputStyle={styles.text}
              onChangeText={(text) => {this.state.phone = text}}
              />
          </View> 
        <FormLabel
          labelStyle={[styles.name,{color: this.state.detailsColor}]}> details </FormLabel>
        <FormInput 
          placeholder="Describe as much as you can"
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