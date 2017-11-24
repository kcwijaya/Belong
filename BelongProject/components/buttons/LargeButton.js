import React, { Component } from 'react';
import { View, TouchableHighlight, StyleSheet, Text, Platform } from 'react-native';
import { Colors } from '../../constants/Colors.js'
import Icon from 'react-native-vector-icons/FontAwesome'

export default class LargeButton extends Component {
    render () {
        return (
            <TouchableHighlight style={styles.container} onPress={()=>{}}>
                <View style={styles.buttonContainer}>
                    <Icon name={this.props.icon} style={styles.icon}/>
                    <Text style={styles.title}>{this.props.title}</Text>
                </View>
            </TouchableHighlight>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        shadowColor: Colors.unselectedTab,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 1,
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
