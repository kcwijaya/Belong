import React, {Component} from "react";
import {
	StyleSheet,
	View, 
	Text, 
	Button,
	TouchableHighlight,
	Image,
} from "react-native";

import { Colors } from '../../constants/Colors.js'
import Icon from 'react-native-vector-icons/FontAwesome'
import {Dimensions} from 'react-native'

const deviceW = Dimensions.get('window').width
const deviceH = Dimensions.get('window').height

export default class ResourceCard extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		var ResourceInfo = this.props.ResourceInfo;
		ResourceInfo.navigation = this.props.navigation;
		return (
			<View style={styles.container}>
				<TouchableHighlight onPress={() => this.props.navigation.navigate('ResourceDetails', ResourceInfo)}>
					<View style={styles.entryContainer}>
						<Image 
		    				source={ResourceInfo.img} 
		    				style={styles.image} 
		    			/>
		    			<View style={styles.caption}> 
			    			<Text style={styles.captionText}>
			    				{ResourceInfo.name}
			    			</Text>
		    			</View>
	    			</View>
			    </TouchableHighlight>
			</View>
	    );
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	caption: {
		backgroundColor: Colors.offwhite,
		width: deviceW/3,
		height: 40
	},
	captionText: {
		textAlign: 'center',
		color: 'gray',
		fontSize: 12,
		fontStyle: 'italic',
		marginTop: 5
	},
  	image: {
  		width: deviceW/3, 
  		height: deviceH/6
  	},
  	entryContainer: {
  		width: deviceW/3,
  	},

});
