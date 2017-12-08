import React, { Component } from 'react';
import MapView from 'react-native-maps';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Alert,
  ScrollView,
  TouchableOpacity,
  TouchableHighlight
} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import Icon from 'react-native-vector-icons/Ionicons'
import {Dimensions} from 'react-native'
import Legend from '../../components/Legend.js'
import { Colors } from '../../constants/Colors.js' 
import { Col, Row, Grid } from "react-native-easy-grid";
import MapPin from '../../components/map/MapPin.js'

const deviceW = Dimensions.get('window').width
const deviceH = Dimensions.get('window').height

const basePx = 375

function px2dp(px) {
  return px *  deviceW / basePx
}

export default class Map extends Component {
  constructor() {
    super();
    this.state = {
      location: false,
      foodColor: Colors.accent,
      schoolColor: Colors.accent,
      shelterColor: Colors.accent,
      peerColor: Colors.accent, 
      miscColor: Colors.accent,
      showFood: true, 
      showSchool: true, 
      showShelter: true,
      showPeer: true, 
      showMisc: true
    };
    this.showObject = this.showObject.bind(this);
  }

  showObject = (name) => {
    console.log(name)
    if (name == 'food') {
      if (this.state.showFood) {
        this.state.foodColor = 'gray';
      } else 
      {
        this.state.foodColor = Colors.accent;
      }
      this.state.showFood = !this.state.showFood
    }

    if (name == 'shelters') {
      if (this.state.showShelter) {
        this.state.shelterColor = 'gray';
      } else 
      {
        this.state.shelterColor = Colors.accent;
      }
      this.state.showShelter = !this.state.showShelter
    }

    if (name == 'school') {
      if (this.state.showSchool) {
        this.state.schoolColor = 'gray';
      } else 
      {
        this.state.schoolColor = Colors.accent;
      }
      this.state.showSchool = !this.state.showSchool
    }

     if (name == 'misc') {
      if (this.state.showMisc) {
        this.state.miscColor = 'gray';
      } else 
      {
        this.state.miscColor = Colors.accent;
      }
      this.state.showMisc = !this.state.showMisc
    }

     if (name == 'peer') {
      if (this.state.showPeer) {
        this.state.peerColor = 'gray';
      } else 
      {
        this.state.peerColor = Colors.accent;
      }
      this.state.showPeer = !this.state.showPeer
    }

    this.forceUpdate()
  }

  static navigationOptions = ({ navigation }) => ({
    header: null
  });



  checkLocation = () => {
    if (global.userInfo.location){
      this.toggleLocation()
    } else {
      Alert.alert(
      "To share your location, you must turn on Location Services in settings!",
      '',
      [
        {text: "Don't Allow"},
        {text: 'Okay, go to settings!', onPress:  () => {this.props.navigation.navigate('Settings')}}
      ]
    )
    }
  }
  



