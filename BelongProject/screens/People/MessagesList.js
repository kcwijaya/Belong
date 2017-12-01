import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  Alert
} from 'react-native';
import { Container, Card, CardItem, Body, Content, Header, Left, Right, Title, Button, Text } from "native-base";
import Icon from 'react-native-vector-icons/FontAwesome'
import {Dimensions} from 'react-native'
import { Col, Row, Grid } from "react-native-easy-grid";
import LargeButton from '../../components/buttons/LargeButton.js'
import Search from '../../components/Search.js'
import { Colors } from '../../constants/Colors.js'
import MessagesListingView from '../../components/listings/MessagesListingView.js'

const data = [
  {
    name: "Kimberly Wijaya",
    img: require('../../imgs/placeholders/user.jpg'),
    user_id: 1,
    message: "It's so nice to meet you",
    is_saved: true,
  },
  {
    name: "Tristan Vanech",
    img: require('../../imgs/placeholders/user.jpg'),
    user_id: 2,
    message: "It's so nice to meet you",
    is_saved: true,

  },
  {
    name: "Greg Ramel",
    img: require('../../imgs/placeholders/user.jpg'),
    user_id: 3,
    message: "It's so nice to meet you",
    is_saved: true,

  },
  {
    name: "Cameron Andrews",
    img: require('../../imgs/placeholders/user.jpg'),
    user_id: 4,
    message: "It's so nice to meet you",
    is_saved: true,

  },
  {
    name: "Eddy Rosales",
    img: require('../../imgs/placeholders/user.jpg'),
    user_id: 5,
    message: "It's so nice to meet you",
    is_saved: true,

  },
  {
    name: "Belinda Esqueda",
    img: require('../../imgs/placeholders/user.jpg'),
    user_id: 6,
    message: "It's so nice to meet you",
    is_saved: true,

  },
  {
    name: "Maria Gutierrez",
    img: require('../../imgs/placeholders/user.jpg'),
    user_id: 7,
    message: "It's so nice to meet you",
    is_saved: true,

  },
  {
    name: "Virgilio Urmeneta",
    img: require('../../imgs/placeholders/user.jpg'),
    user_id: 8,
    message: "It's so nice to meet you",
    is_saved: true,

  },
  {
    name: "Robert Wilkins",
    img: require('../../imgs/placeholders/user.jpg'),
    user_id: 9,
    message: "It's so nice to meet you",
    is_saved: true,

  }
];

export default class Messages extends Component {
  constructor(){
    super();
    this.state = {
      showSearch: false
    }
  }

  static navigationOptions = ({ navigation }) => ({
    header: null
  });

  render() {
    return (
      <View style = {styles.container}>
        <Search/>
        <MessagesListingView
          messages={data}
          navigation={this.props.navigation}
        />
      </View>
    )
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});