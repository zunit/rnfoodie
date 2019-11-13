// food category  (ie. italians, german, chinese)

import React from 'react';
import { View, Text, StyleSheet, Button, FlatList, TouchableOpacity } from 'react-native';

// Model Data 
import { CATEGORIES } from '../data/dummy-data';

// constants
import Colors from '../constant/Colors';

const CategoriesScreen = props => {

    const renderGridItem = (itemData) => {
        return (
            <TouchableOpacity
            style={styles.gridItem}
            onPress={() => {
                props.navigation.navigate({
                    routeName: 'CategoryMeals',
                    params: {
                        categoryId: itemData.item.id
                    }
                })
            }}
            >
                <View >
                    <Text>
                        {itemData.item.title}
                    </Text>
                </View>
            </TouchableOpacity>
        );
    }
    return (
        <FlatList
            keyExtractor={(item, index) => item.id}
            data={CATEGORIES}
            renderItem={renderGridItem}
            numColumns={2}
        />
    );
};

CategoriesScreen.navigationOptions = {
    headerTitle: 'Meals Category',
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    gridItem: {
        flex: 1,
        margin: 15,
        height: 150, 
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2, 
        borderColor: 'grey',
        borderRadius: 8
    }
});

export default CategoriesScreen;