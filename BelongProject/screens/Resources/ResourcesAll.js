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
import { Colors } from '../../constants/Colors.js'
import PlusIcon from '../../components/buttons/PlusIcon.js'
import SearchIcon from '../../components/buttons/SearchIcon.js'
// import CacheStore from 'react-native-cache-store';

const deviceW = Dimensions.get('window').width
const deviceH = Dimensions.get('window').height

export default class ResourcesHome extends Component {

  constructor(){
    super();
    this.state = {
      showSearch: false,
      data: global.foodBanks
    }
    this.toggleSearch = this.toggleSearch.bind(this);
  }

  static navigationOptions = ({ navigation }) => ({
      header: null
  });    

  handler = () => {
    this.forceUpdate()
  }

  changeData = (results) => {
    console.log("new DAT")
    console.log(results)
    this.state.data = results
    this.forceUpdate()
  }

  onBack = () => {
    this.state.data = global.foodBanks
    this.forceUpdate()
  }


  render () {
      
       return (
          <View style={styles.container}>
              <PlusIcon style={{bottom: 10}} onPress={()=> {this.props.navigation.navigate('ResourceCreate'), this.props.screenProps = true}}/>
              {this.state.showSearch && <Search handleResults={this.changeData}  placeholder="Search for resource" data={global.questions} onBack={this.onBack}/>}
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
                  data={global.foodBanks}
                  navigation={this.props.navigation}
                />
                 <ListingCarousel
                  title='Home Shelters'
                  subtitle='See all'
                  data={global.homeShelters}
                  navigation={this.props.navigation}
                />
                <ListingCarousel
                  title='Education'
                  subtitle='See all'
                  data={global.education}
                  navigation={this.props.navigation}
                />
                <ListingCarousel
                  title='Miscellaneous'
                  subtitle='See all'
                  data={global.miscellaneous}
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
});