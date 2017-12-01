import React, {Component} from "react";
import {
	StyleSheet,
	View,
	Text,
	ScrollView,
} from "react-native";

import MessageCard from "./MessageCard";

import Colors from '../../constants/Colors';

export default class MessagesListingView extends Component {
	render() {
    var messagesArray = [].concat(this.props.messages);
    return (
      <View> 
      <ScrollView> 
        {messagesArray.map((MessageInfo) => {
          return (
            <MessageCard 
              MessageInfo={MessageInfo} 
              key={MessageInfo.user_id}
              navigation={this.props.navigation}
            /> 
          );
        })}
      </ScrollView>
    </View>
    );
	}
}