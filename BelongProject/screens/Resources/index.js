import React, { Component } from "react";
import ResourcesHome from "./PeopleHome.js";
import ResourcesBookmarks from "./ResourcesBookmarks.js";
import ResourcesAll from "./ResourcesAll.js";

import { StackNavigator } from "react-navigation";

export default (DrawNav = StackNavigator(
	{
	  ResourcesHome: { screen: ResourcesHome },
	  ResourcesBookmarks: { screen: ResourcesBookmarks },
	  ResourcesAll: { screen: ResourcesAll },
	},
	{
		initialRouteName: 'ResourcesHome'
	}
));