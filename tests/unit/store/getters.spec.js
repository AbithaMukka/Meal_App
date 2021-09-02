import getters from "../../../src/store/getters";
describe("getters", () => {
  const state = {
    mealDetails: {
      idMeal: "1",
      strMeal: "test meal",
      strMealThumb: "test.png",
      strCategory: "testCategory",
      strIngredient1: "test ingredient1",
      strMeasure1: "test measure1",
      strIngredient2: "test ingredient2",
      strMeasure2: "test measure2",
      strIngredient3: "  ",
      strMeasure3: " ",
      strYoutube: "https://www.youtube.com/watch?v=e-2K2iyPASA",
    },
  };
  it("should return ingredient and measure list", () => {
    const list = getters.getIngredientsWithMeasuresList(state);
    expect(list).toEqual([
      { id: 1, ingredient: "test ingredient1", measure: "test measure1" },
      { id: 2, ingredient: "test ingredient2", measure: "test measure2" },
    ]);
  });
});
