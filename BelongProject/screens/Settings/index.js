import React, { Component } from "react";
import SettingsHome from "./SettingsHome.js";
import EditableProfilePage from "./EditableProfilePage.js";
import EditProfilePage from "./EditProfilePage.js";

import { StackNavigator } from "react-navigation";

export default (DrawNav = StackNavigator(
	{
	  SettingsHome: { screen: SettingsHome },
	  EditableProfilePage: { screen: EditableProfilePage },
	  EditProfilePage: { screen: EditProfilePage},
	},
	{
		initialRouteName: 'EditableProfilePage'
	}
));
