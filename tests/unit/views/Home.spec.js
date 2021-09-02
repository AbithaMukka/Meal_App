import { shallowMount, createLocalVue } from "@vue/test-utils";
import Home from "../../../src/views/Home.vue";
import BootstrapVue from "bootstrap-vue";
import Vuex from "vuex";
import VueRouter from "vue-router";
import { routes } from "@/router/index";

describe("Home View", () => {
  let wrapper;
  const state = {
    randomMeal: [
      {
        idMeal: "1",
        strMeal: "test meal",
        strMealThumb: "test.png",
        strCategory: "testCategory",
        ingredient1: "test ingerdient",
        measure1: "test measure",
      },
    ],
  };
  const actions = {
    getRandomMeal: jest.fn(),
  };
  beforeEach(() => {
    const localVue = createLocalVue();
    localVue.use(VueRouter);
    localVue.use(BootstrapVue);
    localVue.use(Vuex);
    const store = new Vuex.Store({
      state,
      actions,
    });
    const router = new VueRouter({ routes });
    wrapper = shallowMount(Home, {
      localVue,
      store,
      router,
    });
  });
  afterEach(() => {
    wrapper.destroy();
  });
  it("is a vue instance", () => {
    expect(wrapper.isVueInstance).toBeTruthy();
  });

  it("should render the correct markup", () => {
    expect(wrapper.html()).toContain('<div class="home">');
  });

  it("getRandomMeal action should be call", () => {
    wrapper.vm.getRandomMealData();
    expect(actions.getRandomMeal).toHaveBeenCalled();
  });
});
