import React, { Component } from "react";
import QAHome from "./PeopleHome.js";


import { StackNavigator } from "react-navigation";

export default (DrawNav = StackNavigator(
	{
	  QAHome: { screen: QAHome },
	},
	{
		initialRouteName: 'QAHome'
	}
));
