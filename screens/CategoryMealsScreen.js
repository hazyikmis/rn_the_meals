import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const CategoryMealsScreen = (props) => {
  //console.log(props);
  //const {} = props;
  // const catId = props.route.params['categoryId'];
  // const catName = props.route.params['categoryName'];
  const { categoryId, categoryName } = props.route.params;
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
};

// CategoryMealsScreen.navigationOptions = {
//   headerTitle: '...',
// };

// CategoryMealsScreen.navigationOptions = (navigationData) => {
//   console.log(navigationData);
// };

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default CategoryMealsScreen;
