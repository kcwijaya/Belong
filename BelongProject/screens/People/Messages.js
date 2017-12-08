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
import {GiftedChat} from 'react-native-gifted-chat'

export default class MessageScreen extends Component {
  constructor(){
    super();
  }

  state = {
    messages: []
  };

  componentWillMount = () => {
    this.setState({
       messages: [
        {
          _id: 1,
          text: 'So nice to meet you!',
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'React Native',
            avatar: 'https://facebook.github.io/react/img/logo_og.png',
          },
        },
      ],
    });
  }

  static navigationOptions = ({ navigation }) => ({
    header: null
  });

  onSend = (messages = []) => {
    this.setState((previousState) => ({
      messages: GiftedChat.append(previousState.messages, messages),
    }));
  }

  render() {
    return (
      <View style = {styles.container}>
       <Header>
        <Left>
          <Button transparent onPress={() => this.props.navigation.goBack()}>
            <Icon size={20} name="chevron-left" color={Colors.accent}/>
          </Button>
        </Left>
        <Body>
          <TouchableHighlight onPress={() => this.props.navigation.navigate("ProfilePage", this.props.navigation.state.params)}>
            <Title style={{fontWeight: '300'}} color={Colors.accent}>{this.props.navigation.state.params.name.split(' ')[0]}</Title>
          </TouchableHighlight>
        </Body>
        <Right></Right>
      </Header>
    
      <GiftedChat
        messages={this.state.messages}
        onSend={(messages) => this.onSend(messages)}
        user={{
          _id: 1,
        }}
      />
      </View>
    )
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});