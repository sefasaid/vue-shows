import { describe, it, expect, beforeEach, vi } from "vitest";
import { shallowMount } from "@vue/test-utils";
import GenreListComponent from "../GenreListComponent.vue";
import { createTestingPinia } from "@pinia/testing";

const genreName = "Action";
describe("GenreListComponent", () => {
  let wrapper = null;
  beforeEach(() => {
    wrapper = shallowMount(GenreListComponent, {
      propsData: { genre: genreName },
      global: {
        plugins: [
          createTestingPinia({
            createSpy: vi.fn,
          }),
        ],
      },
    });
  });

  it("should renders Title", () => {
    expect(wrapper.find(".genre-name").text()).toBe("Action");
  });
});
