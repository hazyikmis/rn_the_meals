export const mealsActionTypes = {
  TOGGLE_FAV: 'TOGGLE_FAV',
  SET_FILTERS: 'SET_FILTERS',
};

export const toggleFav = (id) => {
  return { type: mealsActionTypes.TOGGLE_FAV, mealId: id };
};

export const setFilters = (filterSettings) => {
  return { type: mealsActionTypes.SET_FILTERS, filters: filterSettings };
};
