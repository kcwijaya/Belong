import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
import {Dimensions} from 'react-native'
import { Col, Row, Grid } from "react-native-easy-grid";
import LargeButton from '../../components/buttons/LargeButton.js'
import Search from '../../components/Search.js'
import { Colors } from '../../constants/Colors.js'
const deviceW = Dimensions.get('window').width
const basePx = 375

function px2dp(px) {
  return px *  deviceW / basePx
}

export default class People extends Component {
  render() {
    return (
      <View style={styles.container}>
      <Search/>
      <Grid style={styles.grid}>
        <Col>
          <Row>
            <LargeButton
              title="Peers"
              icon="user"
            />
          </Row>
          <Row>
           <LargeButton
              title="Mentors"
              icon="graduation-cap"
            />
          </Row>
        </Col>

        <Col>
          <Row>
            <LargeButton
              title="Groups"
              icon="users"
            />
          </Row>
          <Row>
           <LargeButton
              title="All"
              icon="list"
            />
          </Row>
        </Col>
      </Grid>
     </View>
    )
  }
}

const styles = StyleSheet.create({
  grid: {
    marginLeft: 30,
    marginTop: 50,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
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