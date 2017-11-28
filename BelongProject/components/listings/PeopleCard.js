import React, {Component} from "react";
import {
	StyleSheet,
	View, 
	TouchableHighlight,
	Image,
} from "react-native";
import { Col, Row, Grid } from "react-native-easy-grid";
import { Colors } from '../../constants/Colors.js'
import Icon from 'react-native-vector-icons/FontAwesome'
import {Dimensions} from 'react-native'
import { Container, Card, CardItem, Body, Content, Header, Left, Right, Title, Button, Text } from "native-base";

const deviceW = Dimensions.get('window').width


export default class PeopleCard extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<View style={styles.container}>
				<TouchableHighlight style={styles.entry} >
					<View style={styles.task}>
						<View style={styles.taskText} >
							<Grid>
								<Col size={25}> 
					    			<Image 
					    				source={this.props.PeopleInfo.img} 
					    				style={styles.profpic} 
					    			/>
								</Col>
								<Col size={75}>
				        			<Text 
				        				numberOfLines={1} 
				        				style={styles.title}>
				        			{this.props.PeopleInfo.name} 
				        			</Text>
								</Col>
							</Grid>
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
	profpic: {
	  	width: 40,
	 	height: 40,
	    borderRadius: 20,
	    backgroundColor: 'red'
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
		marginTop: 8,
	    marginRight: 30, 
	    color: 'black',
	    fontSize: 20,
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
    	flexDirection: 'row',
    	padding: 15
    },
	task: {
	    backgroundColor: 'white',
	    marginTop: 0, 
	    flexDirection: 'column',
	    width: deviceW,
  	},
  	chevron: {
  		alignSelf: 'center',
  		marginRight: 15,
  	},
});