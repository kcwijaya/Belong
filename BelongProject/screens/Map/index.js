import React, { Component } from "react";
import MapHome from "./MapHome.js";
import ResourceDetails from "../Resources/ResourceDetails.js"
import ProfilePage from "../People/ProfilePage.js"

import { StackNavigator } from "react-navigation";

export default (DrawNav = StackNavigator(
	{
	  MapHome: { screen: MapHome },
	  ResourceDetails: { screen: ResourceDetails },
	  ProfilePage: { screen: ProfilePage },
	},
	{
		initialRouteName: 'MapHome'
	}
));
