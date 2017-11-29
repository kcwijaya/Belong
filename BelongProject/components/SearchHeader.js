import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  ScrollView,
  StatusBar
} from 'react-native';
import { Container, Card, CardItem, Body, Content, Header, Left, Right, Title, Button, Text } from "native-base";
import Icon from 'react-native-vector-icons/FontAwesome'
import {Dimensions} from 'react-native'
import Search from './Search.js'
import ListingCarousel from './sliders/ListingCarousel.js'
import { Colors } from '../constants/Colors.js';

export default class SearchHeader extends Component {
  render () {
       return (
          <Header>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon size={20} name="chevron-left" color={Colors.accent}/>
            </Button>
          </Left>
          <Body>
            <Title color={Colors.accent}>{this.props.title}</Title>
          </Body>
          <Right>
            <Button transparent onPress={() => this.props.toggleSearch()}>
              <Icon size={20} name="search" color={this.props.state.showSearch ? Colors.pressed : Colors.accent}/>
            </Button>
          </Right>
          </Header>
      );
  }
}

const styles = StyleSheet.create({  
  container: {
    flex: 1,
  },
});