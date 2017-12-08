import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  Alert
} from 'react-native';
import {Header, Body, Left, Right, Title, Button, Text} from "native-base";
import Icon from 'react-native-vector-icons/FontAwesome'
import {Dimensions} from 'react-native'
import { Col, Row, Grid } from "react-native-easy-grid";
import LargeButton from '../../components/buttons/LargeButton.js'
import Search from '../../components/Search.js'
import { Colors } from '../../constants/Colors.js'
import ResourceListingView from '../../components/listings/ResourceListingView.js'


export default class ResourcesBookmarks extends Component {
  constructor(){
    super();
    this.state = {
      showSearch: false,
      sources: global.bookmarks
    }
    this.toggleSearch = this.toggleSearch.bind(this);
  }

  static navigationOptions = ({ navigation }) => ({
    header: null
  });


  handler(){
    this.setState({showSearch: this.state.showSearch, sources: global.bookmarks})
    this.forceUpdate()
  }


  render() {
    //this.forceUpdate()
    return (
      <View style = {styles.container}>
        <ResourceListingView
          resources={this.state.sources}
          navigation={this.props.navigation}
          update = {this.handler.bind(this)}

          //toUpdate = {this}
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
    backgroundColor: 'white'
  },
});