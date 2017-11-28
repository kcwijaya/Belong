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
import PeopleListingView from '../../components/listings/PeopleListingView.js'
import renderIf from '../../components/renderIf.js'
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

export default class Groups extends Component {
  constructor(){
    super();
    this.state = {
      showSearch: false
    }
    this.toggleSearch = this.toggleSearch.bind(this);
  }

  static navigationOptions = ({ navigation }) => ({
    header: null
  });

  render() {
    return (
      <View style = {styles.container}>
       <Header>
        <Left>
          <Button transparent onPress={() => this.props.navigation.goBack()}>
            <Icon size={20} name="chevron-left" color={Colors.accent}/>
          </Button>
        </Left>
        <Body>
          <Title color={Colors.accent}>Groups</Title>
        </Body>
        <Right>
          <Button transparent onPress={() => this.toggleSearch()}>
            <Icon size={20} name="search" color={this.state.showSearch ? Colors.pressed : Colors.accent}/>
          </Button>
        </Right>
      </Header>
        {this.state.showSearch && (<Search/>)}
        <PeopleListingView
          people={data}
        />
      </View>
    )
  }

  toggleSearch = () => {
    console.log("TOGGLING SEARCH");
    this.setState({showSearch: !this.state.showSearch})
    console.log("SHOW SEARCH IS NOW: " + this.state.showSearch);
    this.forceUpdate();
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});