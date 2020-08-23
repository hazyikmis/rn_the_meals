import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const MealDetailsScreen = (props) => {
  const {} = props;
  return (
    <View style={styles.screen}>
      <Text>The MealDetails Screen</Text>
      <Button
        title="Go Back to Categories"
        onPress={() => {
          props.navigation.popToTop();
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

export default MealDetailsScreen;
