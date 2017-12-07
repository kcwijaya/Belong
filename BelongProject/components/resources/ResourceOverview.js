import React, {Component} from "react";
import {
	StyleSheet,
	View, 
	Text, 
	TouchableHighlight,
	Image,
	Alert,
} from "react-native";

import { Col, Row, Grid } from "react-native-easy-grid";
import { Colors } from '../../constants/Colors.js'
import Icon from 'react-native-vector-icons/FontAwesome'
import {Dimensions} from 'react-native'
import CaptionedIcon from '../../components/buttons/CaptionedIcon.js'
import call from 'react-native-phone-call'
const deviceW = Dimensions.get('window').width

export default class ResourceOverview extends Component {
	constructor(props) {
		super(props);
	}

	triggerPhone = () => {
		// call({
		// 	number: this.props.phone, 
		// 	prompt: true
		// })

		Alert.alert(
		  'Call ' + this.props.phone + '?',
		  '',
		  [
		  	{text: 'No', onPress: () => console.log('No'), style: 'cancel'},
		    {text: 'Yes', onPress: () => console.log('Called number')},
		  ]
		)
	}


	triggerMap = () => {
		// call({
		// 	number: this.props.phone, 
		// 	prompt: true
		// })

		Alert.alert(
		  'Belong wants to open Google Maps',
		  '',
		  [
		  	{text: "Don't Allow", onPress: () => console.log('No'), style: 'cancel'},
		    {text: 'Allow', onPress: () => console.log('Opened map')},
		  ]
		)
	}

	render() {
		return (
		<Grid>
          <Row> 
            <Col width={33}>
              <CaptionedIcon 
              	icon='map-marker'
              	caption={this.props.address}
              	onPress={this.triggerMap}
              />
            </Col>
            <Col width={33}>
             <CaptionedIcon 
              	icon='clock-o'
              	caption={this.props.hours}
              	onPress={null}
              />
            </Col>
             <Col width={33}>
              <CaptionedIcon 
              	icon='phone'
              	caption={this.props.phone}
              	onPress={this.triggerPhone}
              />
            </Col>
          </Row>
        </Grid>
	    );
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	title: {
		color: Colors.accent, 
		fontSize: 20,
		fontWeight: '300'
	},
	bookmark: {
		borderRadius: 20, 
		backgroundColor: Colors.accent
	}
});
