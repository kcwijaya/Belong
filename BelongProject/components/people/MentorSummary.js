import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

import { Col, Row, Grid } from "react-native-easy-grid";
import { Colors } from '../../constants/Colors.js'
import Icon from 'react-native-vector-icons/Ionicons'
import {Dimensions} from 'react-native'

const deviceW = Dimensions.get('window').width
const deviceH = Dimensions.get('window').height

export default class MentorSummary extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View>
             <View style={styles.listing}> 
              <Icon size={15}  style={{marginTop: 5}} color={Colors.accent} name='ios-school-outline'/>
              <Text style={styles.text}> {this.props.school ? this.props.school : 'Goes to unknown school'} </Text>
            </View>   
              
            <View style={styles.listing}> 
              <Icon size={15} style={{marginTop: 5}} color={Colors.accent} name='ios-time-outline'/>
              <Text style={styles.text}> {this.props.time ? 'Member since ' + this.props.time : 'Member since unknown'} </Text>
            </View>   
            <View style={styles.listing}> 
              <Icon size={15} style={{marginTop: 5}} color={Colors.accent} name='ios-clipboard-outline'/>
              <Text style={styles.text}> {this.props.specialties ? 'Specializes in ' + this.props.specialties : 'Specializes in nothing'} </Text>
            </View>
              
            <View style={styles.listing}> 
              <Icon size={15}  style={{marginTop: 5}} color={Colors.accent} name='ios-chatboxes-outline'/>
              <Text style={styles.text}> {this.props.about ? this.props.about : 'No bio available'} </Text>
            </View>   
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    flexDirection: 'row', 
    justifyContent: 'center',
    marginTop: 10,
    marginLeft: 18
  },
  listing: {
    flexDirection: 'row', 
    width: deviceW,
    marginBottom: 10,
    marginLeft: 30
  },
  centered: {
    flexDirection: 'row', 
    justifyContent: 'center'
  },
  text: {
    fontSize: 18,
    marginLeft: 5,
    fontWeight: '300',
    color: 'gray'
  }
});