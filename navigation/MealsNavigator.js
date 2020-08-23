//import { createAppContainer } from 'react-navigation'; //react-navigation version 4
import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailsScreen from '../screens/MealDetailsScreen';

const Stack = createStackNavigator();

//function MealsNavigator() {
const MealsNavigator = () => {
  return (
    <Stack.Navigator initialRouteName={CategoriesScreen} headerMode="screen">
      <Stack.Screen name="Categories" component={CategoriesScreen} />
      <Stack.Screen name="CategoryMeals" component={CategoryMealsScreen} />
      <Stack.Screen name="MealDetails" component={MealDetailsScreen} />
    </Stack.Navigator>
  );
};

export default MealsNavigator;

/*
const MealsNavigator = createStackNavigator({
  Categories: CategoriesScreen, //shortcut
  CategoryMeals: {
    screen: CategoryMealsScreen,
  },
  MealDetail: MealDetailsScreen,
});
*/

//export default createAppContainer(MealsNavigator);  //react-navigation version 4
