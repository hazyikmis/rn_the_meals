import React from 'react';
import { View, Text, Button, StyleSheet, FlatList } from 'react-native';

import { CATEGORIES, MEALS } from '../data/dummy-data';
//import MealItem from '../components/MealItem';
import MealList from '../components/MealList';

const CategoryMealsScreen = (props) => {
  //console.log(props);
  //const {} = props;
  // const catId = props.route.params['categoryId'];
  // const catName = props.route.params['categoryName'];
  const { categoryId, categoryName } = props.route.params;

  const displayedMeals = MEALS.filter(
    (meal) => meal.categoryIds.indexOf(categoryId) >= 0
  );

  return <MealList listData={displayedMeals} navigation={props.navigation} />;
};

// CategoryMealsScreen.navigationOptions = {
//   headerTitle: '...',
// };

// CategoryMealsScreen.navigationOptions = (navigationData) => {
//   console.log(navigationData);
// };

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
