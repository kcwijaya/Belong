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
import Search from '../../components/Search.js'
import ListingCarousel from '../../components/sliders/ListingCarousel.js'
import { Colors } from '../../constants/Colors.js';

const deviceW = Dimensions.get('window').width
const deviceH = Dimensions.get('window').height

const ENTRIES1 = [
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

export default class ResourcesHome extends Component {

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


  render () {
       return (
          <View style={styles.container}>
              <StatusBar
                translucent={true}
                backgroundColor={Colors.accent}
                tintColorSearch={Colors.accent}
                barStyle={'light-content'}
              />
              { this.gradient }
              <ScrollView
                style={styles.scrollview}
                contentContainerStyle={styles.scrollviewContentContainer}
                indicatorStyle={'white'}
                scrollEventThrottle={200}
                directionalLockEnabled={true}
              >
                <ListingCarousel
                  title='Food Banks'
                  subtitle='See all'
                  data={ENTRIES1}
                  navigation={this.props.navigation}
                />
                 <ListingCarousel
                  title='Home Shelters'
                  subtitle='See all'
                  data={ENTRIES1}
                  navigation={this.props.navigation}
                />
              </ScrollView>
          </View>
      );
  }

  toggleSearch = () => {
    console.log("TOGGLING SEARCH");
    this.setState({showSearch: !this.state.showSearch})
    console.log("SHOW SEARCH IS NOW: " + this.state.showSearch);
    this.forceUpdate();
  }
}

const styles = StyleSheet.create({
  scrollview: {
      flex: 1,
      backgroundColor: 'white'
  },
  header: {
    borderWidth: 0
  },
  scrollviewContentContainer: {
    paddingBottom: 50
  },
  searchBarContainer: {
    backgroundColor: Colors.accent,
    borderWidth: 0,
    width: deviceW
  },
  searchBarInput: {
    backgroundColor: Colors.well
  },
  container: {
    flex: 1,
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