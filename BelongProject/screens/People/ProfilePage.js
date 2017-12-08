import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  Alert,
  TouchableHighlight,
  ScrollView,
} from 'react-native';
import {Header, Body, Left, Right, Title, Button, Text} from "native-base";
import Icon from 'react-native-vector-icons/FontAwesome'
import { Col, Row, Grid } from "react-native-easy-grid";
import { Colors } from '../../constants/Colors.js'
import ProfilePicture from '../../components/people/ProfilePicture.js'
import PeerSummary from '../../components/people/PeerSummary.js'
import MentorSummary from '../../components/people/MentorSummary.js'
import {Dimensions} from 'react-native'
import ActionButtons from '../../components/buttons/ActionButtons.js'
const deviceW = Dimensions.get('window').width
const deviceH = Dimensions.get('window').height;


export default class ProfilePage extends Component {
  constructor(){
    super();
  }

  static navigationOptions = ({ navigation }) => ({
    header: null
  });

  isSaved = () => {
    for (var i = 0; i < global.peers.length; i++) {
      if (global.peers[i].user_id == this.props.navigation.state.params.user_id) {
        return true
      }
    }
    return false
  }

  render() {
    var payload = this.props.navigation.state.params;
    payload.navigation = this.props.navigation;

    return (
      <View style = {styles.container}>
       <Header>
        <Left>
          <Button transparent onPress={() => this.props.navigation.goBack()}>
            <Icon size={20} name="chevron-left" color={Colors.accent}/>
          </Button>
        </Left>
        <Body>
          <Title style={{fontWeight: '300'}} color={Colors.accent}>{this.props.navigation.state.params.name.split(' ')[0]}</Title>
        </Body>
        <Right></Right>
      </Header>
    
      <ScrollView style={styles.ccontainer}> 
        <ProfilePicture source={this.props.navigation.state.params.img} />
        <View style={styles.nameContainer}>
        <Text style={styles.name}> {this.props.navigation.state.params.name.split(' ')[0]} </Text>
        <MentorSummary
        location={this.props.navigation.state.params.location}
        about={this.props.navigation.state.params.about}
        specialties={this.props.navigation.state.params.specialties}
        time={this.props.navigation.state.params.time}
         /> 
        <ActionButtons
          profile={this.props.navigation.state.params}
          saved={this.isSaved}
          navigation={this.props.navigation}
         /> 
        </View>
      </ScrollView> 
      </View>
    )
  }

}

const styles = StyleSheet.create({
  name: {
    letterSpacing: 4,
    fontWeight: 'bold',
    marginLeft: 10,
    fontSize: 25, 
    color: Colors.unselectedTab,
  },
  nameContainer: {
    top: 320, 
    left: 40
  },
  ccontainer: {
    flex: 1,
    height: deviceH, 
    width: deviceW
  },
  opacityOverlay: {
    opacity: 0.7,
    backgroundColor: Colors.offwhite,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  overlay: {
    backgroundColor: 'white', 
    position: 'absolute', 
    top: 80, 
    left: 70, 
    width: 250, 
    height: 400,
    borderWidth: 1,
    borderRadius: 2,
    borderColor: Colors.unselectedTop,
    borderBottomWidth: 0,
    shadowColor: Colors.unselectedTab,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 1,
    elevation: 1,
  },
  container: {
    flex: 1,
      // backgroundColor: '#FFFCFC',
    backgroundColor: 'white'
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
    fontWeight: '300'
  },
  answerButton: {
      backgroundColor:Colors.buttongen,
      borderRadius:10,
      borderWidth: 2,
      borderColor: 'transparent',
      width: 140,
      height: 40,
      paddingBottom: 5,
      paddingTop: 6,
      overflow: 'hidden'

  },
  deleteButton: {
    backgroundColor: Colors.buttongen,
    borderRadius:10,
    borderWidth: 2,
    borderColor: 'transparent',
    width: 140,
    height: 40, 
    paddingBottom: 5,
    paddingTop: 6,
    overflow: 'hidden'
  },
    reportButton: {
    backgroundColor: Colors.buttongen,
    borderRadius:10,
    borderWidth: 2,
    borderColor: 'transparent',
    width: 290,
    height: 40, 
    paddingBottom: 5,
    paddingTop: 6,
    overflow: 'hidden',
    marginTop: 10
  },
  addButton: {
    backgroundColor: Colors.buttongen,
    borderRadius:10,
    borderWidth: 2,
    borderColor: 'transparent',
    width: 140,
    height: 40, 
    paddingBottom: 5,
    paddingTop: 6,
    overflow: 'hidden'
  },
    buttonGroup: {
      flexDirection: 'row', 
      flex: 1,
      justifyContent: 'center',
      marginTop: 20
    },
});