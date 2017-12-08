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


export default class AnswerCard extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<View style={styles.container}>
				<TouchableHighlight style={styles.entry} >
					<View style={styles.task}>
						<TouchableHighlight onPress={() => { if (this.props.AnswerInfo.answer != 'Be the first to comment!') { this.props.navigation.navigate("ProfilePage", {img: require('../../imgs/placeholders/user.jpg'), name: this.props.AnswerInfo.user})}}}>
							<View  style={styles.taskText}>
			            		<Text numberOfLines={1} style={styles.title}> {this.props.AnswerInfo.user} </Text>
				           	<Text style={styles.answer}> {this.props.AnswerInfo.answer} </Text>
			            	</View>
			            </TouchableHighlight>
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
	container: {
		height: 75
	},
	buttonText: {
		textAlign: 'center',
		color: 'white'
	},
	answerButton: {
	    backgroundColor:Colors.answer,
	    borderRadius:10,
	    borderWidth: 2,
	    borderColor: '#fff',
	    width: 120,
	    height: 30,
	    paddingBottom: 14,
	    paddingTop: 4,
	    overflow: 'hidden'
	},
	bookmarkButton: {
		backgroundColor: Colors.accent,
		borderRadius:10,
	    borderWidth: 2,
	    borderColor: '#fff',
	    width: 120,
	    height: 30, 
		paddingBottom: 14,
		paddingTop: 4,
		overflow: 'hidden'
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
  		borderWidth: 2
  	},
  	buttonGroup: {
  		flexDirection: 'row', 
  		flex: 1,
  		justifyContent: 'center',
  		marginTop: 10
  	},
	title: {
		marginTop: 5,
	    marginRight: 30, 
	    color: 'black',
	    marginLeft: 15,
	    fontSize: 16,
	    color: Colors.accent,
	    fontWeight: '400'
    },

    taskText: {
    	flex: 4,
    },
    answer: {
		marginTop: 5,
	    marginRight: 30, 
	    color: 'black',
	    marginLeft: 15,
	    fontSize: 14,
	    fontWeight: '300'
    },
	task: {
	    backgroundColor: 'white',
	    marginTop: 0, 
	    flexDirection: 'column',
	    width: deviceW
  	},
});
