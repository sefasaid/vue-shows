import { describe, it, expect, beforeEach } from "vitest";
import { shallowMount } from "@vue/test-utils";
import CastComponent from "../CastComponent.vue";
const testCast = {
  person: {
    id: 890,
    url: "https://www.tvmaze.com/people/890/morena-baccarin",
    name: "Morena Baccarin",
    country: {
      name: "Brazil",
      code: "BR",
      timezone: "America/Noronha",
    },
    birthday: "1979-06-02",
    deathday: null,
    gender: "Female",
    image: {
      medium:
        "https://static.tvmaze.com/uploads/images/medium_portrait/335/839919.jpg",
      original:
        "https://static.tvmaze.com/uploads/images/original_untouched/335/839919.jpg",
    },
    updated: 1651578875,
    _links: {
      self: {
        href: "https://api.tvmaze.com/people/890",
      },
    },
  },
  character: {
    id: 49342,
    url: "https://www.tvmaze.com/characters/49342/firefly-inara-serra",
    name: "Inara Serra",
    image: {
      medium:
        "https://static.tvmaze.com/uploads/images/medium_portrait/1/2603.jpg",
      original:
        "https://static.tvmaze.com/uploads/images/original_untouched/1/2603.jpg",
    },
    _links: {
      self: {
        href: "https://api.tvmaze.com/characters/49342",
      },
    },
  },
  self: false,
  voice: false,
};
describe("CastComponent", () => {
  let wrapper = null;
  beforeEach(() => {
    // render the component
    wrapper = shallowMount(CastComponent, {
      propsData: { cast: testCast },
    });
  });

  it("renders cast", () => {
    expect(wrapper.findAll("img").length).toEqual(1);
    expect(wrapper.find("h1").text()).toBe("Morena Baccarin");
    expect(wrapper.find("h2").text()).toBe("Inara Serra");
  });
});
