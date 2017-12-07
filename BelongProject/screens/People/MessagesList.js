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
import PlusIcon from '../../components/buttons/PlusIcon.js'
import SearchIcon from '../../components/buttons/SearchIcon.js'


export default class Messages extends Component {
  constructor(){
    super();
    this.state = {
      showSearch: false
    }

    this.toggleSearch = this.toggleSearch.bind(this)
  }

  static navigationOptions = ({ navigation }) => ({
    header: null
  });

  render() {
    return (
      <View style = {styles.container}>
        <PlusIcon style={{bottom: 15}}/>
        <SearchIcon style={{bottom: 16}} onPress={() => this.toggleSearch()}/>
        { this.state.showSearch && <Search />}
        <MessagesListingView
          messages={global.haveMessaged}
          navigation={this.props.navigation}
        />
      </View>
    )
  }

  toggleSearch = () => {
    this.setState({showSearch: !this.state.showSearch})
    this.forceUpdate();
  }

}







const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});