  render() {

    return (
      <View
          style={styles.container}>
         <View style={styles.legendContainer}>
                <Grid>
                    <Row>
                        <Col size={5}></Col>
                        <Col size={20}>
                           <Icon size={25} name='ios-pizza'  color={this.state.foodColor}/>
                        </Col>
                        <Col size={75}>
                          <TouchableHighlight onPress={() => {this.showObject('food')}}>
                            <Text style={[styles.legend,{color: this.state.foodColor}]}> Food </Text>
                          </TouchableHighlight>
                        </Col>
                    </Row>
                    <Row>
                        <Col size={5}></Col>
                        <Col size={20}>
                            <Icon size={25} name='ios-school' color={this.state.schoolColor}/>
                        </Col>
                        <Col size={75}>
                            <TouchableHighlight onPress={() => {this.showObject('school')}}>
                              <Text style={[styles.legend, {color: this.state.schoolColor}]}> Schools </Text>
                            </TouchableHighlight>

                        </Col>
                    </Row>
                    <Row>
                        <Col size={5}></Col>                    
                        <Col size={20}>
                            <Icon size={25} name='ios-home'   color={this.state.shelterColor}/>
                        </Col>
                        <Col size={75}>
                           <TouchableHighlight onPress={() => {this.showObject('shelters')}}>
                            <Text style={[styles.legend,{color: this.state.shelterColor}]}> Shelters </Text>
                          </TouchableHighlight>
                        </Col>
                    </Row>
                    <Row>
                        <Col size={5}></Col>
                        <Col size={20}>
                           <Icon size={25} name='ios-person'  color={this.state.peerColor}/>
                        </Col>
                        <Col size={75}>
                            <TouchableHighlight onPress={() => {this.showObject('peer')}}>
                              <Text style={[styles.legend,{color: this.state.peerColor}]}> Peer </Text>
                          </TouchableHighlight>
                        </Col>
                    </Row>
                    <Row>
                        <Col size={5}></Col>
                        <Col size={20}>
                            <Icon size={25} name='ios-cog'   color={this.state.miscColor}/>
                        </Col>
                        <Col size={75}>
                            <TouchableHighlight onPress={() => {this.showObject('misc')}}>
                              <Text style={[styles.legend,{color: this.state.miscColor}]}> Misc </Text>
                            </TouchableHighlight>
                        </Col>
                    </Row>

                </Grid>
            </View>
          <TouchableOpacity style={styles.ghost} onPress={() => {this.checkLocation()}}> 
            <Icon type='ionicon' size={26} style={styles.eye} name={this.state.location ? "ios-eye" : "ios-eye-off"} color='white'/>
          </TouchableOpacity>
           <MapView
              style={styles.map}
              region={{ latitude: 37.2969326, 
              longitude: -121.9578387,
              latitudeDelta: 0.1,
              longitudeDelta: 0.1}}
            >

            <MapView.Marker coordinate={{latitude: 37.2969326, longitude: -121.9578387}}>
              <Icon type='ionicon' name='ios-radio-button-on' size={40} color={this.state.location ? Colors.accent : 'gray'} />
            </MapView.Marker>


              {this.state.showFood && global.foodBanks.map((item) => {
                return (
                  <MapPin
                    item={item} 
                    key={item.resource_id}
                    type='food'
                    navigation={this.props.navigation}
                  /> 
                );
              })}

              {this.state.showShelter && global.homeShelters.map((item) => {
                return (
                  <MapPin
                    item={item} 
                    key={item.resource_id}
                    type='shelter'
                    navigation={this.props.navigation}

                  /> 
                );
              })}

              {this.state.showSchool && global.education.map((item) => {
                return (
                  <MapPin
                    item={item} 
                    key={item.resource_id}
                    type='school'
                    navigation={this.props.navigation}
                  /> 
                );
              })}

              {this.state.showMisc && global.miscellaneous.map((item) => {
                return (
                  <MapPin
                    item={item} 
                    key={item.resource_id}
                    type='misc'
                    navigation={this.props.navigation}
                  /> 
                );
              })}

              {this.state.showPeer && global.areaPeople.map((item) => {
                return (
                  <MapPin
                    item={item} 
                    key={item.resource_id}
                    type='peer'
                    navigation={this.props.navigation}
                  /> 
                );
              })}
            </MapView>
        </View>
    );
  }

  toggleLocation = () => {
    this.setState({location: !this.state.location});
    this.forceUpdate();
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  ghost: {
    borderWidth:1,
   borderColor:'white',
   alignItems:'center',
   justifyContent:'center',
   width:40,
   height:40,
   backgroundColor: Colors.accent,
   borderRadius:20,
   padding: 3,
   overflow: 'hidden',
   position: 'absolute', 
   right: 20, 
   top: 20
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
  map: {
    width: deviceW, 
    height: deviceH,
    zIndex: -10
  },
   legendContainer: {
        borderColor: Colors.accent, 
        borderWidth: 2,
        zIndex: 10,
        width: 140,
        height: 140,
        backgroundColor: 'white',
        marginLeft: 20, 
        marginTop: 20,
        position: 'absolute',
        padding: 10,
        borderRadius: 30
    },
    legend: {
        fontSize: 14,
        marginTop: 2,
        marginLeft: 5,
        fontWeight: '400'
    },
    buttonContainer: {
        width: 150,
        height: 200,
        paddingTop: 30, 
        backgroundColor: Colors.accent
    },
    title: {
        fontSize: 20, 
        color: 'white',
        textAlign: 'center'
    },
    icon: {
        color: 'white',
        textAlign: 'center',
        fontSize: 100,
    }
});