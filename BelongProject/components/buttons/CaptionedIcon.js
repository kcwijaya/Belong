import React, { Component } from 'react';
import { View, TouchableHighlight, StyleSheet, Text, Platform } from 'react-native';
import { Colors } from '../../constants/Colors.js'
import Icon from 'react-native-vector-icons/FontAwesome'

export default class CaptionedIcon extends Component {
    render () {
        return (
            <TouchableHighlight style={styles.container} onPress={this.props.onPress}>
                <View>
                <Icon name={this.props.icon} style={styles.icon} color={Colors.accent}/>
                <Text style={styles.title}>{this.props.caption}</Text>
                </View>
            </TouchableHighlight>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 10
    },
    title: {
        fontSize: 15, 
        color: 'gray',
        textAlign: 'center',
        fontStyle: 'italic'
    },
    icon: {
        textAlign: 'center',
        fontSize: 50,
    }

});
