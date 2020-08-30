import { MEALS } from '../../data/dummy-data';
import { mealsActionTypes } from '../actions/meals';

const initialState = {
  allMeals: MEALS,
  filteredMeals: MEALS,
  favoriteMeals: [],
};

const mealsReducer = (state = initialState, action) => {
  switch (action.type) {
    case mealsActionTypes.TOGGLE_FAV:
      const existingIndex = state.favoriteMeals.findIndex(
        (meal) => meal.id === action.mealId
      );
      if (existingIndex >= 0) {
        //remove from favs
        const updatedFavMeals = [...state.favoriteMeals]; //copied to temp arr in order to NOT to MUTATE the original
        updatedFavMeals.splice(existingIndex, 1); //this command actually returns "1" item at index "existingIndex", but at the same time MUTATES the "updatedFavMeals" and removes that item.
        return { ...state, favoriteMeals: updatedFavMeals };
      } else {
        //add to favs
        const meal = state.allMeals.find((meal) => meal.id === action.mealId);
        //arr.concat(x): adds x to the arr as last item
        //arr.concat([x,y,z]) adds elements x, y, and z to the arr as last items
        return { ...state, favoriteMeals: state.favoriteMeals.concat(meal) };
      }
    case mealsActionTypes.SET_FILTERS:
      const appliedFilters = action.filters;
      const filteredMeals = state.allMeals.filter((meal) => {
        if (appliedFilters.glutenFree && !meal.isGlutenFree) {
          return false;
        }
        if (appliedFilters.lactoseFree && !meal.isLactoseFree) {
          return false;
        }
        if (appliedFilters.vegan && !meal.isVegan) {
          return false;
        }
        if (appliedFilters.vegetarian && !meal.isVegetarian) {
          return false;
        }
        return true;
      });
      return { ...state, filteredMeals };
    default:
      return state;
  }
};

export default mealsReducer;
