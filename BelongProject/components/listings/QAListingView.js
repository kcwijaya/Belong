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
              key={QAInfo.question}
            /> 
          );
        })}
      </ScrollView>
    </View>
    );
	}
}

const styles = StyleSheet.create({
  textContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyles: {
    fontSize: 20, 
    color: '#706C6C',
    textAlign: 'center',
    margin: 40,
  },
  title: {
  	color: 'white',
  	fontSize: 20,
  	fontFamily: 'sans-serif-light',
  	textAlign: 'left',
  	marginTop: 32
  },
  button : {
  	height: 30,
  	width: 90,
  	marginTop: 30,
  	borderColor: '#40ACAC',
  	borderWidth: 2
  },
  label: {
  	color: 'white',
  	fontSize: 15, 
  	fontFamily: 'sans-serif-light',
  	textAlign: 'center'
  },
  header: {
  	height: 75,
  	backgroundColor: Colors.accent,
  	alignSelf: 'stretch',
  	flexDirection: 'row',
  	justifyContent: 'space-around'
  }
});