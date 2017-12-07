import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
import {Dimensions} from 'react-native'
import { Col, Row, Grid } from "react-native-easy-grid";
import LargeButton from '../../components/buttons/LargeButton.js'
import Search from '../../components/Search.js'
import { Colors } from '../../constants/Colors.js'
import QAListingView from '../../components/listings/QAListingView.js'
import PlusIcon from '../../components/buttons/PlusIcon.js'


const deviceW = Dimensions.get('window').width
const basePx = 375

function px2dp(px) {
  return px *  deviceW / basePx
}

const data = [
  {
    question: "Where's the best shelter around Sunnyvale?",
    question_id: 1,
    details: "Here are all the details of this question. Here are all the details of this question. Here are all the details of this question. Here are all the details of this question.",
    user: "Kimberly Wijaya",
  },
  {
    question: "Where do you go to print your HW?",
    question_id: 2,
    details: "Here are all the details of this question. Here are all the details of this question. Here are all the details of this question. Here are all the details of this question.",
    user: "Maria Gutierrez", 
  },
  {
    question: "How do you ask your GC for help?",
    question_id: 3,
    details: "Here are all the details of this question. Here are all the details of this question. Here are all the details of this question. Here are all the details of this question.",
    user: "Eddy Rosales",
  },
  {
    question: "Whre's the cheapest internet cafe near SCU?",
    question_id: 4,
    details: "Here are all the details of this question. Here are all the details of this question. Here are all the details of this question. Here are all the details of this question.",
    user: "Belinda Esqueda",
  },
  {
    question: "Does anyone buy bulk at TJs?",
    question_id: 5,
    details: "Here are all the details of this question. Here are all the details of this question. Here are all the details of this question. Here are all the details of this question.",
    user: "Virgilio Urmeneta",
  },
  {
    question: "Where do you recommend going for a cheap meal?",
    question_id: 6,
    details: "Here are all the details of this question. Here are all the details of this question. Here are all the details of this question. Here are all the details of this question.",
    user: "Robert Wilkins",
  },
  {
    question: "Have you told your friends you're homeless?",
    question_id: 7,
    details: "Here are all the details of this question. Here are all the details of this question. Here are all the details of this question. Here are all the details of this question.",
    user: "Robert Wilkins",

  },
  {
    question: "Have you ever gone busking?",
    question_id: 8,
    details: "Here are all the details of this question. Here are all the details of this question. Here are all the details of this question. Here are all the details of this question.",
    user: "Robert Wilkins",

  },
  {
    question: "Best way to ask a friend if you can crash?",
    question_id: 9,
    details: "Here are all the details of this question. Here are all the details of this question. Here are all the details of this question. Here are all the details of this question.",
    user: "Robert Wilkins",

  }
];

export default class QAHome extends Component {

  static navigationOptions = ({ navigation }) => ({
    header: null
  });

  render() {
    return (
      <View style={styles.container}>
        <PlusIcon style={{bottom:20}}/>
        <Search/>
        <QAListingView 
          questions={data}
          navigation={this.props.navigation}
        />
     </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5FCFF',
  },
  plus: {
    position: 'absolute', 
    zIndex: 1, 
    backgroundColor: 'transparent',
    bottom: 60, 
    right: 20
  }
});