import actions from "../../../src/store/actions";
import {
  getRandomMealResult,
  getMealDetailsByIdResult,
  getSearchDataResult,
} from "../../../src/service/service";

jest.mock("../../../src/service/service", () => ({
  getRandomMealResult: jest.fn(),
  getMealDetailsByIdResult: jest.fn(),
  getSearchDataResult: jest.fn(),
}));

describe("store actions", () => {
  const response = {
    data: {
      meals: [
        {
          idMeal: "1",
          strMeal: "test meal",
          strMealThumb: "test.png",
          strCategory: "testCategory",
        },
      ],
    },
  };
  const error = "Error";
  describe("getRandomMealDataResult", () => {
    it("if response is resolved should show response", async () => {
      const context = {
        commit: jest.fn(),
      };
      getRandomMealResult.mockImplementation(() => Promise.resolve(response));
      await actions.getRandomMeal(context);
      expect(context.commit).toHaveBeenCalledWith(
        "setRandomMeal",
        response.data.meals
      );
    });

    it("If response is rejected should through error", async () => {
      const context = {
        commit: jest.fn(),
      };
      getRandomMealResult.mockImplementation(() =>
        Promise.reject(new Error(error))
      );
      await actions.getRandomMeal(context);
      expect(context.commit).toHaveBeenCalledWith("setError", error);
    });
  });

  describe("getMealDetailsByIdResult", () => {
    it("if response is resolved should show response", async () => {
      const context = {
        commit: jest.fn(),
      };
      getMealDetailsByIdResult.mockImplementation(() =>
        Promise.resolve(response)
      );
      await actions.getMealDetailsById(context, "1");
      expect(context.commit).toHaveBeenCalledWith(
        "setMealDetailsById",
        response.data.meals
      );
    });

    it("If response is rejected should through error", async () => {
      const context = {
        commit: jest.fn(),
      };
      getMealDetailsByIdResult.mockImplementation(() =>
        Promise.reject(new Error(error))
      );
      await actions.getMealDetailsById(context, "1");
      expect(context.commit).toHaveBeenCalledWith("setError", error);
    });
  });

  describe("getSearchDataResult", () => {
    it("if response is resolved should show response", async () => {
      const context = {
        commit: jest.fn(),
      };
      getSearchDataResult.mockImplementation(() => Promise.resolve(response));
      await actions.getSearchData(context, "test meal");
      expect(context.commit).toHaveBeenCalledWith(
        "setSearchData",
        response.data.meals
      );
    });
    it("If response is rejected should through error", async () => {
      const context = {
        commit: jest.fn(),
      };
      getSearchDataResult.mockImplementation(() =>
        Promise.reject(new Error(error))
      );
      await actions.getSearchData(context, "test meal");
      expect(context.commit).toHaveBeenCalledWith("setError", error);
    });
  });
});
