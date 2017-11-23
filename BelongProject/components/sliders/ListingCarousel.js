import React, { Component } from 'react';
import {
  Text,
  View,
  ScrollView,
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome'
import {Dimensions} from 'react-native'
import sliderstyle from '../../components/sliders/SliderStyle.js';
import {colors, itemWidth, sliderWidth} from '../../components/sliders/SliderStyle.js';
import SliderEntry from '../../components/sliders/SliderEntry.js';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { Colors } from '../../constants/Colors.js';

const FIRST_ITEM = 1

const deviceW = Dimensions.get('window').width
const deviceH = Dimensions.get('window').height

const basePx = 375

function px2dp(px) {
  return px *  deviceW / basePx
}

export default class ListingCarousel extends Component {
 
    constructor (props) {
        super(props);
        this.state = {
            slider1ActiveSlide: FIRST_ITEM,
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
           <View style={sliderstyle.exampleContainer}>
                <Text style={sliderstyle.title}>{this.props.title}</Text>
                <Text style={sliderstyle.subtitle}>
                   {this.props.subtitle}
                </Text>
                <Carousel
                  ref={(c) => { if (!this.state.slider1Ref) { this.setState({ slider1Ref: c }); } }}
                  data={this.props.data}
                  renderItem={this._renderItemWithParallax}
                  sliderWidth={sliderWidth}
                  itemWidth={itemWidth}
                  hasParallaxImages={true}
                  firstItem={FIRST_ITEM}
                  inactiveSlideScale={0.94}
                  inactiveSlideOpacity={0.7}
                  enableMomentum={true}
                  containerCustomStyle={sliderstyle.slider}
                  contentContainerCustomStyle={sliderstyle.sliderContentContainer}
                  onSnapToItem={(index) => this.setState({ slider1ActiveSlide: index }) }
                />
                <Pagination
                  dotsLength={this.props.data.length}
                  activeDotIndex={this.state.slider1ActiveSlide}
                  containerStyle={sliderstyle.paginationContainer}
                  dotColor={Colors.accent}
                  dotStyle={sliderstyle.paginationDot}
                  inactiveDotColor={colors.black}
                  inactiveDotOpacity={0.4}
                  inactiveDotScale={0.6}
                  carouselRef={this.state.slider1Ref}
                  tappableDots={!!this.state.slider1Ref}
                />
            </View>
        );
    }
}