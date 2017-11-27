import React, { Component } from "react";
import PeopleHome from "./PeopleHome.js";
import Peers from "./PeersList.js";
import Mentors from "./MentorsList.js";
import Groups from "./GroupsList.js";
import All from "./AllList.js";

import { StackNavigator } from "react-navigation";

export default (TabNav = StackNavigator({
  PeopleHome: { screen: PeopleHome },
  Peers: { screen: Peers },
  Mentors: { screen: Mentors },
  Groups: { screen: Groups },
  All: { screen: All },
}));
