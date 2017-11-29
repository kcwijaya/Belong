import React, { Component } from "react";
import QAHome from "./QAHome.js";
import AnswerQuestion from "./AnswerQuestion.js";

import { StackNavigator } from "react-navigation";

export default (DrawNav = StackNavigator(
	{
	  QAHome: { screen: QAHome },
	  AnswerQuestion: { screen: AnswerQuestion },
	},
	{
		initialRouteName: 'QAHome'
	}
));
