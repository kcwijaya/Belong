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

const data = [
  {
    name: "Palo Alto Food Bank",
    img: require('../../imgs/placeholders/resource.jpg'),
    resource_id: 1,
    address: '488 Winslow St Redwood City, CA 94019',
    hours: '7AM-9PM',
    phone: '6504900437',
    about: 'The South Palo Alto Food Closet is a grocery program located at the Covenant Presbyterian Church. This food program is designed to help families with children by assisting them in their weekly food needs. Adults who are unable to use the services of the Downtown Food Closet are also served, provided they have a referral. Referrals can be obtained from a social service agency, any church, or Urban Ministry. Emergency food service is available. Assistance is limited to families that live in Palo Alto except for special requests from specified agencies.',
  },
  {
    name: "Los Altos Food Bank",
    img: require('../../imgs/placeholders/resource.jpg'),
    resource_id: 2,
    address: '488 Winslow St Redwood City, CA 94019',
    hours: '7AM-9PM',
    phone: '6504900437',
    about: 'The South Palo Alto Food Closet is a grocery program located at the Covenant Presbyterian Church. This food program is designed to help families with children by assisting them in their weekly food needs. Adults who are unable to use the services of the Downtown Food Closet are also served, provided they have a referral. Referrals can be obtained from a social service agency, any church, or Urban Ministry. Emergency food service is available. Assistance is limited to families that live in Palo Alto except for special requests from specified agencies.',

  },
  {
    name: "Menlo Park Food Bank",
    img: require('../../imgs/placeholders/resource.jpg'),
    resource_id: 3,
    address: '488 Winslow St Redwood City, CA 94019',
    hours: '7AM-9PM',
    phone: '6504900437',
    about: 'The South Palo Alto Food Closet is a grocery program located at the Covenant Presbyterian Church. This food program is designed to help families with children by assisting them in their weekly food needs. Adults who are unable to use the services of the Downtown Food Closet are also served, provided they have a referral. Referrals can be obtained from a social service agency, any church, or Urban Ministry. Emergency food service is available. Assistance is limited to families that live in Palo Alto except for special requests from specified agencies.',

  },
  {
    name: "Redwood City Food Bank",
    img: require('../../imgs/placeholders/resource.jpg'),
    resource_id: 4,
    address: '488 Winslow St Redwood City, CA 94019',
    hours: '7AM-9PM',
    phone: '6504900437',
    about: 'The South Palo Alto Food Closet is a grocery program located at the Covenant Presbyterian Church. This food program is designed to help families with children by assisting them in their weekly food needs. Adults who are unable to use the services of the Downtown Food Closet are also served, provided they have a referral. Referrals can be obtained from a social service agency, any church, or Urban Ministry. Emergency food service is available. Assistance is limited to families that live in Palo Alto except for special requests from specified agencies.',
  },
  {
    name: "Santa Clara Food Bank",
    img: require('../../imgs/placeholders/resource.jpg'),
    resource_id: 5,
    address: '488 Winslow St Redwood City, CA 94019',
    hours: '7AM-9PM',
    phone: '6504900437',
    about: 'The South Palo Alto Food Closet is a grocery program located at the Covenant Presbyterian Church. This food program is designed to help families with children by assisting them in their weekly food needs. Adults who are unable to use the services of the Downtown Food Closet are also served, provided they have a referral. Referrals can be obtained from a social service agency, any church, or Urban Ministry. Emergency food service is available. Assistance is limited to families that live in Palo Alto except for special requests from specified agencies.',
  },
  {
    name: "Los Gatos Food Bank",
    img: require('../../imgs/placeholders/resource.jpg'),
    resource_id: 6,
    address: '488 Winslow St Redwood City, CA 94019',
    hours: '7AM-9PM',
    phone: '6504900437',
    about: 'The South Palo Alto Food Closet is a grocery program located at the Covenant Presbyterian Church. This food program is designed to help families with children by assisting them in their weekly food needs. Adults who are unable to use the services of the Downtown Food Closet are also served, provided they have a referral. Referrals can be obtained from a social service agency, any church, or Urban Ministry. Emergency food service is available. Assistance is limited to families that live in Palo Alto except for special requests from specified agencies.',
  },
  {
    name: "Mountain View Food Bank",
    img: require('../../imgs/placeholders/resource.jpg'),
    resource_id: 7,
    address: '488 Winslow St Redwood City, CA 94019',
    hours: '7AM-9PM',
    phone: 6504900437,
    about: 'The South Palo Alto Food Closet is a grocery program located at the Covenant Presbyterian Church. This food program is designed to help families with children by assisting them in their weekly food needs. Adults who are unable to use the services of the Downtown Food Closet are also served, provided they have a referral. Referrals can be obtained from a social service agency, any church, or Urban Ministry. Emergency food service is available. Assistance is limited to families that live in Palo Alto except for special requests from specified agencies.',
  },
  {
    name: "Sunnyvale Food Bank",
    img: require('../../imgs/placeholders/resource.jpg'),
    resource_id: 8,
    hours: '7AM-9PM',
    phone: '6504900437',
    about: 'The South Palo Alto Food Closet is a grocery program located at the Covenant Presbyterian Church. This food program is designed to help families with children by assisting them in their weekly food needs. Adults who are unable to use the services of the Downtown Food Closet are also served, provided they have a referral. Referrals can be obtained from a social service agency, any church, or Urban Ministry. Emergency food service is available. Assistance is limited to families that live in Palo Alto except for special requests from specified agencies.',
  },
  {
    name: "San Jose Food Bank",
    img: require('../../imgs/placeholders/resource.jpg'),
    resource_id: 9,
    address: '488 Winslow St Redwood City, CA 94019',
    hours: '7AM-9PM',
    phone: '6504900437',
    about: 'The South Palo Alto Food Closet is a grocery program located at the Covenant Presbyterian Church. This food program is designed to help families with children by assisting them in their weekly food needs. Adults who are unable to use the services of the Downtown Food Closet are also served, provided they have a referral. Referrals can be obtained from a social service agency, any church, or Urban Ministry. Emergency food service is available. Assistance is limited to families that live in Palo Alto except for special requests from specified agencies.',
  }
];

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
          <Title color={Colors.accent}>Bookmarks</Title>
        </Body>
        <Right>
          <Button transparent onPress={() => this.toggleSearch()}>
            <Icon size={20} name="search" color={this.state.showSearch ? Colors.pressed : Colors.accent}/>
          </Button>
        </Right>
      </Header>
        {this.state.showSearch && (<Search/>)}
        <ResourceListingView
          resources={data}
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