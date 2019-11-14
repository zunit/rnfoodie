import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';

const CategoryGridTile = props => {
    return (
        <TouchableOpacity
        style={{...styles.gridItem, ...{borderColor: props.color}}}
        onPress={props.onSelect}
        >
            <View >
                <Text style={{color: 'grey'}}>
                    {props.title}
                </Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 15,
        height: 150, 
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2, 
        // borderColor: 'grey',
        borderRadius: 8
    }
});

export default CategoryGridTile;