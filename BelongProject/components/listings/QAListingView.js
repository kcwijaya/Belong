import React, {Component} from "react";
import {
	StyleSheet,
	View,
	Text,
	ScrollView,
} from "react-native";

import QACard from "./QACard";

import {Colors} from '../../constants/Colors';

export default class QAListingView extends Component {
	render() {
		var questionArray = [].concat(this.props.questions);
    return (
      <View> 
      <ScrollView> 
        {questionArray.map((QAInfo) => {
          return (
            <QACard 
              QAInfo={QAInfo} 
              key={QAInfo.question_id}
            /> 
          );
        })}
      </ScrollView>
    </View>
    );
	}
}