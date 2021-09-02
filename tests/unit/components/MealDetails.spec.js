import { shallowMount, createLocalVue } from "@vue/test-utils";
import MealDetails from "../../../src/components/MealDetails.vue";
import BootstrapVue from "bootstrap-vue";
import Vuex from "vuex";

describe("MealDetails Component", () => {
  let wrapper;
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
  const actions = {
    getMealDetailsById: jest.fn(),
  };

  const getters = {
    getIngredientsWithMeasuresList: () => [
      { id: 1, ingredient: "testingrediant1", measure: "testmeasure1" },
      { id: 2, ingredient: "testingrediant2", measure: "testmeasure2" },
    ],
  };

  beforeEach(() => {
    const localVue = createLocalVue();
    localVue.use(BootstrapVue);
    localVue.use(Vuex);
    const store = new Vuex.Store({
      state,
      actions,
      getters,
    });
    wrapper = shallowMount(MealDetails, {
      localVue,
      store,
      mocks: {
        $route: {
          params: {
            id: "1",
          },
        },
      },
    });
  });

  afterEach(() => {
    wrapper.destroy();
  });

  it("is a vue instance", () => {
    expect(wrapper.isVueInstance).toBeTruthy();
  });

  it("should render the correct markup", () => {
    expect(wrapper.html()).toContain('<div class="meal-details">');
  });
  it("getMealDetailsById action should be called", () => {
    wrapper.vm.getMealDetailsThroughId("1");
    expect(actions.getMealDetailsById).toHaveBeenCalled();
  });
  it("should return youtube url with replacing watch?v= to embed", () => {
    const url = wrapper.vm.getYoutubeVideo(state.mealDetails.strYoutube);
    expect(url).toBe("https://www.youtube.com/embed/e-2K2iyPASA");
  });
});
