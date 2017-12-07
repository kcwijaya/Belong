import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  Alert,
  Image,
  ScrollView
} from 'react-native';
import { Container, Card, CardItem, Body, Content, Header, Left,Button, Right, Title, Text } from "native-base";
import Icon from 'react-native-vector-icons/FontAwesome'
import {Dimensions} from 'react-native'
import { Col, Row, Grid } from "react-native-easy-grid";
import { Colors } from '../../constants/Colors.js'
import Hr from '../../components/hr.js'
import ResourceTitle from '../../components/resources/ResourceTitle.js'
import ResourceOverview from '../../components/resources/ResourceOverview.js'
const deviceW = Dimensions.get('window').width
const deviceH = Dimensions.get('window').height

const imageSource = require('../../imgs/placeholders/resource.jpg');
   
export default class ResourceDetails extends Component {
  static navigationOptions = ({ navigation }) => ({
    header: null
  });

  render() {
    return (
      <View style={styles.container}> 
        <Icon onPress={() => {this.props.navigation.goBack()}} size={30} name="chevron-left" style={styles.back} color={Colors.accent}/>
      <Image source={this.props.navigation.state.params.img} style={styles.image}/>
      <ScrollView>
       <ResourceTitle 
          name={this.props.navigation.state.params.name}
        />
        <Hr />
        <ResourceOverview
          address={this.props.navigation.state.params.address}
          hours={this.props.navigation.state.params.hours}
          phone={this.props.navigation.state.params.phone}
        />
      <Hr />
      <View style={styles.aboutContainer}> 
        <Text style={styles.title}>
          About
        </Text>
        <Text style={styles.aboutText}>
        {this.props.navigation.state.params.about}
        </Text>
      </View> 
      </ScrollView>
    </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  aboutContainer: {
    padding: 15,
  },
  title: {
    color: Colors.accent, 
    fontSize: 25,
    fontWeight: '400'
  },
  aboutText: {
    fontSize: 15,
    fontWeight: '300'
  },
  image: {
    width: deviceW, 
    height: 150,
    zIndex: -1
  },
  back: {
    position: 'absolute', 
    marginTop: 20, 
    marginLeft: 10,
    backgroundColor: 'transparent'
  }
});