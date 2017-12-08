import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';

import { Col, Row, Grid } from "react-native-easy-grid";
import { Colors } from '../../constants/Colors.js'
import Icon from 'react-native-vector-icons/Ionicons'
import {Dimensions} from 'react-native'
const deviceW = Dimensions.get('window').width
const deviceH = Dimensions.get('window').height

export default class MentorSummary extends Component {

  constructor() {
    super()
    this.state = {
      saved: false
    }
  }

  isSaved = () => {
    for (i = 0; i < global.peers.length; i++) {
      if (global.peers[i].user_id == this.props.profile.user_id) {
        return true
      }
    }
    return false
  }

  handlePeer = () => {
    if (!this.isSaved()) {
      global.functions.addPeer(this.props.profile)
      this.state.saved = true
    } else {
       global.functions.removePeer(this.props.profile.user_id)
       this.state.saved = false
    }
    this.forceUpdate()
  }

  getName =  () => {
    if (!this.isSaved()) {
      return 'ios-add-circle-outline'
    } else {
       return 'ios-remove-circle-outline'
    }

  }
  render() {
    return (
      <View style={styles.container}>
       <Grid> 
        <Row> 
          <Col> 
            <TouchableOpacity onPress={() => this.props.navigation.navigate('MessageScreen', this.props.navigation.state.params)}>
              <Icon size={40} color={Colors.accent} name='ios-chatbubbles-outline'/>
            </TouchableOpacity> 
          </Col> 

          <Col> 
              <TouchableOpacity onPress={() => {this.handlePeer()}}>
                <Icon size={40} color={Colors.accent} name={this.getName()}/>
              </TouchableOpacity> 
          </Col> 
        </Row> 
       </Grid> 
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
    marginLeft: 210,
    width: 130
  },

});