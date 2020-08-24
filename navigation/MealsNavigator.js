//import { createAppContainer } from 'react-navigation'; //react-navigation version 4
import React from 'react';
import { Platform } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailsScreen from '../screens/MealDetailsScreen';

import Colors from '../constants/Colors';

const Stack = createStackNavigator();

//function MealsNavigator() {
const MealsNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName={CategoriesScreen}
      headerMode="screen"
      screenOptions={{
        headerStyle: {
          //height: 80,
          backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : '',
        },
        headerTintColor:
          Platform.OS === 'android' ? 'white' : Colors.primaryColor,
      }}
    >
      <Stack.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{
          //title: 'Meal Categories',
          headerTitle: 'Meal Categories',
        }}
      />
      <Stack.Screen
        name="CategoryMeals"
        component={CategoryMealsScreen}
        options={({ route }) => ({ title: route.params.categoryName })}
      />
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
