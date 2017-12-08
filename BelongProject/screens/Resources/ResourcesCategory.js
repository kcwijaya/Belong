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
          <Title style={{fontWeight: '300'}} color={Colors.accent}>{this.props.navigation.state.params.category}</Title>
        </Body>
        <Right>
          <Button transparent onPress={() => this.toggleSearch()}>
            <Icon size={20} name="search" color={this.state.showSearch ? Colors.pressed : Colors.accent}/>
          </Button>
        </Right>
      </Header>
        {this.state.showSearch && (<Search/>)}
        <ResourceListingView
          resources={this.props.navigation.state.params.info}
          navigation={this.props.navigation}
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