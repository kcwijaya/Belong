import React, {Component} from "react";
import {
	StyleSheet,
	View,
	Text,
	ScrollView,
} from "react-native";

import PeopleCard from "./PeopleCard";

import Colors from '../../constants/Colors';

export default class PeopleListingView extends Component {
	render() {
    var peopleArray = [].concat(this.props.people);
    return (
      <View> 
      <ScrollView> 
        {peopleArray.map((PeopleInfo) => {
          return (
            <PeopleCard 
              PeopleInfo={PeopleInfo} 
              key={PeopleInfo.user_id}
              navigation={this.props.navigation}
            /> 
          );
        })}
      </ScrollView>
    </View>
    );
	}
}