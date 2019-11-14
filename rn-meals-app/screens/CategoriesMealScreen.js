// food category  (ie. italians, german, chinese)
import React from 'react';
import { View, Text, StyleSheet, Button, FlatList } from 'react-native';

// model data 
import { CATEGORIES, MEALS } from '../data/dummy-data';

// constants
// import Colors from '../constant/Colors';
// import MealsNavigator from '../navigation/MealsNavigator';

const CategoriesMealScreen = props => {
    // this constant is a parameter from the previous screen
    const catId = props.navigation.getParam('categoryId');

    // return a list of indexes of category IDs of result from meals list
    const displayedMeals = MEALS.filter(
        meal => meal.categoryIds.indexOf(catId) >= 0
    );

    const renderMealItem = itemData => {
        return (<View><Text>{itemData.item.title}</Text></View>)
    }

    return (
        <View style={styles.screen}>
            <Text>The Category Meals Screen!</Text>
            {/* <Text>{selectedCategory.title}</Text> */}
            <FlatList 
            data={displayedMeals} 
            keyExtractor={(item, index) => item.id}
            renderItem = {renderMealItem}
            /> 
        </View>
    );
};

CategoriesMealScreen.navigationOptions = navigationData => {
    // categoryId is set in the previous screen when we assign routeName
    const catId = navigationData.navigation.getParam('categoryId');
    const selectedCategory = CATEGORIES.find(cat => cat.id === catId);
    return {
        headerTitle: selectedCategory.title
    }
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default CategoriesMealScreen;