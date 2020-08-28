import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import MealItem from './MealItem';

const MealList = (props) => {
  const { listData, navigation } = props;

  const renderMealItem = (itemData) => {
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
