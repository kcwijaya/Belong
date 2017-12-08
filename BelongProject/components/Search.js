import React, { Component } from 'react'
import {StyleSheet} from 'react-native'
import { Colors } from '../constants/Colors.js'
// import { SearchBar } from 'react-native-elements'
import { Dimensions } from 'react-native'
import SearchBar from 'react-native-searchbar'
const deviceW = Dimensions.get('window').width

export default class Search extends Component {
    render () {
        return (
           <SearchBar
              ref={(ref) => this.searchBar = ref}
              showOnLoad
              data={this.props.data}
              hideBack={false}
              handleResults={this.props.handleResults}
              textColor={Colors.accent}
              placeholder={this.props.placeholder ? this.props.placeholder: "Search"}
              placeholderTextColor={Colors.accent}    
              onBack={this.props.onBack}     
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
