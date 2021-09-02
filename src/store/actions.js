import {
  getRandomMealResult,
  getMealDetailsByIdResult,
  getSearchDataResult,
} from "../service/service.js";
export default {
  async getRandomMeal(context) {
    try {
      const response = await getRandomMealResult();
      context.commit("setRandomMeal", response.data.meals);
    } catch (error) {
      context.commit("setError", error.message);
    }
  },
  async getMealDetailsById(context, id) {
    try {
      const response = await getMealDetailsByIdResult(id);
      context.commit("setMealDetailsById", response.data.meals);
    } catch (error) {
      context.commit("setError", error.message);
    }
  },
  async getSearchData(context, searchInput) {
    try {
      const response = await getSearchDataResult(searchInput);
      context.commit("setSearchData", response.data.meals);
    } catch (error) {
      context.commit("setError", error.message);
    }
  },
};
