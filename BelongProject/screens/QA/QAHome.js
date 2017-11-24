import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
import {Dimensions} from 'react-native'
import { Col, Row, Grid } from "react-native-easy-grid";
import LargeButton from '../../components/buttons/LargeButton.js'
import Search from '../../components/Search.js'
import { Colors } from '../../constants/Colors.js'
import QAListingView from '../../components/listings/QAListingView.js'
const deviceW = Dimensions.get('window').width

const basePx = 375

function px2dp(px) {
  return px *  deviceW / basePx
}

const data = [
  {
    question: "Where's the best shelter around Sunnyvale?",
  },
  {
    question: "Where do you go to print your HW?",
  },
  {
    question: "How do you ask your GC for help?",
  },
  {
    question: "Where's the cheapest internet cafe near SCU?"
  },
   {
    question: "Does anyone buy bulk at TJs?",
  },
  {
    question: "Where do you recommend going for a cheap meal?",
  },
  {
    question: "Have you told your friends you're homeless?",
  },
  {
    question: "Have you ever gone busking?"
  },
  {
    question: "Best way to ask a friend if you can crash?"
  }
];

export default class QAHome extends Component {
  render() {
    return (
      <View style={styles.container}>
      <Search/>
      <QAListingView 
        questions={data}
      />
     </View>
    )
  }
}

const styles = StyleSheet.create({
  grid: {
    marginLeft: 30,
    marginTop: 50,
  },
  container: {
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});