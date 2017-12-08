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
const deviceW = Dimensions.get('window').width
import SearchIcon from '../../components/buttons/SearchIcon.js'



export default class Peers extends Component {
  constructor(){
    super();
    this.state = {
      showSearch: false,
      data: global.peers
    }
    setInterval(() => {
      this.setState({showSearch: this.state.showSearch, data: global.peers})
      this.forceUpdate()
    }, 1500);
  }

  changeData = (results) => {
    console.log("new DAT")
    console.log(results)
    this.state.data = results
    this.forceUpdate()
  }

  onBack = () => {
    this.state.data = global.peers
    this.showSearch = false
    this.forceUpdate()
  }


  static navigationOptions = ({ navigation }) => ({
    header: null
  });

  render() {
    return (
      <View style = {styles.container}>
         <Search handleResults={this.changeData}   placeholder="Search for peer" data={global.peers} onBack={this.onBack}/>

        <PeopleListingView
          people={this.state.data}
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
    backgroundColor: 'white'
  },
});