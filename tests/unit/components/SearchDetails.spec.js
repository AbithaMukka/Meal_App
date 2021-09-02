import { shallowMount, createLocalVue } from "@vue/test-utils";
import SearchDetails from "../../../src/components/SearchDetails.vue";
import BootstrapVue from "bootstrap-vue";
import Vuex from "vuex";

describe("SearchDetails Component", () => {
  let wrapper;
  const state = {
    searchData: [
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
    getSearchData: jest.fn(),
  };

  beforeEach(() => {
    const localVue = createLocalVue();
    localVue.use(BootstrapVue);
    localVue.use(Vuex);
    const store = new Vuex.Store({
      state,
      actions,
    });
    wrapper = shallowMount(SearchDetails, {
      localVue,
      store,
      data() {
        return {
          searchInput: "test",
          isLoading: false,
        };
      },
      mocks: {
        $route: {
          params: { searchText: "test" },
        },
      },
    });
  });

  it("is a vue instance", () => {
    expect(wrapper.isVueInstance).toBeTruthy();
  });
  it("should render the correct markup", () => {
    expect(wrapper.html()).toContain('<div class="search-details">');
  });
  it("getSearchData action should be called when getSearchDataResults is called", async () => {
    wrapper.vm.getSearchDataResults();
    const context = {
      commit: jest.fn(),
    };
    await actions.getSearchData(context, "test");
    expect(actions.getSearchData).toHaveBeenCalled();
  });
});
