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
	render() {
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
            		this.forceUpdate()
            	}}> 
               		<Icon size={25} style={styles.bookmark} name="bookmark" color='white'/>
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
	       backgroundColor: Colors.accent,
	       borderRadius:20,
	       padding: 7,
	       paddingLeft: 10,
	       overflow: 'hidden'
	}
});
