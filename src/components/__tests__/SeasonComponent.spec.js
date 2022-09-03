import { describe, it, expect, beforeEach } from "vitest";
import { shallowMount } from "@vue/test-utils";
import SeasonComponent from "../SeasonComponent.vue";
const testSeason = {
  id: 800,
  url: "https://www.tvmaze.com/seasons/800/firefly-season-1",
  number: 1,
  name: "",
  episodeOrder: 14,
  premiereDate: "2002-09-20",
  endDate: "2002-12-20",
  network: {
    id: 4,
    name: "FOX",
    country: {
      name: "United States",
      code: "US",
      timezone: "America/New_York",
    },
    officialSite: "https://www.fox.com/",
  },
  webChannel: null,
  image: {
    medium:
      "https://static.tvmaze.com/uploads/images/medium_portrait/9/23969.jpg",
    original:
      "https://static.tvmaze.com/uploads/images/original_untouched/9/23969.jpg",
  },
  summary:
    "<p>Captain Malcolm 'Mal' Reynolds is a former galactic war veteran who is the captain of the transport ship \"Serenity\". Mal and his crew, ensign Zoe Alleyne Washburne; Zoe's husband, pilot Hoban 'Wash' Washburne; muscular mercenary Jayne Cobb; young mechanic Kaylee Frye; former Alliance medical officer Simon Tam; his disturbed teenage sister River (both on the run from the interplanetary government \"The Alliance\"); the beautiful courtesan Inara Serra; and preacher Shepherd Book do any jobs, legal or illegal, they can find as the Serenity crew travels across the outskirts of outer space.</p>",
  _links: {
    self: {
      href: "https://api.tvmaze.com/seasons/800",
    },
  },
};
describe("SeasonComponent", () => {
  let wrapper = null;
  beforeEach(() => {
    // render the component
    wrapper = shallowMount(SeasonComponent, {
      propsData: { season: testSeason },
    });
  });

  it("renders season", () => {
    expect(wrapper.findAll("img").length).toEqual(1);
    expect(wrapper.find("h1").text()).toBe("Season 1");
    expect(wrapper.find("h2").text()).toBe("Episodes 14");
  });
});
