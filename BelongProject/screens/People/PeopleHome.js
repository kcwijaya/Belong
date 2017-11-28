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
const deviceH = Dimensions.get('window').height;

export default class People extends Component {
  static navigationOptions = ({ navigation }) => ({
    header: null
  });

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
              onPress={() => this.props.navigation.navigate("Peers")}
            />
          </Row>
          <Row>
           <LargeButton
              title="Mentors"
              icon="graduation-cap"
              onPress={() => this.props.navigation.navigate("Mentors")}
            />
          </Row>
        </Col>

        <Col>
          <Row>
            <LargeButton
              title="Groups"
              icon="users"
              onPress={() => this.props.navigation.navigate("Groups")}
            />
          </Row>
          <Row>
           <LargeButton
              title="All"
              icon="list"
              onPress={() => this.props.navigation.navigate("All")}
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
  
  },

});