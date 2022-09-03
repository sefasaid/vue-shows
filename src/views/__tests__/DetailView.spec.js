import { describe, it, expect, vi, beforeEach } from "vitest";
import { shallowMount } from "@vue/test-utils";
import DetailView from "../DetailView.vue";
import router from "@/router";
import { createTestingPinia } from "@pinia/testing";
import { useShowsStore } from "@/stores/shows";
import { Swiper, SwiperSlide } from "swiper/vue";
import SeasonComponent from "@/components/SeasonComponent.vue";
import CastComponent from "@/components/CastComponent.vue";

const mockShow = {
  id: 158,
  url: "https://www.tvmaze.com/shows/158/fringe",
  name: "Fringe",
  type: "Scripted",
  language: "English",
  genres: ["Drama", "Action", "Science-Fiction"],
  status: "Ended",
  runtime: 60,
  averageRuntime: 61,
  premiered: "2008-09-09",
  ended: "2013-01-18",
  officialSite: null,
  schedule: {
    time: "21:00",
    days: ["Friday"],
  },
  rating: {
    average: 8.7,
  },
  weight: 99,
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
  dvdCountry: null,
  externals: {
    tvrage: 18388,
    thetvdb: 82066,
    imdb: "tt1119644",
  },
  image: {
    medium:
      "https://static.tvmaze.com/uploads/images/medium_portrait/0/2245.jpg",
    original:
      "https://static.tvmaze.com/uploads/images/original_untouched/0/2245.jpg",
  },
  summary:
    "<p>When an international flight lands at Boston's Logan Airport and the passengers and crew have all died grisly deaths, FBI Special Agent Olivia Dunham is called in to investigate. After her partner is nearly killed during the investigation, a desperate Olivia searches frantically for someone to help, leading her to Dr. Walter Bishop, our generation's Einstein. There's only one catch: he's been institutionalized for the last twenty years, and the only way to question him requires pulling his estranged son Peter in to help. When Olivia's investigation leads her to a manipulative corporate executive, she and her team will discover that what happened on Flight 627 is only a small piece of a larger, more shocking truth and will explore the blurring line between the possible and the impossible.</p>",
  updated: 1649146533,
  _links: {
    self: {
      href: "https://api.tvmaze.com/shows/158",
    },
    previousepisode: {
      href: "https://api.tvmaze.com/episodes/11492",
    },
  },
  _embedded: {
    seasons: [
      {
        id: 705,
        url: "https://www.tvmaze.com/seasons/705/fringe-season-1",
        number: 1,
        name: "",
        episodeOrder: 20,
        premiereDate: "2008-09-09",
        endDate: "2009-05-12",
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
            "https://static.tvmaze.com/uploads/images/medium_portrait/33/83019.jpg",
          original:
            "https://static.tvmaze.com/uploads/images/original_untouched/33/83019.jpg",
        },
        summary:
          "<p>The first season of Fringe begins with the introduction of the main characters, as Olivia is brought aboard the Fringe division following the death of her partner, John Scott, in an event tied to the Fringe division. As part of her investigation, she finds she needs the knowledge and experience of Walter Bishop, currently institutionalized in a mental hospital. Olivia blackmails Walter's estranged son, Peter, to be Walter's legal guardian, allowing his release from the institution. Olivia finds that Walter's knowledge in the area of fringe science to be critical for her job, and convinces Peter to remain as Walter's guardian; Peter, initially resentful due to events in his childhood, starts to participate directly in the cases, his abilities as a jack-of-all-trades being a benefit to both Walter's scientific needs and Olivia's investigations. Walter himself struggles with life outside the institution, plagued by a secret from his past and often resorting to recreational drugs. Olivia comes to discover that Massive Dynamic, a company that Walter used to be a part of, is connected with several of the Fringe cases.</p>",
        _links: {
          self: {
            href: "https://api.tvmaze.com/seasons/705",
          },
        },
      },
      {
        id: 706,
        url: "https://www.tvmaze.com/seasons/706/fringe-season-2",
        number: 2,
        name: "",
        episodeOrder: 23,
        premiereDate: "2009-09-17",
        endDate: "2010-05-20",
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
            "https://static.tvmaze.com/uploads/images/medium_portrait/33/83020.jpg",
          original:
            "https://static.tvmaze.com/uploads/images/original_untouched/33/83020.jpg",
        },
        summary:
          "<p>Olivia, having been taken to William Bell's office in the parallel universe, is returned to the prime universe but with short term amnesia, unable to recall her experience there. Massive Dynamic's Nina Sharp directs her to Sam Weiss, a bowling alley manager, who gives her cryptic but helpful advice to overcome her amnesia. Meanwhile, the Fringe division has discovered several shapeshifters - a human/machine hybrid that bleed mercury - have crossed over, but unbeknownst to them, one takes the form of Olivia's partner, Charlie. When Sam's advice allows Olivia to recall what Bell told her, she unwittingly gives this information to the shapeshifter, who calls its agents to use the information to recover the body of Thomas Jerome Newton, an agent for some entity operating from the parallel universe. Nina provides Olivia with cautionary advice, alerting her to a \"great war\" that Bell postulated would occur between the two universes. During this time, Peter has come to forgive Walter for his past, and Walter has grown accustomed to normal life outside of the institution, but is still troubled by a secret.</p>",
        _links: {
          self: {
            href: "https://api.tvmaze.com/seasons/706",
          },
        },
      },
      {
        id: 707,
        url: "https://www.tvmaze.com/seasons/707/fringe-season-3",
        number: 3,
        name: "",
        episodeOrder: 22,
        premiereDate: "2010-09-23",
        endDate: "2011-05-06",
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
            "https://static.tvmaze.com/uploads/images/medium_portrait/33/83021.jpg",
          original:
            "https://static.tvmaze.com/uploads/images/original_untouched/33/83021.jpg",
        },
        summary:
          "<p>Following Peter's rescue from the parallel universe, the prime universe Fringe team comes to learn of the Wave Sink Device, the machine that Walternate was attempting to use to destroy the prime universe. They are unaware that Fauxlivia has replaced Olivia, and she works to help the Fringe Division to identify the components hidden across the globe for a similar Wave Form Device in the prime universe. She also gets romantically close to Peter. Olivia is held in Walternate's laboratories in the parallel universe, and given drugs and conditioning to make her believe she is Fauxlivia, and subsequently a willing test subject for Walternate's tests of the powers of Cortexiphan. Olivia slowly breaks this conditioning, and on one trial, is able to cross over to the prime universe to relay a warning to Peter about Fauxilivia. Her identity exposed, Fauxilivia is extracted back to the parallel universe by Walternate's shapeshifters, while Olivia gets help from Broyles to cross back to the prime universe. Olivia is distraught after her return, knowing about Peter's relationship with Fauxilivia. However, after some time, the two reconcile and admit they have feelings for each other.</p>",
        _links: {
          self: {
            href: "https://api.tvmaze.com/seasons/707",
          },
        },
      },
      {
        id: 708,
        url: "https://www.tvmaze.com/seasons/708/fringe-season-4",
        number: 4,
        name: "",
        episodeOrder: 22,
        premiereDate: "2011-09-23",
        endDate: "2012-05-11",
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
            "https://static.tvmaze.com/uploads/images/medium_portrait/33/83022.jpg",
          original:
            "https://static.tvmaze.com/uploads/images/original_untouched/33/83022.jpg",
        },
        summary:
          "<p>Peter's actions of using the Wave Form Device to create a bridge between the two universes have caused him to erase himself from the timeline; a new timeline, in which young Peter was not saved by September after falling through the ice of Reiden Lake in 1985 after Walter's crossing, is set in motion. Despite the absence of Peter, the bridge has created a healing effect on the parallel universe, and both Fringe teams resolve their former differences and work together on cases.</p>",
        _links: {
          self: {
            href: "https://api.tvmaze.com/seasons/708",
          },
        },
      },
      {
        id: 709,
        url: "https://www.tvmaze.com/seasons/709/fringe-season-5",
        number: 5,
        name: "",
        episodeOrder: 13,
        premiereDate: "2012-09-28",
        endDate: "2013-01-18",
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
            "https://static.tvmaze.com/uploads/images/medium_portrait/33/83023.jpg",
          original:
            "https://static.tvmaze.com/uploads/images/original_untouched/33/83023.jpg",
        },
        summary:
          "<p>The fifth season takes place in 2036, 24 years after the conclusion of the fourth season; in 2015. Numerous Observers from the 27th century, having made the Earth uninhabitable in their own time, traveled through time to take over the Earth from humanity, instituting a Purge to kill off a large fraction. The remaining humans are tamed in an Orwellian manner by the Observers and their human Loyalist collaborating soldiers, though an underground resistance still eludes capture by the Observers. A common scene used through this season is one where Peter, Olivia, and their young daughter Etta enjoying a picnic on the day of the Observers' arrival and conquering of the Earth in 2015; Etta goes missing in this scene during all the confusion and destruction. Walter had been warned of this by September before the Observers' appearance and, with his help, devised a plan to defeat the Observers in the future, scattering key elements across various locations and leaving messages for the future on video tapes in his lab, which he then encased in amber to protect their discovery.</p>",
        _links: {
          self: {
            href: "https://api.tvmaze.com/seasons/709",
          },
        },
      },
    ],
    cast: [
      {
        person: {
          id: 6543,
          url: "https://www.tvmaze.com/people/6543/john-noble",
          name: "John Noble",
          country: {
            name: "Australia",
            code: "AU",
            timezone: "Australia/Sydney",
          },
          birthday: "1948-08-20",
          deathday: null,
          gender: "Male",
          image: {
            medium:
              "https://static.tvmaze.com/uploads/images/medium_portrait/147/369757.jpg",
            original:
              "https://static.tvmaze.com/uploads/images/original_untouched/147/369757.jpg",
          },
          updated: 1644800965,
          _links: {
            self: {
              href: "https://api.tvmaze.com/people/6543",
            },
          },
        },
        character: {
          id: 40767,
          url: "https://www.tvmaze.com/characters/40767/fringe-dr-walter-bishop",
          name: "Dr. Walter Bishop",
          image: {
            medium:
              "https://static.tvmaze.com/uploads/images/medium_portrait/147/369765.jpg",
            original:
              "https://static.tvmaze.com/uploads/images/original_untouched/147/369765.jpg",
          },
          _links: {
            self: {
              href: "https://api.tvmaze.com/characters/40767",
            },
          },
        },
        self: false,
        voice: false,
      },
      {
        person: {
          id: 26967,
          url: "https://www.tvmaze.com/people/26967/joshua-jackson",
          name: "Joshua Jackson",
          country: {
            name: "Canada",
            code: "CA",
            timezone: "America/Halifax",
          },
          birthday: "1978-06-11",
          deathday: null,
          gender: "Male",
          image: {
            medium:
              "https://static.tvmaze.com/uploads/images/medium_portrait/147/369750.jpg",
            original:
              "https://static.tvmaze.com/uploads/images/original_untouched/147/369750.jpg",
          },
          updated: 1658675426,
          _links: {
            self: {
              href: "https://api.tvmaze.com/people/26967",
            },
          },
        },
        character: {
          id: 40762,
          url: "https://www.tvmaze.com/characters/40762/fringe-peter-bishop",
          name: "Peter Bishop",
          image: {
            medium:
              "https://static.tvmaze.com/uploads/images/medium_portrait/147/369761.jpg",
            original:
              "https://static.tvmaze.com/uploads/images/original_untouched/147/369761.jpg",
          },
          _links: {
            self: {
              href: "https://api.tvmaze.com/characters/40762",
            },
          },
        },
        self: false,
        voice: false,
      },
      {
        person: {
          id: 29335,
          url: "https://www.tvmaze.com/people/29335/anna-torv",
          name: "Anna Torv",
          country: {
            name: "Australia",
            code: "AU",
            timezone: "Australia/Sydney",
          },
          birthday: "1979-06-07",
          deathday: null,
          gender: "Female",
          image: {
            medium:
              "https://static.tvmaze.com/uploads/images/medium_portrait/147/369747.jpg",
            original:
              "https://static.tvmaze.com/uploads/images/original_untouched/147/369747.jpg",
          },
          updated: 1635805745,
          _links: {
            self: {
              href: "https://api.tvmaze.com/people/29335",
            },
          },
        },
        character: {
          id: 40761,
          url: "https://www.tvmaze.com/characters/40761/fringe-olivia-dunham",
          name: "Olivia Dunham",
          image: {
            medium:
              "https://static.tvmaze.com/uploads/images/medium_portrait/147/369760.jpg",
            original:
              "https://static.tvmaze.com/uploads/images/original_untouched/147/369760.jpg",
          },
          _links: {
            self: {
              href: "https://api.tvmaze.com/characters/40761",
            },
          },
        },
        self: false,
        voice: false,
      },
      {
        person: {
          id: 17155,
          url: "https://www.tvmaze.com/people/17155/jasika-nicole",
          name: "Jasika Nicole",
          country: {
            name: "United States",
            code: "US",
            timezone: "America/New_York",
          },
          birthday: "1980-04-10",
          deathday: null,
          gender: "Female",
          image: {
            medium:
              "https://static.tvmaze.com/uploads/images/medium_portrait/147/369755.jpg",
            original:
              "https://static.tvmaze.com/uploads/images/original_untouched/147/369755.jpg",
          },
          updated: 1551233782,
          _links: {
            self: {
              href: "https://api.tvmaze.com/people/17155",
            },
          },
        },
        character: {
          id: 40765,
          url: "https://www.tvmaze.com/characters/40765/fringe-astrid-farnsworth",
          name: "Astrid Farnsworth",
          image: {
            medium:
              "https://static.tvmaze.com/uploads/images/medium_portrait/147/369764.jpg",
            original:
              "https://static.tvmaze.com/uploads/images/original_untouched/147/369764.jpg",
          },
          _links: {
            self: {
              href: "https://api.tvmaze.com/characters/40765",
            },
          },
        },
        self: false,
        voice: false,
      },
      {
        person: {
          id: 9696,
          url: "https://www.tvmaze.com/people/9696/lance-reddick",
          name: "Lance Reddick",
          country: {
            name: "United States",
            code: "US",
            timezone: "America/New_York",
          },
          birthday: "1962-12-31",
          deathday: null,
          gender: "Male",
          image: {
            medium:
              "https://static.tvmaze.com/uploads/images/medium_portrait/147/369752.jpg",
            original:
              "https://static.tvmaze.com/uploads/images/original_untouched/147/369752.jpg",
          },
          updated: 1661335198,
          _links: {
            self: {
              href: "https://api.tvmaze.com/people/9696",
            },
          },
        },
        character: {
          id: 40763,
          url: "https://www.tvmaze.com/characters/40763/fringe-phillip-broyles",
          name: "Phillip Broyles",
          image: {
            medium:
              "https://static.tvmaze.com/uploads/images/medium_portrait/147/369762.jpg",
            original:
              "https://static.tvmaze.com/uploads/images/original_untouched/147/369762.jpg",
          },
          _links: {
            self: {
              href: "https://api.tvmaze.com/characters/40763",
            },
          },
        },
        self: false,
        voice: false,
      },
      {
        person: {
          id: 17005,
          url: "https://www.tvmaze.com/people/17005/blair-brown",
          name: "Blair Brown",
          country: {
            name: "United States",
            code: "US",
            timezone: "America/New_York",
          },
          birthday: "1946-04-23",
          deathday: null,
          gender: "Female",
          image: {
            medium:
              "https://static.tvmaze.com/uploads/images/medium_portrait/147/369754.jpg",
            original:
              "https://static.tvmaze.com/uploads/images/original_untouched/147/369754.jpg",
          },
          updated: 1659874149,
          _links: {
            self: {
              href: "https://api.tvmaze.com/people/17005",
            },
          },
        },
        character: {
          id: 40764,
          url: "https://www.tvmaze.com/characters/40764/fringe-nina-sharp",
          name: "Nina Sharp",
          image: {
            medium:
              "https://static.tvmaze.com/uploads/images/medium_portrait/147/369763.jpg",
            original:
              "https://static.tvmaze.com/uploads/images/original_untouched/147/369763.jpg",
          },
          _links: {
            self: {
              href: "https://api.tvmaze.com/characters/40764",
            },
          },
        },
        self: false,
        voice: false,
      },
      {
        person: {
          id: 2086,
          url: "https://www.tvmaze.com/people/2086/kirk-acevedo",
          name: "Kirk Acevedo",
          country: {
            name: "United States",
            code: "US",
            timezone: "America/New_York",
          },
          birthday: "1971-11-27",
          deathday: null,
          gender: "Male",
          image: {
            medium:
              "https://static.tvmaze.com/uploads/images/medium_portrait/2/6003.jpg",
            original:
              "https://static.tvmaze.com/uploads/images/original_untouched/2/6003.jpg",
          },
          updated: 1651193221,
          _links: {
            self: {
              href: "https://api.tvmaze.com/people/2086",
            },
          },
        },
        character: {
          id: 40768,
          url: "https://www.tvmaze.com/characters/40768/fringe-charlie-francis",
          name: "Charlie Francis",
          image: {
            medium:
              "https://static.tvmaze.com/uploads/images/medium_portrait/147/369766.jpg",
            original:
              "https://static.tvmaze.com/uploads/images/original_untouched/147/369766.jpg",
          },
          _links: {
            self: {
              href: "https://api.tvmaze.com/characters/40768",
            },
          },
        },
        self: false,
        voice: false,
      },
      {
        person: {
          id: 420,
          url: "https://www.tvmaze.com/people/420/seth-gabel",
          name: "Seth Gabel",
          country: {
            name: "United States",
            code: "US",
            timezone: "America/New_York",
          },
          birthday: "1981-10-03",
          deathday: null,
          gender: "Male",
          image: {
            medium:
              "https://static.tvmaze.com/uploads/images/medium_portrait/149/373164.jpg",
            original:
              "https://static.tvmaze.com/uploads/images/original_untouched/149/373164.jpg",
          },
          updated: 1660241456,
          _links: {
            self: {
              href: "https://api.tvmaze.com/people/420",
            },
          },
        },
        character: {
          id: 40766,
          url: "https://www.tvmaze.com/characters/40766/fringe-lincoln-lee",
          name: "Lincoln Lee",
          image: {
            medium:
              "https://static.tvmaze.com/uploads/images/medium_portrait/148/370829.jpg",
            original:
              "https://static.tvmaze.com/uploads/images/original_untouched/148/370829.jpg",
          },
          _links: {
            self: {
              href: "https://api.tvmaze.com/characters/40766",
            },
          },
        },
        self: false,
        voice: false,
      },
      {
        person: {
          id: 21503,
          url: "https://www.tvmaze.com/people/21503/mark-valley",
          name: "Mark Valley",
          country: {
            name: "United States",
            code: "US",
            timezone: "America/New_York",
          },
          birthday: "1964-12-24",
          deathday: null,
          gender: "Male",
          image: {
            medium:
              "https://static.tvmaze.com/uploads/images/medium_portrait/147/369758.jpg",
            original:
              "https://static.tvmaze.com/uploads/images/original_untouched/147/369758.jpg",
          },
          updated: 1661687401,
          _links: {
            self: {
              href: "https://api.tvmaze.com/people/21503",
            },
          },
        },
        character: {
          id: 40769,
          url: "https://www.tvmaze.com/characters/40769/fringe-john-scott",
          name: "John Scott",
          image: {
            medium:
              "https://static.tvmaze.com/uploads/images/medium_portrait/147/369767.jpg",
            original:
              "https://static.tvmaze.com/uploads/images/original_untouched/147/369767.jpg",
          },
          _links: {
            self: {
              href: "https://api.tvmaze.com/characters/40769",
            },
          },
        },
        self: false,
        voice: false,
      },
    ],
    images: [
      {
        id: 2245,
        type: "poster",
        main: true,
        resolutions: {
          original: {
            url: "https://static.tvmaze.com/uploads/images/original_untouched/0/2245.jpg",
            width: 680,
            height: 1000,
          },
          medium: {
            url: "https://static.tvmaze.com/uploads/images/medium_portrait/0/2245.jpg",
            width: 210,
            height: 295,
          },
        },
      },
      {
        id: 380591,
        type: "poster",
        main: false,
        resolutions: {
          original: {
            url: "https://static.tvmaze.com/uploads/images/original_untouched/153/383239.jpg",
            width: 1237,
            height: 1537,
          },
          medium: {
            url: "https://static.tvmaze.com/uploads/images/medium_portrait/153/383239.jpg",
            width: 210,
            height: 295,
          },
        },
      },
      {
        id: 380592,
        type: "background",
        main: false,
        resolutions: {
          original: {
            url: "https://static.tvmaze.com/uploads/images/original_untouched/153/383240.jpg",
            width: 1600,
            height: 1200,
          },
        },
      },
      {
        id: 380593,
        type: "background",
        main: false,
        resolutions: {
          original: {
            url: "https://static.tvmaze.com/uploads/images/original_untouched/153/383241.jpg",
            width: 1920,
            height: 1200,
          },
        },
      },
      {
        id: 380594,
        type: "poster",
        main: false,
        resolutions: {
          original: {
            url: "https://static.tvmaze.com/uploads/images/original_untouched/153/383242.jpg",
            width: 1013,
            height: 1500,
          },
          medium: {
            url: "https://static.tvmaze.com/uploads/images/medium_portrait/153/383242.jpg",
            width: 210,
            height: 295,
          },
        },
      },
      {
        id: 380595,
        type: "poster",
        main: false,
        resolutions: {
          original: {
            url: "https://static.tvmaze.com/uploads/images/original_untouched/153/383243.jpg",
            width: 932,
            height: 1256,
          },
          medium: {
            url: "https://static.tvmaze.com/uploads/images/medium_portrait/153/383243.jpg",
            width: 210,
            height: 295,
          },
        },
      },
      {
        id: 380596,
        type: "poster",
        main: false,
        resolutions: {
          original: {
            url: "https://static.tvmaze.com/uploads/images/original_untouched/153/383244.jpg",
            width: 3644,
            height: 5000,
          },
          medium: {
            url: "https://static.tvmaze.com/uploads/images/medium_portrait/153/383244.jpg",
            width: 210,
            height: 295,
          },
        },
      },
      {
        id: 380597,
        type: "poster",
        main: false,
        resolutions: {
          original: {
            url: "https://static.tvmaze.com/uploads/images/original_untouched/153/383245.jpg",
            width: 2859,
            height: 3892,
          },
          medium: {
            url: "https://static.tvmaze.com/uploads/images/medium_portrait/153/383245.jpg",
            width: 210,
            height: 295,
          },
        },
      },
      {
        id: 380598,
        type: "poster",
        main: false,
        resolutions: {
          original: {
            url: "https://static.tvmaze.com/uploads/images/original_untouched/153/383246.jpg",
            width: 970,
            height: 1378,
          },
          medium: {
            url: "https://static.tvmaze.com/uploads/images/medium_portrait/153/383246.jpg",
            width: 210,
            height: 295,
          },
        },
      },
      {
        id: 380599,
        type: "poster",
        main: false,
        resolutions: {
          original: {
            url: "https://static.tvmaze.com/uploads/images/original_untouched/153/383247.jpg",
            width: 1796,
            height: 2073,
          },
          medium: {
            url: "https://static.tvmaze.com/uploads/images/medium_portrait/153/383247.jpg",
            width: 210,
            height: 295,
          },
        },
      },
      {
        id: 380600,
        type: "poster",
        main: false,
        resolutions: {
          original: {
            url: "https://static.tvmaze.com/uploads/images/original_untouched/153/383248.jpg",
            width: 600,
            height: 889,
          },
          medium: {
            url: "https://static.tvmaze.com/uploads/images/medium_portrait/153/383248.jpg",
            width: 210,
            height: 295,
          },
        },
      },
      {
        id: 380601,
        type: "background",
        main: false,
        resolutions: {
          original: {
            url: "https://static.tvmaze.com/uploads/images/original_untouched/153/383249.jpg",
            width: 1920,
            height: 1200,
          },
        },
      },
      {
        id: 555028,
        type: "background",
        main: false,
        resolutions: {
          original: {
            url: "https://static.tvmaze.com/uploads/images/original_untouched/223/558585.jpg",
            width: 1920,
            height: 1080,
          },
        },
      },
    ],
  },
};
describe("DetailView", () => {
  let wrapper = null;
  let store = null;
  beforeEach(() => {
    // render the component
    wrapper = shallowMount(DetailView, {
      global: {
        plugins: [
          createTestingPinia({
            createSpy: vi.fn,
          }),
          router,
        ],
        stubs: {
          Swiper,
          SwiperSlide,
          SeasonComponent,
          CastComponent,
        },
      },
    });
    store = useShowsStore();
    store.selectedShow = mockShow;
    store.loading = false;
  });

  it("renders detail view", () => {
    expect(wrapper.find(".show-card-info").find("h1").text()).toBe("Fringe");
    expect(wrapper.findAll(".season")).toHaveLength(5);
    expect(wrapper.findAll(".cast")).toHaveLength(9);
  });
});
