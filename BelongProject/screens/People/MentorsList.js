import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View
} from 'react-native';
import { Container, Card, CardItem, Body, Content, Header, Left, Right, Title, Button, Text } from "native-base";
import Icon from 'react-native-vector-icons/FontAwesome'
import {Dimensions} from 'react-native'
import { Col, Row, Grid } from "react-native-easy-grid";
import LargeButton from '../../components/buttons/LargeButton.js'
import Search from '../../components/Search.js'
import { Colors } from '../../constants/Colors.js'
import PeopleListingView from '../../components/listings/PeopleListingView.js'

const data = [
  {
    name: "Kimberly Wijaya",
    img: require('../../imgs/placeholders/user.jpg'),
    user_id: 1,
  },
  {
    name: "Tristan Vanech",
    img: require('../../imgs/placeholders/user.jpg'),
    user_id: 2,
  },
  {
    name: "Greg Ramel",
    img: require('../../imgs/placeholders/user.jpg'),
    user_id: 3,
  },
  {
    name: "Cameron Andrews",
    img: require('../../imgs/placeholders/user.jpg'),
    user_id: 4,
  },
  {
    name: "Eddy Rosales",
    img: require('../../imgs/placeholders/user.jpg'),
    user_id: 5,
  },
  {
    name: "Belinda Esqueda",
    img: require('../../imgs/placeholders/user.jpg'),
    user_id: 6,
  },
  {
    name: "Maria Gutierrez",
    img: require('../../imgs/placeholders/user.jpg'),
    user_id: 7,
  },
  {
    name: "Virgilio Urmeneta",
    img: require('../../imgs/placeholders/user.jpg'),
    user_id: 8,
  },
  {
    name: "Robert Wilkins",
    img: require('../../imgs/placeholders/user.jpg'),
    user_id: 9,
  }
];

export default class Mentors extends Component {
   static navigationOptions = ({ navigation }) => ({
    header: (
      <Header>
        <Left>
          <Button transparent onPress={() => navigation.goBack()}>
            <Icon size={20} name="chevron-left" color={Colors.accent}/>
          </Button>
        </Left>
        <Body>
          <Title color={Colors.accent}>Mentors</Title>
        </Body>
        <Right />
      </Header>
    )
  });

  render() {
    return (
      <View style = {styles.container}>
        <Search/>
        <PeopleListingView
          people={data}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  grid: {
    marginLeft: 30,
    marginTop: 50,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});