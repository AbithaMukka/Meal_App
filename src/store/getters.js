export default {
  getIngredientsWithMeasuresList(state) {
    const ingredients = [];
    const measures = [];
    const ingredientsWithMeasuresList = [];
    const data = Object.entries(state.mealDetails);
    data.forEach((mealDetail) => {
      const [key, value] = mealDetail;
      if (
        key.includes("strIngredient") &&
        value !== null &&
        value.trim() !== ""
      ) {
        ingredients.push(value);
      } else if (
        key.includes("strMeasure") &&
        value !== null &&
        value.trim() !== ""
      ) {
        measures.push(value);
      }
    });
    ingredients.forEach((value, index) => {
      ingredientsWithMeasuresList.push({
        id: index + 1,
        ingredient: value,
        measure: measures[index],
      });
    });
    return ingredientsWithMeasuresList;
  },
};
