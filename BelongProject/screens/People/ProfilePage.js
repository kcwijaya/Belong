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
export default class ProfilePage extends Component {
  constructor(){
    super();
  }

  static navigationOptions = ({ navigation }) => ({
    header: null
  });

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
          <Title color={Colors.accent}>{this.props.navigation.state.params.name.split(' ')[0]}</Title>
        </Body>
        <Right></Right>
      </Header>
    
      <ScrollView>

      <ProfilePicture 
        source={this.props.navigation.state.params.img}
      />

      {!this.props.navigation.state.params.is_mentor ? 
      <PeerSummary
        location={this.props.navigation.state.params.location}
        about={this.props.navigation.state.params.about}
      /> 
      :
      <MentorSummary
        location={this.props.navigation.state.params.location}
        about={this.props.navigation.state.params.about}
        specialties={this.props.navigation.state.params.specialties}
        time={this.props.navigation.state.params.time}
      /> 

      }

      { !this.props.navigation.state.params.is_saved ? 
       <View style={styles.buttonGroup}>
        <TouchableHighlight style={styles.answerButton} onPress={() => {this.props.navigation.navigate("Messages", payload)}}>
              <Text style={styles.buttonText}> Message </Text>
            </TouchableHighlight>
            <View style={{width: 10}} />
        <TouchableHighlight style={styles.addButton}>
              <Text style={styles.buttonText}> Add Contact </Text>
            </TouchableHighlight>
          </View>
      :
      <View style={styles.buttonGroup}>
        <TouchableHighlight style={styles.answerButton}>
              <Text style={styles.buttonText}> Message </Text>
            </TouchableHighlight>
            <View style={{width: 10}} />
        <TouchableHighlight style={styles.deleteButton}>
              <Text style={styles.buttonText}> Delete Contact </Text>
            </TouchableHighlight>
      </View>
    }
    </ScrollView>
      </View>
    )
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  buttonText: {
    textAlign: 'center',
    color: 'white'
  },
  answerButton: {
      backgroundColor:Colors.message,
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
    backgroundColor: Colors.pressed,
    borderRadius:10,
    borderWidth: 2,
    borderColor: 'transparent',
    width: 140,
    height: 40, 
    paddingBottom: 5,
    paddingTop: 6,
    overflow: 'hidden'
  },
  addButton: {
    backgroundColor: Colors.food,
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
      marginTop: 40
    },
});