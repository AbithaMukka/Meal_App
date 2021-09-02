import mutations from "../../../src/store/mutations";
describe("store mutations", () => {
  it("should be able to add random meal to state", () => {
    const state = {
      randomMeal: {},
    };
    const randomMeal = [
      {
        idMeal: "1",
        strMeal: "test meal",
        strMealThumb: "test.png",
        strCategory: "testCategory",
      },
    ];
    mutations.setRandomMeal(state, randomMeal);
    expect(state).toEqual({
      randomMeal: {
        idMeal: "1",
        strMeal: "test meal",
        strMealThumb: "test.png",
        strCategory: "testCategory",
      },
    });
  });

  it("should be able to add meal details to state", () => {
    const state = {
      mealDetails: {},
    };
    const mealDetails = [
      {
        idMeal: "1",
        strMeal: "test meal",
        strMealThumb: "test.png",
        strCategory: "testCategory",
      },
    ];
    mutations.setMealDetailsById(state, mealDetails);
    expect(state).toEqual({
      mealDetails: {
        idMeal: "1",
        strMeal: "test meal",
        strMealThumb: "test.png",
        strCategory: "testCategory",
      },
    });
  });

  it("should be able to add search data to state", () => {
    const state = {
      searchData: [],
    };
    const searchData = [{ strMeal: "test meal" }];
    mutations.setSearchData(state, searchData);
    expect(state).toEqual({
      searchData: [{ strMeal: "test meal" }],
    });
  });
  it("should be able to add error to state", () => {
    const state = {
      error: null,
    };
    const errors = "error";
    mutations.setError(state, errors);
    expect(state).toEqual({
      error: "error",
    });
  });
});
