import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import SearchDetails from "../components/SearchDetails.vue";
import MealDetails from "../components/MealDetails.vue";
import PageNotFound from "../components/PageNotFound.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  { path: "/search=:searchText", 
    name: "SearchDetails", 
    component: SearchDetails 
  },
  {
    path: "/mealdetails/:id",
    name: "MealDetails",
    component: MealDetails,
  },
  {
    path: "*",
    name: "PageNotFound",
    component: PageNotFound,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
