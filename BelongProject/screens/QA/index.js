import React, { Component } from "react";
import QAHome from "./QAHome.js";
import AnswerQuestion from "./AnswerQuestion.js";
import ProfilePage from "../People/ProfilePage.js"
import { StackNavigator } from "react-navigation";
import CreateQuestion from "./CreateQuestion.js";

export default (DrawNav = StackNavigator(
	{
	  QAHome: { screen: QAHome },
	  ProfilePage: {screen: ProfilePage},
	  AnswerQuestion: { screen: AnswerQuestion },
	  CreateQuestion: {screen: CreateQuestion},
	},
	{
		initialRouteName: 'QAHome'
	}
));
