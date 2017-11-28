import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
  StatusBar
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome'
import {Dimensions} from 'react-native'
import { SearchBar } from 'react-native-elements'
import ListingCarousel from '../../components/sliders/ListingCarousel.js'
import { Colors } from '../../constants/Colors.js';

const deviceW = Dimensions.get('window').width
const deviceH = Dimensions.get('window').height

const ENTRIES1 = [
    {
        title: 'Beautiful and dramatic Antelope Canyon',
        subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
        illustration: 'https://i.vimeocdn.com/portrait/58832_300x300.jpg'
    },
    {
        title: 'Earlier this morning, NYC',
        subtitle: 'Lorem ipsum dolor sit amet',
        illustration: 'https://i.vimeocdn.com/portrait/58832_300x300.jpg'
    },
    {
        title: 'White Pocket Sunset',
        subtitle: 'Lorem ipsum dolor sit amet et nuncat ',
        illustration: 'https://i.vimeocdn.com/portrait/58832_300x300.jpg'
    },
    {
        title: 'Acrocorinth, Greece',
        subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
        illustration: 'https://i.vimeocdn.com/portrait/58832_300x300.jpg'
    },
    {
        title: 'The lone tree, majestic landscape of New Zealand',
        subtitle: 'Lorem ipsum dolor sit amet',
        illustration: 'https://i.vimeocdn.com/portrait/58832_300x300.jpg'
    },
    {
        title: 'Middle Earth, Germany',
        subtitle: 'Lorem ipsum dolor sit amet',
        illustration: 'https://i.vimeocdn.com/portrait/58832_300x300.jpg'
    }
];

const ENTRIES2 = [
    {
        title: 'Favourites landscapes',
        subtitle: 'Lorem ipsum dolor sit amet',
        illustration: 'https://i.vimeocdn.com/portrait/58832_300x300.jpg'
    },
    {
        title: 'Favourites landscapes',
        subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
        illustration: 'https://i.vimeocdn.com/portrait/58832_300x300.jpg'
    },
    {
        title: 'Favourites landscapes',
        subtitle: 'Lorem ipsum dolor sit amet et nuncat',
        illustration: 'https://i.vimeocdn.com/portrait/58832_300x300.jpg'
    },
    {
        title: 'Favourites landscapes',
        subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
        illustration: 'https://i.vimeocdn.com/portrait/58832_300x300.jpg'
    },
    {
        title: 'Favourites landscapes',
        subtitle: 'Lorem ipsum dolor sit amet',
        illustration: 'https://i.vimeocdn.com/portrait/58832_300x300.jpg'
    },
    {
        title: 'Favourites landscapes',
        subtitle: 'Lorem ipsum dolor sit amet et nuncat',
        illustration: 'https://i.vimeocdn.com/portrait/58832_300x300.jpg'
    }
];

export default class ResourcesAll extends Component {
    render () {
         return (
            <View style={styles.container}>
                <SearchBar
                  placeholder='Search'
                  round
                  containerStyle={styles.searchBarContainer}
                  inputStyle={styles.searchBarInput}
                  placeholderTextColor={Colors.searchColor}
                  icon={{color:Colors.searchColor, name: 'search'}}
                />
                <StatusBar
                  translucent={true}
                  backgroundColor={Colors.accent}
                  tintColorSearch={Colors.accent}
                  barStyle={'light-content'}
                />
                { this.gradient }
                <ScrollView
                  style={styles.scrollview}
                  contentContainerStyle={styles.scrollviewContentContainer}
                  indicatorStyle={'white'}
                  scrollEventThrottle={200}
                  directionalLockEnabled={true}
                >
                  <ListingCarousel
                    title='Food Banks'
                    subtitle='Subtitle'
                    data={ENTRIES1}
                  />
                   <ListingCarousel
                    title='Home Shelters'
                    subtitle='Subtitle'
                    data={ENTRIES1}
                  />
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
  scrollview: {
      flex: 1,
      paddingTop: 50
  },
  scrollviewContentContainer: {
    paddingBottom: 50
  },
  searchBarContainer: {
    backgroundColor: Colors.accent,
    borderWidth: 0,
    width: deviceW
  },
  searchBarInput: {
    backgroundColor: Colors.well
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    width: deviceW,
    height: deviceH
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});