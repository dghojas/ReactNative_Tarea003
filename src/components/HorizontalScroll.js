import React, { Component } from 'react';
import { FlatList, Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import { dishTitles } from '../rawData';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
    container: {
        margin: 20,
        backgroundColor: '#25a35a',
    },
    buttons: {
        padding: 10,
    },
    buttonText: {
        color: '#ecf0f1',
        fontWeight: 'bold',
    },
});

const HorizontalScroll = ({ style, item, onPress }) => (
    <View style={StyleSheet.flatten([styles.container, style])}>
        <FlatList
            data={item || dishTitles}
            keyExtractor={({ id }) => id.toString()}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({ item: { id, name } }) => (
                <TouchableOpacity
                    onPress={() => onPress(name)}
                    style={styles.buttons}>
                    <Text style={styles.buttonText}>{name}</Text>
                </TouchableOpacity>
            )}
        />
    </View>
);

HorizontalScroll.propTypes = {
    style: PropTypes.shape({}),
    items: PropTypes.array,
    onPress: PropTypes.func,
};

HorizontalScroll.defaultProps = {
    style: {},
    items: [],
    onPress: () => { },
};

export default HorizontalScroll;
