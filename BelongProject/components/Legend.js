import React, { Component } from 'react';
import { View, StyleSheet, Text, Platform } from 'react-native';
import { Colors } from '../constants/Colors.js'
import Icon from 'react-native-vector-icons/Ionicons'
import { Col, Row, Grid } from "react-native-easy-grid";

export default class Legend extends Component {
    render () {
        return (
            <View style={styles.container}>
                <Grid>
                    <Row>
                        <Col size={5}></Col>
                        <Col size={20}>
                           <Icon size={20} name='ios-pizza'  color={Colors.accent}/>
                        </Col>
                        <Col size={75}>
                            <Text style={styles.legend}> Food </Text>
                        </Col>
                    </Row>
                    <Row>
                        <Col size={5}></Col>
                        <Col size={20}>
                            <Icon size={20} name='ios-school'   color={Colors.accent}/>
                        </Col>
                        <Col size={75}>
                            <Text style={styles.legend}> Schools </Text>
                        </Col>
                    </Row>
                    <Row>
                        <Col size={5}></Col>                    
                        <Col size={20}>
                            <Icon size={20} name='ios-home'   color={Colors.accent}/>
                        </Col>
                        <Col size={75}>
                            <Text style={styles.legend}> Shelters </Text>
                        </Col>
                    </Row>
                </Grid>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        borderColor: Colors.accent, 
        borderWidth: 2,
        zIndex: 10,
        width: 110,
        height: 110,
        backgroundColor: 'white',
        marginLeft: 20, 
        marginTop: 20,
        position: 'absolute',
        padding: 10,
        borderRadius: 30
    },
    legend: {
        fontSize: 12,
        marginTop: 2,
        marginLeft: 5,
        fontFamily: 'HelveticaNeue-Thin'
    },
    buttonContainer: {
        width: 150,
        height: 200,
        paddingTop: 30, 
        backgroundColor: Colors.accent
    },
    title: {
        fontSize: 20, 
        color: 'white',
        textAlign: 'center'
    },
    icon: {
        color: 'white',
        textAlign: 'center',
        fontSize: 100,
    }

});
