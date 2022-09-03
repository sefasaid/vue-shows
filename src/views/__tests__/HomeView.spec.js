import { describe, it, expect, vi, beforeEach } from "vitest";
import { shallowMount, RouterLinkStub } from "@vue/test-utils";

import HomeView from "../HomeView.vue";
import router from "@/router";
import { createTestingPinia } from "@pinia/testing";
import { Swiper, SwiperSlide } from "swiper/vue";
import { useShowsStore } from "@/stores/shows";
import GenreListComponent from "@/components/GenreListComponent.vue";
import ShowComponent from "@/components/ShowComponent.vue";
const mockShows = [
  {
    id: 1,
    url: "https://www.tvmaze.com/shows/1/under-the-dome",
    name: "Under the Dome",
    type: "Scripted",
    language: "English",
    genres: ["Drama", "Science-Fiction", "Thriller"],
    status: "Ended",
    runtime: 60,
    averageRuntime: 60,
    premiered: "2013-06-24",
    ended: "2015-09-10",
    officialSite: "http://www.cbs.com/shows/under-the-dome/",
    schedule: {
      time: "22:00",
      days: ["Thursday"],
    },
    rating: {
      average: 6.5,
    },
    weight: 99,
    network: {
      id: 2,
      name: "CBS",
      country: {
        name: "United States",
        code: "US",
        timezone: "America/New_York",
      },
      officialSite: "https://www.cbs.com/",
    },
    webChannel: null,
    dvdCountry: null,
    externals: {
      tvrage: 25988,
      thetvdb: 264492,
      imdb: "tt1553656",
    },
    image: {
      medium:
        "https://static.tvmaze.com/uploads/images/medium_portrait/81/202627.jpg",
      original:
        "https://static.tvmaze.com/uploads/images/original_untouched/81/202627.jpg",
    },
    summary:
      "<p><b>Under the Dome</b> is the story of a small town that is suddenly and inexplicably sealed off from the rest of the world by an enormous transparent dome. The town's inhabitants must deal with surviving the post-apocalyptic conditions while searching for answers about the dome, where it came from and if and when it will go away.</p>",
    updated: 1631010933,
    _links: {
      self: {
        href: "https://api.tvmaze.com/shows/1",
      },
      previousepisode: {
        href: "https://api.tvmaze.com/episodes/185054",
      },
    },
  },
  {
    id: 2,
    url: "https://www.tvmaze.com/shows/2/person-of-interest",
    name: "Person of Interest",
    type: "Scripted",
    language: "English",
    genres: ["Action", "Crime", "Science-Fiction"],
    status: "Ended",
    runtime: 60,
    averageRuntime: 60,
    premiered: "2011-09-22",
    ended: "2016-06-21",
    officialSite: "http://www.cbs.com/shows/person_of_interest/",
    schedule: {
      time: "22:00",
      days: ["Tuesday"],
    },
    rating: {
      average: 8.8,
    },
    weight: 98,
    network: {
      id: 2,
      name: "CBS",
      country: {
        name: "United States",
        code: "US",
        timezone: "America/New_York",
      },
      officialSite: "https://www.cbs.com/",
    },
    webChannel: null,
    dvdCountry: null,
    externals: {
      tvrage: 28376,
      thetvdb: 248742,
      imdb: "tt1839578",
    },
    image: {
      medium:
        "https://static.tvmaze.com/uploads/images/medium_portrait/163/407679.jpg",
      original:
        "https://static.tvmaze.com/uploads/images/original_untouched/163/407679.jpg",
    },
    summary:
      "<p>You are being watched. The government has a secret system, a machine that spies on you every hour of every day. I know because I built it. I designed the Machine to detect acts of terror but it sees everything. Violent crimes involving ordinary people. People like you. Crimes the government considered \"irrelevant\". They wouldn't act so I decided I would. But I needed a partner. Someone with the skills to intervene. Hunted by the authorities, we work in secret. You'll never find us. But victim or perpetrator, if your number is up, we'll find you.</p>",
    updated: 1631565378,
    _links: {
      self: {
        href: "https://api.tvmaze.com/shows/2",
      },
      previousepisode: {
        href: "https://api.tvmaze.com/episodes/659372",
      },
    },
  },
  {
    id: 3,
    url: "https://www.tvmaze.com/shows/3/bitten",
    name: "Bitten",
    type: "Scripted",
    language: "English",
    genres: ["Drama", "Horror", "Romance"],
    status: "Ended",
    runtime: 60,
    averageRuntime: 60,
    premiered: "2014-01-11",
    ended: "2016-04-15",
    officialSite: "http://bitten.space.ca/",
    schedule: {
      time: "22:00",
      days: ["Friday"],
    },
    rating: {
      average: 7.5,
    },
    weight: 94,
    network: {
      id: 7,
      name: "CTV Sci-Fi Channel",
      country: {
        name: "Canada",
        code: "CA",
        timezone: "America/Halifax",
      },
      officialSite: null,
    },
    webChannel: null,
    dvdCountry: null,
    externals: {
      tvrage: 34965,
      thetvdb: 269550,
      imdb: "tt2365946",
    },
    image: {
      medium:
        "https://static.tvmaze.com/uploads/images/medium_portrait/0/15.jpg",
      original:
        "https://static.tvmaze.com/uploads/images/original_untouched/0/15.jpg",
    },
    summary:
      '<p>Based on the critically acclaimed series of novels from Kelley Armstrong. Set in Toronto and upper New York State, <b>Bitten</b> follows the adventures of 28-year-old Elena Michaels, the world\'s only female werewolf. An orphan, Elena thought she finally found her "happily ever after" with her new love Clayton, until her life changed forever. With one small bite, the normal life she craved was taken away and she was left to survive life with the Pack.</p>',
    updated: 1638776591,
    _links: {
      self: {
        href: "https://api.tvmaze.com/shows/3",
      },
      previousepisode: {
        href: "https://api.tvmaze.com/episodes/631862",
      },
    },
  },
  {
    id: 4,
    url: "https://www.tvmaze.com/shows/4/arrow",
    name: "Arrow",
    type: "Scripted",
    language: "English",
    genres: ["Drama", "Action", "Science-Fiction"],
    status: "Ended",
    runtime: 60,
    averageRuntime: 60,
    premiered: "2012-10-10",
    ended: "2020-01-28",
    officialSite: "http://www.cwtv.com/shows/arrow",
    schedule: {
      time: "21:00",
      days: ["Tuesday"],
    },
    rating: {
      average: 7.4,
    },
    weight: 98,
    network: {
      id: 5,
      name: "The CW",
      country: {
        name: "United States",
        code: "US",
        timezone: "America/New_York",
      },
      officialSite: "https://www.cwtv.com/",
    },
    webChannel: null,
    dvdCountry: null,
    externals: {
      tvrage: 30715,
      thetvdb: 257655,
      imdb: "tt2193021",
    },
    image: {
      medium:
        "https://static.tvmaze.com/uploads/images/medium_portrait/213/534017.jpg",
      original:
        "https://static.tvmaze.com/uploads/images/original_untouched/213/534017.jpg",
    },
    summary:
      "<p>After a violent shipwreck, billionaire playboy Oliver Queen was missing and presumed dead for five years before being discovered alive on a remote island in the Pacific. He returned home to Starling City, welcomed by his devoted mother Moira, beloved sister Thea and former flame Laurel Lance. With the aid of his trusted chauffeur/bodyguard John Diggle, the computer-hacking skills of Felicity Smoak and the occasional, reluctant assistance of former police detective, now beat cop, Quentin Lance, Oliver has been waging a one-man war on crime.</p>",
    updated: 1652385053,
    _links: {
      self: {
        href: "https://api.tvmaze.com/shows/4",
      },
      previousepisode: {
        href: "https://api.tvmaze.com/episodes/1744752",
      },
    },
  },
];

