import React, {Component} from "react";
import {
	StyleSheet,
	View, 
	Text, 
	Button,
	TouchableOpacity,
	Image,
} from "react-native";

import { Colors } from '../../constants/Colors.js'
import Icon from 'react-native-vector-icons/FontAwesome'
import {Dimensions} from 'react-native'
import { Col, Row, Grid } from "react-native-easy-grid";

const deviceW = Dimensions.get('window').width

export default class ResourceTitle extends Component {
	constructor() {
		super()
		this.state = {
			bookmarkColor: Colors.unselectedTab
		}
	}

	render() {
		console.log(global.bookmarks)
		bookmarked = false
		for (i = 0; i < global.bookmarks.length; i++) {
			if (this.props.info.name == global.bookmarks[i].name) {
				bookmarked = true
				break;
			}
		}

		console.log(bookmarked)
		if (bookmarked) {
			this.state.bookmarkColor = Colors.accent
		} else {
			this.state.bookmarkColor = Colors.unselectedTab
		}

		return (
		<Grid style={styles.container}>
          <Row> 
            <Col size={80}>
              <Text style={styles.title}>
                {this.props.name}
              </Text>
            </Col>
            <Col size={20}>
            	<TouchableOpacity onPress={() => {
            		global.functions.addBookmark(this.props.info);
            		this.props.update;
            		this.forceUpdate()
            	}}> 
               		<Icon size={25} style={[styles.bookmark, {backgroundColor: this.state.bookmarkColor}]} name="bookmark" color='white'/>
            	</TouchableOpacity>
            </Col>
          </Row>
        </Grid>
	    );
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		width: deviceW,
		marginTop: 3
	},
	title: {
		color: Colors.accent, 
		fontSize: 25,
		marginLeft: 10,
		marginTop: 5
	},
	bookmark: {
		borderWidth:1,
	       borderColor:'white',
	       alignItems:'center',
	       justifyContent:'center',
	       width:40,
	       height:40,
	       borderRadius:20,
	       padding: 7,
	       paddingLeft: 10,
	       overflow: 'hidden'
	}
});
