import axiosConfig from "./config";

export function getRandomMealResult() {
  return axiosConfig.get("/random.php");
}

export function getMealDetailsByIdResult(id) {
  return axiosConfig.get(`/lookup.php?i=${id}`);
}

export function getSearchDataResult(searchInput) {
  return axiosConfig.get(`/search.php?s=${searchInput}`);
}
