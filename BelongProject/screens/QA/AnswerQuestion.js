import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  ScrollView,
  TextInput,
  TouchableHighlight,
} from 'react-native';
import { FormLabel, FormInput, Container, Card, CardItem, Body, Content, Header, Left, Right, Title, Button, Text } from "native-base";
import Icon from 'react-native-vector-icons/FontAwesome'
import {Dimensions} from 'react-native'
import { Col, Row, Grid } from "react-native-easy-grid";
import Search from '../../components/Search.js'
import { Colors } from '../../constants/Colors.js'
import AnswerListingView from '../../components/listings/AnswerListingView.js'
import Hr from '../../components/hr.js'

const deviceW = Dimensions.get('window').width
const basePx = 375

function px2dp(px) {
  return px *  deviceW / basePx
}


export default class AnswerQuestion extends Component {

  constructor() {
    super()
    this.state = {
      answer: ''
    }
  }

  checkSubmit = () => {
    this.forceUpdate()
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
          <Title style={{fontWeight: '300'}} color={Colors.accent}>Answer</Title>
        </Body>
        <Right>
        </Right>
      </Header>

      <ScrollView style={styles.container}>
      <View style={styles.questionContainer} >
        <Text style={styles.question}> 
          {this.props.navigation.state.params.question}
        </Text>

        <Text style={styles.details}>
          {this.props.navigation.state.params.details}
        </Text>

        <TouchableHighlight onPress={() => this.props.navigation.navigate("ProfilePage", {img: require('../../imgs/placeholders/user.jpg'),name: this.props.navigation.state.params.user})}>
          <Text style={styles.asker}>
            Asked by: {this.props.navigation.state.params.user}
          </Text>
        </TouchableHighlight>

      </View>
      <View style={styles.dividerContainer}>
      <View style={styles.divider} />
      </View>

      <View style={styles.questionContainer} >
        <Text style={styles.question}> Answers </Text>
      <AnswerListingView 
        answers={global.functions.getAnswers(this.props.navigation.state.params)}
        navigation={this.props.navigation}
        />
      </View>

      <View style={styles.answerContainer} >
        <Text style={styles.question}> Your Answer </Text>

      <View style={{flexDirection: 'row', justifyContent: 'center'}}> 
      <FormInput 
        containerStyle={styles.forminput}
        ref={input => this.answer = input}
        onChangeText={(text) => {this.state.answer = text}}
      />
      </View>

      <View style={styles.centered}>
      <TouchableHighlight style={styles.answerButton} onPress={() => {this.checkSubmit()}}>
        <Text style={styles.buttonText}> Submit Answer </Text>
      </TouchableHighlight>
      </View>
      </View>
      </ScrollView>


      </View>
    )
  }
}

const styles = StyleSheet.create({
  centered: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  dividerContainer: {
    backgroundColor: 'white',
    padding: 4
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    marginTop: 5
  },
  answerButton: {
    backgroundColor: Colors.accent,
    borderRadius:10,
    borderWidth: 2,
    borderColor: '#fff',
    width: 300,
    height: 45, 
    paddingBottom: 14,
    paddingTop: 4,
    overflow: 'hidden'
  },
  divider: {
    backgroundColor: Colors.accent,
    height: 1, 
    width: deviceW,
    marginTop: 2, 
    marginBottom: 2,
  },
  asker: {
    textAlign: 'right', 
    fontStyle: 'italic',
    fontSize: 10,
    color: Colors.accent,
    fontWeight: '400'
  },
  answerContainer: {
    backgroundColor: 'white',
    padding: 3,
  },
  answerBox: {
    fontSize: 15, 
    height: 200,
    backgroundColor: 'white',
    borderColor: Colors.accent, 
    borderWidth: 1,
    width: 350,
    borderRadius: 20, 
    marginTop: 10,
    paddingLeft:0,
    paddingTop:0,
  },
  questionContainer: {
    backgroundColor: 'white',
    padding: 10,
  },
  question: {
    color: Colors.accent, 
    fontSize: 18,
    fontWeight: '300'
  },
    forminput: {
    width: 270,
    marginLeft: 45,
    borderBottomWidth: 1,
    borderBottomColor: 'white'
  },
  details: {
    fontSize: 15,
    marginTop: 5,
    fontWeight: '300'
  },
  plus: {
    position: 'absolute', 
    zIndex: 1, 
    backgroundColor: 'transparent',
    bottom: 60, 
    right: 2,
  }
});