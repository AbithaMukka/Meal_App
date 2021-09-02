import axios from "axios";
const baseURL = "https://www.themealdb.com/api/json/v1/1";
const axiosConfig = axios.create({
  baseURL,
});
export default axiosConfig;
