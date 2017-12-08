import React, { Component } from "react";
import InitialLogin from './screens/Login/InitialLogin.js'
import { StackNavigator } from "react-navigation";
import TabNavigation from './navigation/TabNavigation.js'
import SignUpName from './screens/Login/SignUpName.js'
import SignUpContact from './screens/Login/SignUpContact.js'
import SignUpSecurity from './screens/Login/SignUpSecurity.js'
import SignUpAbout from './screens/Login/SignUpAbout.js'
import SignUpPermissions from './screens/Login/SignUpPermissions'
// import CacheStore from 'react-native-cache-store';

// CacheStore.flush()

export default (DrawNav = StackNavigator(
  {
    InitialLogin: { screen: InitialLogin },
    TabNavigation: { screen: TabNavigation },
    SignUpName: { screen: SignUpName },
    SignUpContact: {screen: SignUpContact },
    SignUpSecurity: {screen: SignUpSecurity},
    SignUpAbout: {screen: SignUpAbout},
    SignUpPermissions: {screen: SignUpPermissions},
  },
  {
    initialRouteName: 'TabNavigation'
  }
));
