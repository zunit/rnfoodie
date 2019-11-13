// food category  (ie. italians, german, chinese)

import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

// model data 
import { CATEGORIES } from '../data/dummy-data';

// constants
import Colors from '../constant/Colors';

const CategoriesMealScreen = props => {
    const catId = props.navigation.getParam('categoryId');

    const selectedCategory = CATEGORIES.find(cat => cat.id === catId);

    return (
        <View style={styles.screen}>
            <Text>The Category Meals Screen!</Text>
            <Text>{selectedCategory.title}</Text>
            <Button title="Go to Meal Detail" onPress={() => {
                props.navigation.navigate({
                    routeName: 'MealDetail'
                });
            }}/>
        </View>
    );
};

CategoriesMealScreen.navigationOptions = navigationData => {
    console.log(navigationData);
}

const styles = StyleSheet.create({
    screen: {
        flex: 1, 
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default CategoriesMealScreen;