import { shallowMount, createLocalVue } from "@vue/test-utils";
import PageNotFound from "../../../src/components/PageNotFound.vue";
import BootstrapVue from "bootstrap-vue";
import VueRouter from "vue-router";
import { routes } from "@/router/index";

describe("PageNotFound Component", () => {
  let wrapper;
  beforeEach(() => {
    const localVue = createLocalVue();
    localVue.use(VueRouter);
    localVue.use(BootstrapVue);
    const router = new VueRouter({ routes });
    wrapper = shallowMount(PageNotFound, {
      localVue,
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
    expect(wrapper.html()).toContain('<div class="page-not-found">');
  });
});
