import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const CategoryMealsScreen = (props) => {
  //const {} = props;
  return (
    <View style={styles.screen}>
      <Text>The Category Meals Screen</Text>
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

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default CategoryMealsScreen;
