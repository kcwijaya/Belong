import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  ScrollView,
  TextInput,
  TouchableHighlight,
} from 'react-native';
import { Container, Card, CardItem, Body, Content, Header, Left, Right, Title, Button, Text } from "native-base";
import Icon from 'react-native-vector-icons/FontAwesome'
import {Dimensions} from 'react-native'
import { Col, Row, Grid } from "react-native-easy-grid";
import Search from '../../components/Search.js'
import { Colors } from '../../constants/Colors.js'
import AnswerListingView from '../../components/listings/AnswerListingView.js'
import Hr from '../../components/hr.js'
var { GiftedForm, GiftedFormManager } = require('react-native-gifted-form');

const deviceW = Dimensions.get('window').width
const basePx = 375

function px2dp(px) {
  return px *  deviceW / basePx
}

export default class CreateQuestion extends Component {

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
          <Title color={Colors.accent}>Ask</Title>
        </Body>
        <Right>
        </Right>
      </Header>

      <ScrollView style={styles.container}>
         <GiftedForm
        formName='signupForm' // GiftedForm instances that use the same name will also share the same states
        clearOnClose={false} // delete the values of the form when unmounted
         openModal={(route) => {
          this.props.navigation.push(route); // The ModalWidget will be opened using this method. Tested with ExNavigator
        }}
        defaults={{
          /*
          username: 'Farid',
          'gender{M}': true,
          password: 'abcdefg',
          country: 'FR',
          birthday: new Date(((new Date()).getFullYear() - 18)+''),
          */
        }}
        validators={{
          fullName: {
            title: 'Full name',
            validate: [{
              validator: 'isLength',
              arguments: [1, 23],
              message: '{TITLE} must be between {ARGS[0]} and {ARGS[1]} characters'
            }]
          },
          username: {
            title: 'Username',
            validate: [{
              validator: 'isLength',
              arguments: [3, 16],
              message: '{TITLE} must be between {ARGS[0]} and {ARGS[1]} characters'
            },{
              validator: 'matches',
              arguments: /^[a-zA-Z0-9]*$/,
              message: '{TITLE} can contains only alphanumeric characters'
            }]
          },
          password: {
            title: 'Password',
            validate: [{
              validator: 'isLength',
              arguments: [6, 16],
              message: '{TITLE} must be between {ARGS[0]} and {ARGS[1]} characters'
            }]
          },
          emailAddress: {
            title: 'Email address',
            validate: [{
              validator: 'isLength',
              arguments: [6, 255],
            },{
              validator: 'isEmail',
            }]
          },
          bio: {
            title: 'Biography',
            validate: [{
              validator: 'isLength',
              arguments: [0, 512],
              message: '{TITLE} must be between {ARGS[0]} and {ARGS[1]} characters'
            }]
          },
          gender: {
            title: 'Gender',
            validate: [{
              validator: (...args) => {
                if (args[0] === undefined) {
                  return false;
                }
                return true;
              },
              message: '{TITLE} is required',
            }]
          },
          birthday: {
            title: 'Birthday',
            validate: [{
              validator: 'isBefore',
              message: 'You must be at least 18 years old'
            }, {
              validator: 'isAfter',
              message: '{TITLE} is not valid'
            }]
          },
          country: {
            title: 'Country',
            validate: [{
              validator: 'isLength',
              arguments: [2],
              message: '{TITLE} is required'
            }]
          },
        }}
      >
        <GiftedForm.SeparatorWidget />

        <GiftedForm.TextInputWidget
          name='fullName' // mandatory
          title='Full name'
          image={require('../../icon.png')}
          placeholder='Marco Polo'
          clearButtonMode='while-editing'
        />

        <GiftedForm.TextInputWidget
          name='username'
          title='Username'
          image={require('../../icon.png')}
          placeholder='MarcoPolo'
          clearButtonMode='while-editing'
          onTextInputFocus={(currentText = '') => {
            if (!currentText) {
              let fullName = GiftedFormManager.getValue('signupForm', 'fullName');
              if (fullName) {
                return fullName.replace(/[^a-zA-Z0-9-_]/g, '');
              }
            }
            return currentText;
          }}
        />

        <GiftedForm.TextInputWidget
          name='password' // mandatory
          title='Password'
          placeholder='******'
          clearButtonMode='while-editing'
          secureTextEntry={true}
          image={require('../../icon.png')}
        />

        <GiftedForm.TextInputWidget
          name='emailAddress' // mandatory
          title='Email address'
          placeholder='example@nomads.ly'
          keyboardType='email-address'
          clearButtonMode='while-editing'
          image={require('../../icon.png')}
        />

        <GiftedForm.SeparatorWidget />

        <GiftedForm.ModalWidget
          title='Gender'
          displayValue='gender'
          image={require('../../icon.png')}
        >
          <GiftedForm.SeparatorWidget />

          <GiftedForm.SelectWidget name='gender' title='Gender' multiple={false}>
            <GiftedForm.OptionWidget           image={require('../../icon.png')} title='Female' value='F'/>
            <GiftedForm.OptionWidget           image={require('../../icon.png')} title='Male' value='M'/>
          </GiftedForm.SelectWidget>
        </GiftedForm.ModalWidget>

        <GiftedForm.ModalWidget
          title='Birthday'
          displayValue='birthday'
          image={require('../../icon.png')}

        >
          <GiftedForm.SeparatorWidget/>

          <GiftedForm.DatePickerIOSWidget
            name='birthday'
            mode='date'
            getDefaultDate={() => {
              return new Date(((new Date()).getFullYear() - 18)+'');
            }}
          />
        </GiftedForm.ModalWidget>

        <GiftedForm.ModalWidget
          title='Country'
          displayValue='country'
                    image={require('../../icon.png')}

          scrollEnabled={false}
        >
          <GiftedForm.SelectCountryWidget
            code='alpha2'
            name='country'
            title='Country'
            autoFocus={true}
          />
        </GiftedForm.ModalWidget>

        <GiftedForm.ModalWidget
          title='Biography'
          displayValue='bio'
                   image={require('../../icon.png')}

          scrollEnabled={true} // true by default
        >
          <GiftedForm.SeparatorWidget/>

          <GiftedForm.TextAreaWidget
            name='bio'
            autoFocus={true}
            placeholder='Something interesting about yourself'
          />
        </GiftedForm.ModalWidget>

        <GiftedForm.ErrorsWidget/>

        <GiftedForm.SubmitWidget
          title='Sign up'
          widgetStyles={{
            submitButton: {
              backgroundColor: Colors.accent,
            }
          }}
          onSubmit={(isValid, values, validationResults, postSubmit = null, modalNavigator = null) => {
            if (isValid === true) {
              // prepare object
              values.gender = values.gender[0];

              /* Implement the request to your server using values variable
              ** then you can do:
              ** postSubmit(); // disable the loader
              ** postSubmit(['An error occurred, please try again']); // disable the loader and display an error message
              ** postSubmit(['Username already taken', 'Email already taken']); // disable the loader and display an error message
              ** GiftedFormManager.reset('signupForm'); // clear the states of the form manually. 'signupForm' is the formName used
              */
            }
          }}
        />

        <GiftedForm.NoticeWidget
          title='By signing up, you agree to the Terms of Service and Privacy Policity.'
        />

        <GiftedForm.HiddenWidget name='tos' value={true} />
      </GiftedForm>

      </ScrollView>


      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.formbg
  }
});