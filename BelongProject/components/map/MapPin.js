import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, Text, View, Button, TouchableHighlight } from 'react-native';
import MapView from 'react-native-maps';
import Icon from 'react-native-vector-icons/Ionicons'
import { Colors } from '../../constants/Colors.js'

export default class MapPin extends Component {
	constructor(props) {
		super(props);
	}

	getIcon = (type) => {
		switch (type) {
			case 'food': 
				return 'ios-pizza'
			case 'school': 
				return 'ios-school'
			case 'shelter':
				return 'ios-home'
			case 'peer':
				return 'ios-person'
			case 'misc':
				return 'ios-cog'
			default:
				return 'ios-pin'
		}
	}

	doCallout = (type) => {
		name = ''
		switch(type) {
			case 'food': 
				name = 'ResourceDetails'
				break;
			case 'school': 
				name = 'ResourceDetails'
				break;
			case 'shelter':
				name = 'ResourceDetails'
				break;
			case 'peer':
				name = 'ProfilePage'
				break;
			case 'misc':
				name = 'ResourceDetails'
				break;
			default:
				name = 'MapHome'
				break;
		}
		item = this.props.item;
		if (type == 'peer') {
			index = 0
			for (i = 0; i < global.peers.length; i++) {
				if (global.peers[i].user_id == this.props.item.resource_id) {
					item = global.peers[i]
					break;
				}
			}
		}

		this.props.navigation.navigate(name, item)
	}

	render() {

		const coord = {
			latitude: this.props.item.lat,
			longitude: this.props.item.lon,
		};

		return (
			 <MapView.Marker
		      coordinate={coord} onCalloutPress={() => {this.doCallout(this.props.type)}}>
      			<Icon type='ionicon' name={this.getIcon(this.props.type)} size={40} color={Colors.accent} />
      			<MapView.Callout  style={styles.calloutParent}>
        			<View style={styles.callout}>
         				<Text numberOfLines={1}  style={styles.title}> {this.props.item.name.substring(0, 15) + " ... "} </Text>
          				<TouchableOpacity style={styles.submitContainer}> 
			              <View style={styles.submitOverlay} />
			              <Text style={styles.submit}> see more </Text>
			            </TouchableOpacity> 

        			</View>
      			</MapView.Callout>
    		</MapView.Marker>
		);
	}
};

const styles = StyleSheet.create({
  callout: {
    backgroundColor: "white", 
    flex: 1,
    borderRadius: 2,
    height: 40,
  },
  calloutParent: {
    flex: 1, 
    position: 'relative',
    marginBottom: 15, 
    marginRight: 12

  },
  label: {
    color: 'white',
    fontSize: 12,
  },
  title: {
    color: Colors.accent, 
    textAlign: 'center',
    fontSize: 15,
  },
  description: {
    textAlign: 'center', 
    fontSize: 20,
  },
  submitOverlay: {
    opacity: 0.6,
    backgroundColor: Colors.accent,
    position: 'absolute',
    borderRadius: 100,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  submitContainer: {
    backgroundColor: 'transparent', 
  },
  submit: {
    fontSize: 15, 
    textAlign: 'center',
    color: 'white',
    fontWeight: '300'
  },
});