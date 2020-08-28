import React from 'react';
import { View, Text, Button, StyleSheet, FlatList } from 'react-native';

import { CATEGORIES, MEALS } from '../data/dummy-data';
import MealItem from '../components/MealItem';

const CategoryMealsScreen = (props) => {
  //console.log(props);
  //const {} = props;
  // const catId = props.route.params['categoryId'];
  // const catName = props.route.params['categoryName'];
  const { categoryId, categoryName } = props.route.params;

  const displayedMeals = MEALS.filter(
    (meal) => meal.categoryIds.indexOf(categoryId) >= 0
  );

  const renderMealItem = (itemData) => {
    // return (
    //   <View>
    //     <Text>{itemData.item.title}</Text>
    //   </View>
    // );
    return (
      <MealItem
        meal={itemData.item}
        onSelectMeal={() => {
          props.navigation.navigate({
            name: 'MealDetails',
            params: {
              mealId: itemData.item.id,
              mealName: itemData.item.title, //sent for screen title (check MealsNavigator.js)
            },
          });
        }}
      />
    );
  };

  return (
    <View style={styles.screen}>
      <FlatList
        data={displayedMeals}
        renderItem={renderMealItem}
        //keyExtractor={(item, index) => item.id}
        style={{ width: '100%' }}
      />
    </View>
  );
};

// CategoryMealsScreen.navigationOptions = {
//   headerTitle: '...',
// };

// CategoryMealsScreen.navigationOptions = (navigationData) => {
//   console.log(navigationData);
// };

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5,
  },
});

export default CategoryMealsScreen;

/*
  return (
    <View style={styles.screen}>
      <Text>The Category Meals Screen</Text>
      <Text>{categoryName}</Text>
      <Button
        title="Go to Details"
        onPress={() => {
          //props.navigation.navigate('CategoryMeals');
          props.navigation.navigate({ name: 'MealDetails' });
        }}
      />
      <Button
        title="Go Back"
        onPress={() => {
          //props.navigation.pop();
          props.navigation.goBack();
        }}
      />
    </View>
  );
*/
