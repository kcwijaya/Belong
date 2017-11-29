import React, {Component} from "react";
import {
	StyleSheet,
	View, 
	Text, 
	Button,
	TouchableHighlight,
	Image,
} from "react-native";

import {Dimensions} from 'react-native'

const deviceW = Dimensions.get('window').width

export default class Hr extends Component {
	render() {
		return (
			<View style={styles.container} />
	    );
	}
}

const styles = StyleSheet.create({
	container: {
		width: deviceW, 
		height: 1, 
		backgroundColor: 'gray',
		marginTop: 10, 
		marginBottom: 10
	},
});
