import React, {Component} from "react";
import {
	StyleSheet,
	View,
	Text,
	ScrollView,
} from "react-native";

import AnswerCard from "./AnswerCard";

import Colors from '../../constants/Colors';
import {Dimensions} from 'react-native'

const deviceW = Dimensions.get('window').width
const deviceH = Dimensions.get('window').height;

export default class AnswerListingView extends Component {
	render() {
    var answerArray = [].concat(this.props.answers);
    return (
      <View style={styles.container}> 
      <ScrollView style={styles.scoll}> 
        {answerArray.map((AnswerInfo) => {
          return (
            <AnswerCard 
              AnswerInfo={AnswerInfo} 
              key={AnswerInfo.answer_id}
              navigation={this.props.navigation}
            /> 
          );
        })}
      </ScrollView>
    </View>
    );
	}
}

const styles = StyleSheet.create({
  container: {
    marginTop: 15
  },
  scroll: {
    width: deviceW, 
    height: deviceH/2
  }
})