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


export default class MessageCard extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		var payload = this.props.MessageInfo;
		payload.navigation = this.props.navigation;
		return (
			<View style={styles.container}>
				<TouchableHighlight style={styles.entry} onPress={() => {this.props.navigation.navigate('MessageScreen', payload)}} >
					<View style={styles.task}>
						<View style={styles.taskText} >
							<Grid>
								<Col size={25}> 
					    			<Image 
					    				source={this.props.MessageInfo.img} 
					    				style={styles.profpic} 
					    			/>
								</Col>
								<Col size={75}>
				        			<Text 
				        				numberOfLines={1} 
				        				style={styles.title}>
				        			{this.props.MessageInfo.name} 
				        			</Text>
				        			<Text 
				        				numberOfLines={1} 
				        				style={styles.message}>
				        			{this.props.MessageInfo.message} 
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
	title: {
		marginTop: 3,
	    marginRight: 30, 
	    color: 'black',
	    fontSize: 20,
	    fontFamily: 'HelveticaNeue-Thin'
    },
    message: {
    	fontStyle: 'italic',
    	fontSize: 15,
    	color: 'gray',
    	fontFamily: 'HelveticaNeue-Thin'
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
});
