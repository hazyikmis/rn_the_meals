//import { createAppContainer } from 'react-navigation'; //react-navigation version 4
import React from 'react';
import { Text, Platform } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailsScreen from '../screens/MealDetailsScreen';

import Colors from '../constants/Colors';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import CustomHeaderButton from '../components/CustomHeaderButton';
import FavoritesScreen from '../screens/FavoritesScreen';
import { Ionicons } from '@expo/vector-icons';

import FiltersScreen from '../screens/FiltersScreen';

//import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

const defaultStackNavScreenOptions = {
  headerStyle: {
    //height: 80,
    backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : '',
  },
  headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor,
  //headerTransparent: true,
  headerTitleStyle: {
    fontFamily: 'open-sans-bold',
  },
  headerBackTitleStyle: {
    fontFamily: 'open-sans', //no effect on android (no "back" text, just icon)
  },
};

const mealDetailsScreenOptions = ({ route }) => ({
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
});

const drawerMenu = (navigation) => (
  <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
    <Item
      title="Menu"
      iconName="ios-menu"
      onPress={() => {
        //console.log('Drawer menu pressed!');
        //navData.navigation.toggleDrawer();
        navigation.toggleDrawer();
      }}
    />
  </HeaderButtons>
);

const saveMenuButton = (route) => (
  <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
    <Item
      title="Save"
      iconName="ios-save"
      onPress={() => {
        console.log('Save button pressed!');
        //navData.navigation.toggleDrawer();
        //console.log(route);
        //console.log(route.state.routes[0].params.save);
        //route.state.routes[0].params.save();
        route.state.routes[0].params['save'](); //???
      }}
    />
  </HeaderButtons>
);

const Stack = createStackNavigator();

//function MealsNavigator() {
//const MealsNavigator = (navData) => {
const MealsNavigator = ({ navigation }) => {
  return (
    <Stack.Navigator
      initialRouteName={CategoriesScreen}
      headerMode="screen"
      screenOptions={defaultStackNavScreenOptions}
    >
      <Stack.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{
          //title: 'Meal Categories',
          headerTitle: 'Meal Categories',
          headerLeft: () => drawerMenu(navigation),
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
        options={mealDetailsScreenOptions}
        // options={{
        //   headerRight: () => <Text>FAV!</Text>,
        //   headerTitle: ({ route }) => route.params.mealName,
        // }}
      />
    </Stack.Navigator>
  );
};

const StackFav = createStackNavigator();

//function FavsNavigator() {
//const FavsNavigator = () => {
const FavsNavigator = ({ navigation }) => {
  return (
    <StackFav.Navigator
      initialRouteName={CategoriesScreen}
      headerMode="screen"
      screenOptions={defaultStackNavScreenOptions}
    >
      <StackFav.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{
          //title: 'Meal Categories',
          headerTitle: 'Your Favorite Meals',
          headerLeft: () => drawerMenu(navigation),
        }}
      />
      <StackFav.Screen
        name="MealDetails"
        component={MealDetailsScreen}
        options={mealDetailsScreenOptions}
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
        //tabBarLabel: route.name === 'Meals' ? 'Meals' : 'Favorites !',
        tabBarLabel:
          route.name === 'Meals' ? (
            <Text style={{ fontFamily: 'open-sans-bold' }}>Meals</Text>
          ) : (
            <Text style={{ fontFamily: 'open-sans-bold' }}>Favorites !</Text>
          ),
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
        labelStyle: {
          fontFamily: 'open-sans', //no effect seen
        },
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

const StackFilter = createStackNavigator();

const FiltersNavigator = ({ navigation, route }) => {
  return (
    <StackFilter.Navigator
      headerMode="screen"
      screenOptions={defaultStackNavScreenOptions}
    >
      <StackFilter.Screen
        name="Filters"
        component={FiltersScreen}
        options={{
          //title: 'Meal Categories',
          headerTitle: 'Filter Meals',
          headerLeft: () => drawerMenu(navigation),
          //headerRight: () => saveMenuButton(navigation),
          headerRight: () => saveMenuButton(route),
        }}
      />
    </StackFilter.Navigator>
  );
};

const Drawer = createDrawerNavigator();
//we need to add button on MealsNavigator & FavsNavigator to access this drawer menu!
//There is "CategoriesScreen" on top of the MealsNavigator and "FavoritesScreen" on top of the FavsNavigator
//Button to open drawer menu should be added to these 2 screens
const MainNavigator = () => {
  return (
    // <Drawer.Navigator>
    //   <Drawer.Screen name="MealFavs" component={MealsFavTabNavigator} />
    //   <Drawer.Screen name="Filters" component={FiltersNavigator} />
    // </Drawer.Navigator>
    <Drawer.Navigator
      drawerContentOptions={{
        activeTintColor: Colors.accentColor,
        labelStyle: {
          fontFamily: 'open-sans-bold',
        },
      }}
    >
      <Drawer.Screen
        name="MealFavs"
        component={MealsFavTabNavigator}
        options={{
          drawerLabel: 'Meal Categories',
        }}
      />
      <Drawer.Screen
        name="Filters"
        component={FiltersNavigator}
        options={{
          drawerLabel: 'Filter Meals',
        }}
      />
    </Drawer.Navigator>
  );
};

//export default MealsNavigator;
//export default MealsFavTabNavigator;
export default MainNavigator;

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
