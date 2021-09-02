import { shallowMount, createLocalVue } from "@vue/test-utils";
import Header from "../../../src/components/Header.vue";
import BootstrapVue from "bootstrap-vue";

describe("Header Component", () => {
  let wrapper;
  beforeEach(() => {
    const localVue = createLocalVue();
    localVue.use(BootstrapVue);
    wrapper = shallowMount(Header, {
      localVue,
      data() {
        return {
          search: "test",
        };
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
    expect(wrapper.html()).toContain('<div class="app-header">');
  });

  it("when form is submitted then should change the route with the given search name in the input field", () => {
    wrapper.vm.onSubmit();
    expect(wrapper.vm.$router.push).toHaveBeenCalledWith({
      name: "SearchDetails",
      params: { searchText: "test" },
    });
  });
});
