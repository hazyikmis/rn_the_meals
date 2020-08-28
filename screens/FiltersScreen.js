import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const FiltersScreen = (props) => {
  //const {} = props;
  return (
    <View style={styles.container}>
      <Text>Filters Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: 90,
    backgroundColor: '#f7287b',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default FiltersScreen;
