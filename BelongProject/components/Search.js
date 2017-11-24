import React, { Component } from 'react'
import {StyleSheet} from 'react-native'
import { Colors } from '../constants/Colors.js'
import { SearchBar } from 'react-native-elements'
import { Dimensions } from 'react-native'

const deviceW = Dimensions.get('window').width

export default class Search extends Component {
    render () {
        return (
           <SearchBar
                  placeholder='Search'
                  round
                  containerStyle={styles.searchBarContainer}
                  inputStyle={styles.searchBarInput}
                  placeholderTextColor={Colors.searchColor}
                  icon={{color:Colors.searchColor, name: 'search'}}
            />
        );
    }
}

const styles = StyleSheet.create({
  searchBarContainer: {
    backgroundColor: Colors.accent,
    borderWidth: 0,
    width: deviceW
  },
  searchBarInput: {
    backgroundColor: Colors.well
  },
});
