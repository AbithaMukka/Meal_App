import {
  getRandomMealResult,
  getMealDetailsByIdResult,
  getSearchDataResult,
} from "../../../src/service/service";
import axiosConfig from "../../../src/service/config";

jest.mock("../../../src/service/config", () => ({
  baseURL: "https://www.themealdb.com/api/json/v1/1",
  get: jest.fn(),
}));

describe("service", () => {
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
  it("getRandomMealResult api should call", async () => {
    axiosConfig.get.mockImplementation(() => Promise.resolve(response));
    const meal = await getRandomMealResult();
    expect(axiosConfig.get).toHaveBeenCalledWith("/random.php");
    expect(meal).toEqual(response);
  });

  it("getMealDetailsByIdResult api should call", async () => {
    axiosConfig.get.mockImplementation(() => Promise.resolve(response));
    const meal = await getMealDetailsByIdResult("1");
    expect(axiosConfig.get).toHaveBeenCalledWith("/lookup.php?i=1");
    expect(meal).toEqual(response);
  });

  it("getSearchDataResult api should call", async () => {
    axiosConfig.get.mockImplementation(() => Promise.resolve(response));
    const meal = await getSearchDataResult("test meal");
    expect(axiosConfig.get).toHaveBeenCalledWith("/search.php?s=test meal");
    expect(meal).toEqual(response);
  });
});
