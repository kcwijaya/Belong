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

export default class Resources extends Component {
  static navigationOptions = ({ navigation }) => ({
    header: null
  });

  render() {
    return (
      <View style={styles.container}>
      <Search/>
      <Grid style={styles.grid}>
        <Row>
          <Col>
            <LargeButton
              title="All"
              icon="list"
              onPress={() => this.props.navigation.navigate("ResourcesAll")}
            />
          </Col>
          <Col>
           <LargeButton
              title="Bookmarks"
              icon="bookmark"
              onPress={() => this.props.navigation.navigate("ResourcesBookmarks")}
            />
          </Col>
        </Row>
      </Grid>
     </View>
    )
  }
}

const styles = StyleSheet.create({
  grid: {
    marginLeft: 30,
    marginTop: deviceH/4,
  },
  container: {
    flex: 1,
  
  },
});