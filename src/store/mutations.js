export default {
  setRandomMeal(state, meal) {
    const [randomMeal] = meal;
    state.randomMeal = randomMeal;
  },
  setMealDetailsById(state, details) {
    const [mealDetails] = details;
    state.mealDetails = mealDetails;
  },

  setSearchData(state, search) {
    state.searchData = search;
  },

  setError(state, error) {
    state.error = error;
  },
};
