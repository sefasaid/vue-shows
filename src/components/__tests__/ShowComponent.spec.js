import { describe, it, expect, beforeEach } from "vitest";
import { shallowMount, RouterLinkStub } from "@vue/test-utils";
import ShowComponent from "../ShowComponent.vue";
import router from "@/router";

describe("ShowComponent", () => {
  let wrapper = null;

  beforeEach(() => {
    // render the component
    wrapper = shallowMount(ShowComponent, {
      propsData: {
        image:
          "https://static.tvmaze.com/uploads/images/original_untouched/1/2600.jpg",
        name: "Firefly",
        rating: 9.1,
        id: 180,
      },
      global: {
        stubs: {
          RouterLink: RouterLinkStub,
        },
        plugins: [router],
      },
    });
  });

  it("renders show", () => {
    expect(wrapper.find("h1").text()).toBe("Firefly");
    expect(wrapper.find("p").text()).toBe("9.1 / 10");
  });
});