const mockSearchShows = [
  {
    score: 0.8608897,
    show: {
      id: 49997,
      url: "https://www.tvmaze.com/shows/49997/search",
      name: "Search",
      type: "Scripted",
      language: "Korean",
      genres: ["Action", "Horror", "Mystery"],
      status: "Ended",
      runtime: 90,
      averageRuntime: 90,
      premiered: "2020-10-17",
      ended: "2020-11-15",
      officialSite: "http://program.tving.com/ocn/search",
      schedule: {
        time: "22:30",
        days: ["Saturday", "Sunday"],
      },
      rating: {
        average: 5.3,
      },
      weight: 36,
      network: {
        id: 267,
        name: "OCN",
        country: {
          name: "Korea, Republic of",
          code: "KR",
          timezone: "Asia/Seoul",
        },
        officialSite: null,
      },
      webChannel: null,
      dvdCountry: null,
      externals: {
        tvrage: null,
        thetvdb: 378886,
        imdb: "tt12923294",
      },
      image: {
        medium:
          "https://static.tvmaze.com/uploads/images/medium_portrait/272/682412.jpg",
        original:
          "https://static.tvmaze.com/uploads/images/original_untouched/272/682412.jpg",
      },
      summary:
        "<p><b>Search </b>is a military thriller drama that takes place in the demilitarized zone (DMZ) and tells the story of a specialized search party that forms to uncover the truth behind mysterious disappearance and murder cases.</p>",
      updated: 1647796120,
      _links: {
        self: {
          href: "https://api.tvmaze.com/shows/49997",
        },
        previousepisode: {
          href: "https://api.tvmaze.com/episodes/1951361",
        },
      },
    },
  },
  {
    score: 0.8515111,
    show: {
      id: 17700,
      url: "https://www.tvmaze.com/shows/17700/search",
      name: "Search",
      type: "Scripted",
      language: "English",
      genres: ["Action", "Adventure", "Thriller"],
      status: "Ended",
      runtime: 60,
      averageRuntime: 60,
      premiered: "1972-09-13",
      ended: "1973-04-11",
      officialSite: null,
      schedule: {
        time: "22:00",
        days: ["Wednesday"],
      },
      rating: {
        average: null,
      },
      weight: 31,
      network: {
        id: 1,
        name: "NBC",
        country: {
          name: "United States",
          code: "US",
          timezone: "America/New_York",
        },
        officialSite: "https://www.nbc.com/",
      },
      webChannel: null,
      dvdCountry: null,
      externals: {
        tvrage: null,
        thetvdb: 74884,
        imdb: "tt0068131",
      },
      image: {
        medium:
          "https://static.tvmaze.com/uploads/images/medium_portrait/59/148936.jpg",
        original:
          "https://static.tvmaze.com/uploads/images/original_untouched/59/148936.jpg",
      },
      summary:
        "<p><b>Search </b>follows the activities of a private security and investigation firm, World Securities Corporation. The firm uses high technology along with skilled agents called probes to investigate mysteries and solve problems for both government and corporate clients.</p>",
      updated: 1638715870,
      _links: {
        self: {
          href: "https://api.tvmaze.com/shows/17700",
        },
        previousepisode: {
          href: "https://api.tvmaze.com/episodes/808554",
        },
      },
    },
  },
  {
    score: 0.6981383,
    show: {
      id: 7522,
      url: "https://www.tvmaze.com/shows/7522/search-party",
      name: "Search Party",
      type: "Scripted",
      language: "English",
      genres: ["Drama", "Comedy", "Mystery"],
      status: "Ended",
      runtime: null,
      averageRuntime: 29,
      premiered: "2016-11-21",
      ended: "2022-01-07",
      officialSite:
        "https://play.hbomax.com/series/urn:hbo:series:GXa-mxg4SNINiYAEAAAF3",
      schedule: {
        time: "",
        days: [],
      },
      rating: {
        average: 5.8,
      },
      weight: 75,
      network: null,
      webChannel: {
        id: 329,
        name: "HBO Max",
        country: null,
        officialSite: "https://www.hbomax.com/",
      },
      dvdCountry: null,
      externals: {
        tvrage: null,
        thetvdb: 309523,
        imdb: "tt5460226",
      },
      image: {
        medium:
          "https://static.tvmaze.com/uploads/images/medium_portrait/385/963176.jpg",
        original:
          "https://static.tvmaze.com/uploads/images/original_untouched/385/963176.jpg",
      },
      summary:
        "<p><b>Search Party</b> is a dark comedy about five self-absorbed 20-somethings who become entangled in an ominous mystery when a former college acquaintance suddenly disappears.</p>",
      updated: 1645998019,
      _links: {
        self: {
          href: "https://api.tvmaze.com/shows/7522",
        },
        previousepisode: {
          href: "https://api.tvmaze.com/episodes/2213616",
        },
      },
    },
  },
  {
    score: 0.669863,
    show: {
      id: 42068,
      url: "https://www.tvmaze.com/shows/42068/search-www",
      name: "Search: WWW",
      type: "Scripted",
      language: "Korean",
      genres: ["Drama", "Romance"],
      status: "Ended",
      runtime: 90,
      averageRuntime: 90,
      premiered: "2019-06-05",
      ended: "2019-07-25",
      officialSite: "http://program.tving.com/tvn/searchwww/1/Vod/List?rcnt=1",
      schedule: {
        time: "21:30",
        days: ["Wednesday", "Thursday"],
      },
      rating: {
        average: 7.7,
      },
      weight: 48,
      network: {
        id: 280,
        name: "tvN",
        country: {
          name: "Korea, Republic of",
          code: "KR",
          timezone: "Asia/Seoul",
        },
        officialSite: null,
      },
      webChannel: null,
      dvdCountry: null,
      externals: {
        tvrage: null,
        thetvdb: 363283,
        imdb: "tt10253244",
      },
      image: {
        medium:
          "https://static.tvmaze.com/uploads/images/medium_portrait/196/492111.jpg",
        original:
          "https://static.tvmaze.com/uploads/images/original_untouched/196/492111.jpg",
      },
      summary:
        "<p>Bae Ta Mi works as a director for a big web portal company. She is in her late 30's and is quite competitive. With her competitiveness, Bae Ta Mi enjoys success. The methods she uses to win has her wondering if she is doing the right thing with her life. Has she sacrificed too much of her personal life for success?</p><p>Park Mo Gun is a man in his 20's and is a gifted composer. He creates music for video games. Park Mo Gun meets Bae Ta Mi at an arcade. He falls in love with her due to her competitive spirit.</p>",
      updated: 1565700992,
      _links: {
        self: {
          href: "https://api.tvmaze.com/shows/42068",
        },
        previousepisode: {
          href: "https://api.tvmaze.com/episodes/1666323",
        },
      },
    },
  },
  {
    score: 0.6568471,
    show: {
      id: 33252,
      url: "https://www.tvmaze.com/shows/33252/the-search",
      name: "The Search",
      type: "Game Show",
      language: "English",
      genres: [],
      status: "Ended",
      runtime: 50,
      averageRuntime: 50,
      premiered: "2007-01-07",
      ended: "2007-02-24",
      officialSite:
        "https://web.archive.org/web/20160318094718/http://www.channel4.com/programmes/the-search",
      schedule: {
        time: "",
        days: ["Saturday"],
      },
      rating: {
        average: null,
      },
      weight: 37,
      network: {
        id: 45,
        name: "Channel 4",
        country: {
          name: "United Kingdom",
          code: "GB",
          timezone: "Europe/London",
        },
        officialSite: "https://www.channel4.com/",
      },
      webChannel: null,
      dvdCountry: null,
      externals: {
        tvrage: null,
        thetvdb: 334269,
        imdb: null,
      },
      image: null,
      summary:
        '<p><b>The Search</b> was a programme that had ten contestants with unique skills who must solve a variety of ancient clues and puzzles from throughout history, with the aim in each episode of finding "The Symbol". The team which fulfills this directive wins the game and the losing team must then sacrifice a team member. The final episode saw the remaining (three) contestants compete to uncover a £50,000 hidden treasure.</p>',
      updated: 1592294887,
      _links: {
        self: {
          href: "https://api.tvmaze.com/shows/33252",
        },
        previousepisode: {
          href: "https://api.tvmaze.com/episodes/1352180",
        },
      },
    },
  },
  {
    score: 0.6133177,
    show: {
      id: 8174,
      url: "https://www.tvmaze.com/shows/8174/strip-search",
      name: "Strip Search",
      type: "Game Show",
      language: "English",
      genres: [],
      status: "Ended",
      runtime: 20,
      averageRuntime: 20,
      premiered: "2013-03-01",
      ended: "2013-06-18",
      officialSite: null,
      schedule: {
        time: "",
        days: [],
      },
      rating: {
        average: null,
      },
      weight: 19,
      network: null,
      webChannel: {
        id: 21,
        name: "YouTube",
        country: null,
        officialSite: "https://www.youtube.com",
      },
      dvdCountry: null,
      externals: {
        tvrage: null,
        thetvdb: 267548,
        imdb: null,
      },
      image: {
        medium:
          "https://static.tvmaze.com/uploads/images/medium_portrait/29/74123.jpg",
        original:
          "https://static.tvmaze.com/uploads/images/original_untouched/29/74123.jpg",
      },
      summary:
        "<p>In 2011, the Creators (a.k.a. Mike and Jerry) declared to the Penny Arcade office that a reality show based on webcomics must be done. After a year of research and a successful Kickstarter stretch goal, the stage had been set for 12 Artists flown from around the world to compete for $15,000 in cash and a year integrated into the Penny Arcade machine. This series airs on Penny Arcade's site and YouTube every Tuesday & Friday.</p>",
      updated: 1573161557,
      _links: {
        self: {
          href: "https://api.tvmaze.com/shows/8174",
        },
        previousepisode: {
          href: "https://api.tvmaze.com/episodes/453124",
        },
      },
    },
  },
  {
    score: 0.6036774,
    show: {
      id: 34674,
      url: "https://www.tvmaze.com/shows/34674/in-search-of",
      name: "In Search Of",
      type: "Documentary",
      language: "English",
      genres: ["Mystery"],
      status: "To Be Determined",
      runtime: 60,
      averageRuntime: 60,
      premiered: "2018-07-20",
      ended: null,
      officialSite: "https://www.history.com/shows/in-search-of",
      schedule: {
        time: "22:00",
        days: ["Friday"],
      },
      rating: {
        average: 4.7,
      },
      weight: 85,
      network: {
        id: 53,
        name: "History",
        country: {
          name: "United States",
          code: "US",
          timezone: "America/New_York",
        },
        officialSite: null,
      },
      webChannel: null,
      dvdCountry: null,
      externals: {
        tvrage: null,
        thetvdb: 349422,
        imdb: "tt8005322",
      },
      image: {
        medium:
          "https://static.tvmaze.com/uploads/images/medium_portrait/159/398370.jpg",
        original:
          "https://static.tvmaze.com/uploads/images/original_untouched/159/398370.jpg",
      },
      summary:
        "<p>Inspired by the iconic 1970s series, <b>In Search Of</b> will examine unexplained phenomena from all over the world. Each episode will follow Zachary Quinto as he investigates a different subject within a dynamic theme - such as alien encounters, mysterious creatures, UFO sightings, time travel and artificial intelligence - and searches for the truth to some of the world's greatest mysteries.</p>",
      updated: 1624859172,
      _links: {
        self: {
          href: "https://api.tvmaze.com/shows/34674",
        },
        previousepisode: {
          href: "https://api.tvmaze.com/episodes/1734668",
        },
      },
    },
  },
  {
    score: 0.577111,
    show: {
      id: 22952,
      url: "https://www.tvmaze.com/shows/22952/mythbusters-the-search",
      name: "MythBusters: The Search",
      type: "Reality",
      language: "English",
      genres: ["Action", "Adventure"],
      status: "Ended",
      runtime: 60,
      averageRuntime: 60,
      premiered: "2017-01-07",
      ended: "2017-02-25",
      officialSite:
        "http://www.sciencechannel.com/tv-shows/mythbusters-the-search/",
      schedule: {
        time: "21:00",
        days: ["Saturday"],
      },
      rating: {
        average: null,
      },
      weight: 48,
      network: {
        id: 77,
        name: "Science",
        country: {
          name: "United States",
          code: "US",
          timezone: "America/New_York",
        },
        officialSite: null,
      },
      webChannel: null,
      dvdCountry: null,
      externals: {
        tvrage: null,
        thetvdb: 320910,
        imdb: "tt5612722",
      },
      image: {
        medium:
          "https://static.tvmaze.com/uploads/images/medium_portrait/360/900756.jpg",
        original:
          "https://static.tvmaze.com/uploads/images/original_untouched/360/900756.jpg",
      },
      summary:
        "<p>Science Channel is searching for an all-new generation of myth-busting science super stars with mind-blowing build skills and nerves of steel. Using social media and spectacular stunts, <b>MythBusters: The Search </b>will feature a cast of fearless hopefuls who will be judged on their skills as they compete in never before seen myth-busting challenges.</p>",
      updated: 1632560271,
      _links: {
        self: {
          href: "https://api.tvmaze.com/shows/22952",
        },
        previousepisode: {
          href: "https://api.tvmaze.com/episodes/1075068",
        },
      },
    },
  },
  {
    score: 0.57145303,
    show: {
      id: 1476,
      url: "https://www.tvmaze.com/shows/1476/in-search-of",
      name: "In Search of.....",
      type: "Documentary",
      language: "English",
      genres: ["Mystery", "History", "Supernatural"],
      status: "Ended",
      runtime: 30,
      averageRuntime: 30,
      premiered: "1977-04-17",
      ended: "2002-11-22",
      officialSite: null,
      schedule: {
        time: "",
        days: [],
      },
      rating: {
        average: null,
      },
      weight: 43,
      network: {
        id: 72,
        name: "Syndication",
        country: {
          name: "United States",
          code: "US",
          timezone: "America/New_York",
        },
        officialSite: null,
      },
      webChannel: null,
      dvdCountry: null,
      externals: {
        tvrage: 3962,
        thetvdb: 71309,
        imdb: "tt0074007",
      },
      image: {
        medium:
          "https://static.tvmaze.com/uploads/images/medium_portrait/8/21127.jpg",
        original:
          "https://static.tvmaze.com/uploads/images/original_untouched/8/21127.jpg",
      },
      summary:
        "<p>Leonard Nimoy, hosts and narrates this documentary series that takes you to the world of Unsolved Mysteries and those strange and unusual things in the world that defy explanation and often understanding. The world is filled with unexplained mysteries, paranormal phenomena, strange creatures, and other things that go bump in the night. The topics are entertaining and engrossing. Lost civilizations, extraterrestrials, myths and monsters, missing persons, magic and witchcraft, unexplained phenomena. In Search Of cameras travel the world, seeking out these great mysteries. This program was the result the work of scientists, researchers and a group of highly-skilled technicians and results in a series of programs that are varied and each is worth viewing.</p><p>.</p>",
      updated: 1527446453,
      _links: {
        self: {
          href: "https://api.tvmaze.com/shows/1476",
        },
        previousepisode: {
          href: "https://api.tvmaze.com/episodes/133299",
        },
      },
    },
  },
  {
    score: 0.5706897,
    show: {
      id: 18904,
      url: "https://www.tvmaze.com/shows/18904/strip-search",
      name: "Strip Search",
      type: "Reality",
      language: "English",
      genres: [],
      status: "Ended",
      runtime: 30,
      averageRuntime: 30,
      premiered: "2005-05-28",
      ended: "2005-07-14",
      officialSite: null,
      schedule: {
        time: "",
        days: [],
      },
      rating: {
        average: null,
      },
      weight: 9,
      network: {
        id: 55,
        name: "VH1",
        country: {
          name: "United States",
          code: "US",
          timezone: "America/New_York",
        },
        officialSite: null,
      },
      webChannel: null,
      dvdCountry: null,
      externals: {
        tvrage: null,
        thetvdb: null,
        imdb: null,
      },
      image: null,
      summary:
        "<p>The series follows the search for a new troupe of male strippers from audition to the final live show.</p>",
      updated: 1467504494,
      _links: {
        self: {
          href: "https://api.tvmaze.com/shows/18904",
        },
        previousepisode: {
          href: "https://api.tvmaze.com/episodes/854799",
        },
      },
    },
  },
];
describe("HomeView", () => {
  let wrapper = null;
  let store = null;
  beforeEach(() => {
    // render the component
    wrapper = shallowMount(HomeView, {
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
          GenreListComponent,
          ShowComponent,
          RouterLink: RouterLinkStub,
        },
      },
    });
    store = useShowsStore();
    store.shows = mockShows;
    store.searchText = "";
    store.loading = false;
    store.searchResults = mockSearchShows;
    store.genres = ["Drama", "Action", "Science-Fiction"];
  });

  it("renders home view with genre list", () => {
    expect(wrapper.findAll(".genre-name")).toHaveLength(3);
  });
  it("renders search view", async () => {
    await store.$patch({ searchText: "Arrow" });
    //set store to search text
    expect(wrapper.findAll(".genre-name")).toHaveLength(0);
  });
  it("should do a search", async () => {
    await store.$patch({ searchText: "search" });
    //set store to search text
    expect(wrapper.findAll(".show")).toHaveLength(10);
  });
});
