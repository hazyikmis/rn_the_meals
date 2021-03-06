import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';

import { CATEGORIES } from '../data/dummy-data';

const CategoriesScreen = (props) => {
  //const {} = props;
  //console.log(props);

  const renderGridItem = (itemData) => {
    return (
      <TouchableOpacity
        style={styles.gridItem}
        onPress={() => {
          //props.navigation.navigate('CategoryMeals');
          props.navigation.navigate({
            name: 'CategoryMeals',
            params: {
              categoryId: itemData.item.id,
              categoryName: itemData.item.title,
            },
          });
        }}
      >
        <View>
          <Text>{itemData.item.title}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <FlatList numColumns={2} data={CATEGORIES} renderItem={renderGridItem} />
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
  },
});

export default CategoriesScreen;

/*
const CategoriesScreen = (props) => {
  //const {} = props;
  //console.log(props);
  return (
    <View style={styles.screen}>
      <Text>The Categories Screen</Text>
      <Button
        title="Go to Meals"
        onPress={() => {
          //props.navigation.navigate('CategoryMeals');
          //props.navigation.push('CategoryMeals');
          props.navigation.navigate({ name: 'CategoryMeals' });
          //props.navigation.push('Categories');  //used for opening same again and again (putting onto the stack)
        }}
      />
    </View>
  );
};
*/
