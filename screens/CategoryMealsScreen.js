import React from 'react';
import { useSelector } from 'react-redux';

import { View, StyleSheet } from 'react-native';

//import { CATEGORIES, MEALS } from '../data/dummy-data';  //get the MEALS out from redux store
import { CATEGORIES } from '../data/dummy-data';

//import MealItem from '../components/MealItem';
import MealList from '../components/MealList';
import DefaultText from '../components/DefaultText';

const CategoryMealsScreen = (props) => {
  //console.log(props);
  //const {} = props;
  // const catId = props.route.params['categoryId'];
  // const catName = props.route.params['categoryName'];
  //const { categoryId, categoryName } = props.route.params;
  const { categoryId } = props.route.params;

  const availableMeals = useSelector((state) => state.meals.filteredMeals);

  //const displayedMeals = MEALS.filter(
  const displayedMeals = availableMeals.filter(
    (meal) => meal.categoryIds.indexOf(categoryId) >= 0
  );

  if (!displayedMeals || displayedMeals.length === 0) {
    return (
      <View style={styles.content}>
        <DefaultText>No meals found. Check your filters!</DefaultText>
      </View>
    );
  }

  return <MealList listData={displayedMeals} navigation={props.navigation} />;
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

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
