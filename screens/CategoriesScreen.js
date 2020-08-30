import React from 'react';
import { StyleSheet, FlatList } from 'react-native';

import { CATEGORIES } from '../data/dummy-data';
import CategoryGridTile from '../components/CategoryGridTile';

const CategoriesScreen = (props) => {
  //const {} = props;
  //console.log(props);

  const renderGridItem = (itemData) => {
    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onSelect={() => {
          props.navigation.navigate({
            name: 'CategoryMeals',
            params: {
              categoryId: itemData.item.id,
              categoryName: itemData.item.title,
            },
          });
        }}
      />
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
