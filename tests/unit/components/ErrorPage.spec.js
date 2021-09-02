import { shallowMount, createLocalVue } from "@vue/test-utils";
import ErrorPage from "../../../src/components/ErrorPage.vue";
import BootstrapVue from "bootstrap-vue";
import Vuex from "vuex";

describe("ErrorPage Component", () => {
  let wrapper;
  const state = {
    error: "error",
  };
  beforeEach(() => {
    const localVue = createLocalVue();
    localVue.use(BootstrapVue);
    localVue.use(Vuex);
    const store = new Vuex.Store({
      state,
    });
    wrapper = shallowMount(ErrorPage, {
      localVue,
      store,
    });
  });
  afterEach(() => {
    wrapper.destroy();
  });
  it("is a vue instance", () => {
    expect(wrapper.isVueInstance).toBeTruthy();
  });

  it("should render the correct markup", () => {
    expect(wrapper.html()).toContain('<div class="error-page">');
  });

  it("when user clicks on button then it should call refreshPage method", () => {
    const { location } = window.location;
    delete window.location;
    window.location = { reload: jest.fn() };
    wrapper.find("#button").trigger("click");
    expect(window.location.reload).toHaveBeenCalled();
    window.location = location;
  });
});
