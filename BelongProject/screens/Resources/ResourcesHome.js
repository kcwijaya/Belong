import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
  StatusBar
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import TabNavigator from 'react-native-tab-navigator';
import Icon from 'react-native-vector-icons/FontAwesome'
import {Dimensions} from 'react-native'
import sliderstyle from '../../components/sliders/SliderStyle.js';
import {colors, itemWidth, sliderWidth} from '../../components/sliders/SliderStyle.js';
import SliderEntry from '../../components/sliders/SliderEntry.js';
import Carousel, { Pagination } from 'react-native-snap-carousel';

const SLIDER_1_FIRST_ITEM = 1

const deviceW = Dimensions.get('window').width
const deviceH = Dimensions.get('window').height

const basePx = 375

function px2dp(px) {
  return px *  deviceW / basePx
}

const ENTRIES1 = [
    {
        title: 'Beautiful and dramatic Antelope Canyon',
        subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
        illustration: 'http://i.imgur.com/UYiroysl.jpg'
    },
    {
        title: 'Earlier this morning, NYC',
        subtitle: 'Lorem ipsum dolor sit amet',
        illustration: 'http://i.imgur.com/UPrs1EWl.jpg'
    },
    {
        title: 'White Pocket Sunset',
        subtitle: 'Lorem ipsum dolor sit amet et nuncat ',
        illustration: 'http://i.imgur.com/MABUbpDl.jpg'
    },
    {
        title: 'Acrocorinth, Greece',
        subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
        illustration: 'http://i.imgur.com/KZsmUi2l.jpg'
    },
    {
        title: 'The lone tree, majestic landscape of New Zealand',
        subtitle: 'Lorem ipsum dolor sit amet',
        illustration: 'http://i.imgur.com/2nCt3Sbl.jpg'
    },
    {
        title: 'Middle Earth, Germany',
        subtitle: 'Lorem ipsum dolor sit amet',
        illustration: 'http://i.imgur.com/lceHsT6l.jpg'
    }
];

const ENTRIES2 = [
    {
        title: 'Favourites landscapes',
        subtitle: 'Lorem ipsum dolor sit amet',
        illustration: 'http://i.imgur.com/SsJmZ9jl.jpg'
    },
    {
        title: 'Favourites landscapes',
        subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
        illustration: 'http://i.imgur.com/5tj6S7Ol.jpg'
    },
    {
        title: 'Favourites landscapes',
        subtitle: 'Lorem ipsum dolor sit amet et nuncat',
        illustration: 'http://i.imgur.com/pmSqIFZl.jpg'
    },
    {
        title: 'Favourites landscapes',
        subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
        illustration: 'http://i.imgur.com/cA8zoGel.jpg'
    },
    {
        title: 'Favourites landscapes',
        subtitle: 'Lorem ipsum dolor sit amet',
        illustration: 'http://i.imgur.com/pewusMzl.jpg'
    },
    {
        title: 'Favourites landscapes',
        subtitle: 'Lorem ipsum dolor sit amet et nuncat',
        illustration: 'http://i.imgur.com/l49aYS3l.jpg'
    }
];

export default class Resources extends Component {
 
    constructor (props) {
        super(props);
        this.state = {
            slider1ActiveSlide: SLIDER_1_FIRST_ITEM,
            slider1Ref: null
        };
    }

    _renderItem ({item, index}) {
        return (
            <SliderEntry
              data={item}
              even={(index + 1) % 2 === 0}
            />
        );
    }

    _renderItemWithParallax ({item, index}, parallaxProps) {
        return (
            <SliderEntry
              data={item}
              even={(index + 1) % 2 === 0}
              parallax={true}
              parallaxProps={parallaxProps}
            />
        );
    }

    get example1 () {
        const { slider1ActiveSlide, slider1Ref } = this.state;

        return (
            <View style={sliderstyle.exampleContainer}>
                <Text style={sliderstyle.title}>Example 1</Text>
                <Text style={sliderstyle.subtitle}>
                    No momentum | Loop | Autoplay | Parallax | Scale | Opacity | Pagination with tappable dots
                </Text>
                <Carousel
                  ref={(c) => { if (!this.state.slider1Ref) { this.setState({ slider1Ref: c }); } }}
                  data={ENTRIES1}
                  renderItem={this._renderItemWithParallax}
                  sliderWidth={sliderWidth}
                  itemWidth={itemWidth}
                  hasParallaxImages={true}
                  firstItem={SLIDER_1_FIRST_ITEM}
                  inactiveSlideScale={0.94}
                  inactiveSlideOpacity={0.7}
                  enableMomentum={true}
                  containerCustomStyle={sliderstyle.slider}
                  contentContainerCustomStyle={sliderstyle.sliderContentContainer}
                  onSnapToItem={(index) => this.setState({ slider1ActiveSlide: index }) }
                />
                <Pagination
                  dotsLength={ENTRIES1.length}
                  activeDotIndex={slider1ActiveSlide}
                  containerStyle={sliderstyle.paginationContainer}
                  dotColor={'rgba(255, 255, 255, 0.92)'}
                  dotStyle={sliderstyle.paginationDot}
                  inactiveDotColor={colors.black}
                  inactiveDotOpacity={0.4}
                  inactiveDotScale={0.6}
                  carouselRef={slider1Ref}
                  tappableDots={!!slider1Ref}
                />
            </View>
        );
    }

    get gradient () {
        return (
            <LinearGradient
              colors={[colors.background1, colors.background2]}
              start={{ x: 1, y: 0 }}
              end={{ x: 0, y: 1 }}
              style={sliderstyle.gradient}
            />
        );
    }

    render () {
         return (
            <View style={styles.container}>
                <StatusBar
                  translucent={true}
                  backgroundColor={'rgba(0, 0, 0, 0.3)'}
                  barStyle={'light-content'}
                />
                { this.gradient }
                <ScrollView
                  style={sliderstyle.scrollview}
                  contentContainerStyle={sliderstyle.scrollviewContentContainer}
                  indicatorStyle={'white'}
                  scrollEventThrottle={200}
                  directionalLockEnabled={true}
                >
                    { this.example1 }
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
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