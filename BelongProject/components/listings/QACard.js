import React, {Component} from "react";
import {
	StyleSheet,
	View, 
	Text, 
	Button,
	TouchableHighlight
} from "react-native";
import { Colors } from '../../constants/Colors.js'
import Icon from 'react-native-vector-icons/FontAwesome'
import {Dimensions} from 'react-native'

const deviceW = Dimensions.get('window').width


export default class QACard extends Component {
	constructor(props) {
		super(props);
	}

	// showDetails() {
 //    	this.props.navigator.push(Router.getRoute('details', {
 //    		taskInfo: this.props.taskInfo
 //    	}));
 //  	}
// onPress={this.showDetails.bind(this)}

	render() {
		return (
			<View style={styles.container}>
				<TouchableHighlight style={styles.entry} >
					<View style={styles.task}>
						<View style={styles.taskText}>
			            	<Text numberOfLines={1} style={styles.title}> {this.props.QAInfo.question} </Text>
				            <View style={styles.buttonGroup}>
								<TouchableHighlight style={styles.answerButton}>
					        		<Text style={styles.buttonText}> Answer </Text>
					        	</TouchableHighlight>
					        	<View style={{width: 10}} />
								<TouchableHighlight style={styles.bookmarkButton}>
						        	<Text style={styles.buttonText}> Bookmark </Text>
					        	</TouchableHighlight>
				        	</View>
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
	    textAlign: 'center'
    },
    creator: {
    	marginLeft: 15,
    	color: '#706C6C',
    	fontSize: 14,
    	marginTop: 5,
    	marginBottom: 5,
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
  	chevron: {
  		alignSelf: 'center',
  		marginRight: 15,
  	},
});
