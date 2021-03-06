//import { createAppContainer } from 'react-navigation'; //react-navigation version 4
import React from 'react';
import { Text, Platform } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailsScreen from '../screens/MealDetailsScreen';

import Colors from '../constants/Colors';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import CustomHeaderButton from '../components/CustomHeaderButton';
import FavoritesScreen from '../screens/FavoritesScreen';
import { Ionicons } from '@expo/vector-icons';

//import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

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
        //the function below receive: navigation, prop and route
        //options={({ route }) => ({ title: route.params.categoryName })}
        //options={({ route }) => ({ headerTitle: route.params.categoryName })}
        options={({ route }) => ({ headerTitle: route.params.categoryName })}
      />
      <Stack.Screen
        name="MealDetails"
        component={MealDetailsScreen}
        options={({ route }) => ({
          headerTitle: route.params.mealName,
          //headerTransparent: true,
          //headerRight: () => <Text>FAV!</Text>,
          headerRight: () => (
            <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
              <Item
                title="Favorite"
                iconName="ios-star" //"ios-star-outline"
                onPress={() => {
                  console.log('Marked as Favorite!');
                }}
              />
            </HeaderButtons>
          ),
        })}
        // options={{
        //   headerRight: () => <Text>FAV!</Text>,
        //   headerTitle: ({ route }) => route.params.mealName,
        // }}
      />
    </Stack.Navigator>
  );
};

const StackFav = createStackNavigator();

//function MealsNavigator() {
const FavsNavigator = () => {
  return (
    <StackFav.Navigator
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
      <StackFav.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{
          //title: 'Meal Categories',
          headerTitle: 'Favorite Meals',
        }}
      />
      <StackFav.Screen
        name="MealDetails"
        component={MealDetailsScreen}
        options={({ route }) => ({
          headerTitle: route.params.mealName,
          //headerTransparent: true,
          //headerRight: () => <Text>FAV!</Text>,
          headerRight: () => (
            <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
              <Item
                title="Favorite"
                iconName="ios-star" //"ios-star-outline"
                onPress={() => {
                  console.log('Marked as Favorite!');
                }}
              />
            </HeaderButtons>
          ),
        })}
        // options={{
        //   headerRight: () => <Text>FAV!</Text>,
        //   headerTitle: ({ route }) => route.params.mealName,
        // }}
      />
    </StackFav.Navigator>
  );
};

//const Tab = createBottomTabNavigator();
const Tab =
  Platform.OS === 'android'
    ? createMaterialBottomTabNavigator()
    : createBottomTabNavigator();

const MealsFavTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        //You can overwrite default tab labels
        tabBarLabel: route.name === 'Meals' ? 'Meals' : 'Favorites !',
        //tabBarIcon: ({ focused, color, size }) => {
        tabBarIcon: (tabInfo) => {
          let iconName = route.name === 'Meals' ? 'ios-restaurant' : 'ios-star';
          return <Ionicons name={iconName} size={25} color={tabInfo.color} />;
        },
        tabBarColor:
          route.name === 'Meals' ? Colors.primaryColor : Colors.accentColor,
      })}
      tabBarOptions={{
        activeTintColor: Colors.accentColor,
      }}
      //the 2 setting below specifically for android (createMaterialBottomTabNavigator)
      //for ios (createBottomTabNavigator), no effects!
      //activeColor={Colors.accentColor}
      activeColor="white"
      shifting={true}
    >
      <Tab.Screen name="Meals" component={MealsNavigator} />
      {/* <Tab.Screen name="Favorites" component={FavoritesScreen} /> */}
      <Tab.Screen name="Favorites" component={FavsNavigator} />
    </Tab.Navigator>
  );
};

//export default MealsNavigator;
export default MealsFavTabNavigator;

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

/*
const MealsFavTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Meals" component={MealsNavigator} />
      <Tab.Screen name="Favorites" component={FavoritesScreen} />
    </Tab.Navigator>
  );
};
*/
