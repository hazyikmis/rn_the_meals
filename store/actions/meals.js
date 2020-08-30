export const mealsActionTypes = {
  TOGGLE_FAV: 'TOGGLE_FAV',
};

export const toggleFav = (id) => {
  return { type: mealsActionTypes.TOGGLE_FAV, mealId: id };
};
