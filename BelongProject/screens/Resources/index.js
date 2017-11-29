import React, { Component } from "react";
import ResourcesHome from "./ResourcesHome.js";
import ResourcesBookmarks from "./ResourcesBookmarks.js";
import ResourcesAll from "./ResourcesAll.js";
import ResourcesCategory from "./ResourcesCategory.js";
import ResourceDetails from "./ResourceDetails.js";
import { StackNavigator } from "react-navigation";

export default (DrawNav = StackNavigator(
	{
	  ResourcesHome: { screen: ResourcesHome },
	  ResourcesBookmarks: { screen: ResourcesBookmarks },
	  ResourcesAll: { screen: ResourcesAll },
	  ResourcesCategory: { screen: ResourcesCategory },
	  ResourceDetails: { screen: ResourceDetails },
	},
	{
		initialRouteName: 'ResourcesHome'
	}
));