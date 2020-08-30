import React from 'react';
import { View, StyleSheet } from 'react-native';
import MealList from '../components/MealList';
//import { MEALS } from '../data/dummy-data'; //get the MEALS out from redux store
import { useSelector } from 'react-redux';
import DefaultText from '../components/DefaultText';

const FavoritesScreen = (props) => {
  //const {} = props;

  //const favMeals = MEALS.filter((meal) => meal.id === 'm1' || meal.id == 'm2');
  const favMeals = useSelector((state) => state.meals.favoriteMeals);

  if (!favMeals || favMeals.length === 0) {
    return (
      <View style={styles.content}>
        <DefaultText>No favorite meals found. Start adding some!</DefaultText>
      </View>
    );
  }
  return <MealList listData={favMeals} navigation={props.navigation} />;
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default FavoritesScreen;
