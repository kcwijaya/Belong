import React, {Component} from "react";
import {
	StyleSheet,
	View, 
	Text, 
	Button,
	TouchableHighlight,
} from "react-native";
import { Colors } from '../../constants/Colors.js'
import Icon from 'react-native-vector-icons/FontAwesome'
import {Dimensions} from 'react-native'

const deviceW = Dimensions.get('window').width


export default class QACard extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<View style={styles.container}>
				<TouchableHighlight style={styles.entry} onPress={() => this.props.navigation.navigate("AnswerQuestion", this.props.QAInfo)}>
					<View style={styles.task}>
						<View style={styles.taskText}>
			            	<Text numberOfLines={1} style={styles.title}> {this.props.QAInfo.question} </Text>
			            	<Text style={styles.user}> Asked by: {this.props.QAInfo.user} </Text>
			            </View>
			        </View>
			    </TouchableHighlight>
		        <View> 
					<View style={styles.divide} />
				</View>
			</View>
	    );
	}
}

const styles = StyleSheet.create({
	user: {
		color: 'gray', 
		fontStyle: 'italic', 
		fontSize: 13,
		fontWeight: '400',
		textAlign: 'center',
		marginTop: 5,
	},
	container: {
		height: 75
	},
	buttonText: {
		textAlign: 'center',
		color: 'white'
	},
	divide: {
	    backgroundColor: '#F2F2F2', 
	    alignSelf: 'stretch', 
	    height: 4
  	},
  	entry: {
  		height: 75,
  		backgroundColor: 'white',
  		borderColor: '#F2F2F2',
  		borderWidth: 2,
  	},

	title: {
	    marginRight: 30, 
	    color: Colors.accent,
	    marginLeft: 15,
	    fontSize: 16,
	    fontWeight: '400',
	    textAlign: 'center',
	    marginTop: 10
    },
    taskText: {
    	flex: 4,
    },
	task: {
	    backgroundColor: 'white',
	    marginTop: 0, 
	    flexDirection: 'column',
	    width: deviceW
  	},
});
