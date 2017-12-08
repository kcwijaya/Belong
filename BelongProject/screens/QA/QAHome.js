import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
import {Dimensions} from 'react-native'
import { Col, Row, Grid } from "react-native-easy-grid";
import LargeButton from '../../components/buttons/LargeButton.js'
import Search from '../../components/Search.js'
import { Colors } from '../../constants/Colors.js'
import QAListingView from '../../components/listings/QAListingView.js'
import PlusIcon from '../../components/buttons/PlusIcon.js'


const deviceW = Dimensions.get('window').width
const basePx = 375

function px2dp(px) {
  return px *  deviceW / basePx
}


export default class QAHome extends Component {
  constructor() {
    super()
    this.state = {
      data: global.questions
    }
  }
  static navigationOptions = ({ navigation }) => ({
    header: null

  });



  changeData = (results) => {
    console.log("new DAT")
    console.log(results)
    this.state.data = results
    this.forceUpdate()
  }

  onBack = () => {
    this.state.data = global.questions
    this.forceUpdate()
  }

  render() {
    return (
      <View style={styles.container}>
        <PlusIcon style={{bottom:20}} onPress={() => {this.props.navigation.navigate("CreateQuestion")}}/>
        <Search handleResults={this.changeData}   placeholder="Search for question" data={global.questions} onBack={this.onBack}/>
        <QAListingView
          questions={this.state.data}
          navigation={this.props.navigation}
        />
     </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1
  },
  plus: {
    position: 'absolute', 
    zIndex: 1, 
    backgroundColor: 'transparent',
    bottom: 60, 
    right: 20
  }
});