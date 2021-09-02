import { shallowMount, createLocalVue } from "@vue/test-utils";
import MealCard from "../../../src/components/MealCard.vue";
import BootstrapVue from "bootstrap-vue";

describe("MealCard Component", () => {
  let wrapper;
  beforeEach(() => {
    const localVue = createLocalVue();
    localVue.use(BootstrapVue);
    wrapper = shallowMount(MealCard, {
      localVue,
      props: {
        meals: {
          idMeal: "1",
          strMeal: "test meal",
          strMealThumb: "test.png",
          strCategory: "testCategory",
        },
      },
      mocks: {
        $router: {
          push: jest.fn(),
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
    expect(wrapper.html()).toContain('<div class="meal-card">');
  });
  it("should call getMealDetails when user clicks on card", () => {
    const expectedRoute = {
      name: "MealDetails",
      params: {
        id: "1",
      },
    };
    wrapper.vm.getMealDetails("1");
    expect(wrapper.vm.$router.push).toHaveBeenCalledWith(expectedRoute);
  });
});
