import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MealList from '../components/MealList';
//import { MEALS } from '../data/dummy-data'; //get the MEALS out from redux store
import { useSelector } from 'react-redux';

const FavoritesScreen = (props) => {
  //const {} = props;

  //const favMeals = MEALS.filter((meal) => meal.id === 'm1' || meal.id == 'm2');
  const favMeals = useSelector((state) => state.meals.favoriteMeals);

  return <MealList listData={favMeals} navigation={props.navigation} />;
};

export default FavoritesScreen;
