import { StyleSheet, Dimensions, Platform } from 'react-native';
import { Colors } from '../../constants/Colors.js'
export const colors = {
    black: '#1a1917',
    gray: '#888888',
    background1: '#B721FF',
    background2: '#21D4FD'
};

export const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

function wp (percentage) {
    const value = (percentage * viewportWidth) / 100;
    return Math.round(value);
}

export const slideHeight = viewportHeight * 0.4;
export const slideWidth = wp(75);
export const itemHorizontalMargin = wp(2);
export const entryBorderRadius = 8;

export const sliderWidth = viewportWidth;
export const itemWidth = slideWidth + itemHorizontalMargin * 2;


export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background1
    },
    scrollview: {
        flex: 1,
        paddingTop: 50
    },
    scrollviewContentContainer: {
        paddingBottom: 50
    },
    exampleContainer: {
        marginBottom: 30
    },
    title: {
        paddingHorizontal: 15,
        backgroundColor: 'transparent',
        color: Colors.accent,
        fontSize: 20,
        fontFamily: 'System'
    },
    subtitle: {
        backgroundColor: 'transparent',
        color: Colors.unselectedTab,
        fontSize: 13,
        fontStyle: 'italic',
        textAlign: 'right',
        fontFamily: 'System'

    },
    slider: {
        marginTop: 25
    },
    sliderContentContainer: {
    },
    paginationContainer: {
        paddingVertical: 8
    },
    paginationDot: {
        width: 8,
        height: 8,
        borderRadius: 4,
        marginHorizontal: 8
    },
    header: {
        backgroundColor: 'white',
        borderWidth: 0
    },
});