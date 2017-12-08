import React, { Component } from 'react';
import MapView from 'react-native-maps';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
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
      foodOpacity: 1,
      schoolOpacity: 1, 
      shelterOpacity: 1,
      showFood: true, 
      showSchool: true, 
      showShelter: true
    };
    this.showObject = this.showObject.bind(this);
  }

  showObject = (name) => {
    console.log(name)
    console.log(this.state.showFood)
    console.log(this.state.showSchool)
    console.log(this.state.showShelter)
    console.log(this.state.foodOpacity)
    console.log(this.state.schoolOpacity)
    console.log(this.state.shelterOpacity)
    if (name == 'food') {
      if (this.state.showFood) {
        this.state.foodOpacity = 0.5;
      } else 
      {
        this.state.foodOpacity = 1;
      }
      this.state.showFood = !this.state.showFood
      console.log(this.state.foodOpacity)
    }

    if (name == 'shelters') {
      if (this.state.showShelter) {
        this.state.shelterOpacity = 0.5;
      } else 
      {
        this.state.shelterOpacity = 1;
      }
      this.state.showShelters = !this.state.showShelters
    }

    if (name == 'school') {
      if (this.state.showShelter) {
        this.state.schoolOpacity = 0.5;
      } else 
      {
        this.state.schoolOpacity = 1;
      }
      this.state.showSchool = !this.state.showSchool
    }

    this.forceUpdate()
  }

  static navigationOptions = ({ navigation }) => ({
    header: null
  });

  render() {

    return (
      <ScrollView
          style={styles.container}>
         <View style={styles.legendContainer}>
                <Grid>
                    <Row>
                        <Col size={5}></Col>
                        <Col size={20}>
                           <Icon size={20} name='ios-pizza'  color={Colors.accent}/>
                        </Col>
                        <Col size={75}>
                          <TouchableHighlight onPress={() => {this.showObject('food')}}>
                            <Text style={[styles.legend,{opacity: this.state.foodOpacity}]}> Food </Text>
                          </TouchableHighlight>
                        </Col>
                    </Row>
                    <Row>
                        <Col size={5}></Col>
                        <Col size={20}>
                            <Icon size={20} name='ios-school' color={Colors.accent}/>
                        </Col>
                        <Col size={75}>
                            <TouchableHighlight onPress={() => {this.showObject('school')}}>
                              <Text style={[styles.legend, {opacity: this.state.schoolOpacity}]}> Schools </Text>
                            </TouchableHighlight>

                        </Col>
                    </Row>
                    <Row>
                        <Col size={5}></Col>                    
                        <Col size={20}>
                            <Icon size={20} name='ios-home'   color={Colors.accent}/>
                        </Col>
                        <Col size={75}>
                           <TouchableHighlight onPress={() => {this.showObject('shelters')}}>
                            <Text style={[styles.legend,{opacity: this.state.shelterOpacity}]}> Shelters </Text>
                          </TouchableHighlight>
                        </Col>
                    </Row>
                </Grid>
            </View>
          <TouchableOpacity style={styles.ghost} onPress={() => this.toggleLocation()}> 
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
              <Icon type='ionicon' name='ios-navigate' size={40} color={Colors.accent} />
            </MapView.Marker>
            </MapView>
        </ScrollView>
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
        width: 110,
        height: 110,
        backgroundColor: 'white',
        marginLeft: 20, 
        marginTop: 20,
        position: 'absolute',
        padding: 10,
        borderRadius: 30
    },
    legend: {
        fontSize: 12,
        marginTop: 2,
        marginLeft: 5,
        fontWeight: '300'
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