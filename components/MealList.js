import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import MealItem from './MealItem';

import { useDispatch, useSelector } from 'react-redux';
import { toggleFav } from '../store/actions/meals';

const MealList = (props) => {
  const { listData, navigation } = props;

  const favoriteMeals = useSelector((state) => state.meals.favoriteMeals);

  // const isMealFavorite = (mealId) => {
  //   return favoriteMeals.some((meal) => meal.id === mealId);
  // };

  const dispatch = useDispatch();

  const renderMealItem = (itemData) => {
    const mealId = itemData.item.id;
    const toggleFavoriteHandler = () => {
      //console.log('Marked as Fav!');
      dispatch(toggleFav(mealId));
    };

    const isMealFav = favoriteMeals.find((meal) => meal.id === mealId);

    return (
      <MealItem
        meal={itemData.item}
        onSelectMeal={() => {
          //props.navigation.navigate({
          navigation.navigate({
            name: 'MealDetails',
            params: {
              mealId: itemData.item.id,
              mealName: itemData.item.title, //sent for screen title (check MealsNavigator.js)
              toggleFav: toggleFavoriteHandler,
              //isFav: isMealFavorite(itemData.item.id),
              isFav: isMealFav,
            },
          });
        }}
      />
    );
  };

  return (
    <View style={styles.list}>
      <FlatList
        //data={displayedMeals}
        data={listData}
        renderItem={renderMealItem}
        //keyExtractor={(item, index) => item.id}
        style={{ width: '100%' }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5,
  },
});

export default MealList;
