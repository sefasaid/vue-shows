import { defineStore } from "pinia";
// Shows store
export const useShowsStore = defineStore({
  id: "_shows",
  state: () => ({
    genres: [],
    shows: [],
    loading: false,
    error: null,
    selectedShow: null,
    searchResults: [],
    searchText: "",
  }),
  getters: {
    getShowsByGenre: (store) => (genre) => {
      return store.shows
        .filter((show) => show.genres.includes(genre))
        .sort((a, b) => b.rating.average - a.rating.average);
    },
  },
  actions: {
    async fetchShows() {
      this.shows = [];
      this.loading = true;
      try {
        this.shows = await fetch("https://api.tvmaze.com/shows")
          .then((response) => response.json())
          .then((data) => {
            this.genres = [];
            data.forEach((_show) => {
              if (this.genres.indexOf(_show.genres[0]) == -1) {
                if (_show.genres[0]) {
                  this.genres.push(_show.genres[0]);
                }
              }
            });
            return data;
          });
      } catch (error) {
        this.error = error;
      } finally {
        this.loading = false;
      }
    },
    async getShowDetail(id) {
      this.loading = true;
      try {
        this.selectedShow = await fetch(
          "https://api.tvmaze.com/shows/" +
            id +
            "?embed[]=seasons&embed[]=cast&embed[]=images"
        ).then((response) => response.json());
      } catch (error) {
        this.error = error;
      } finally {
        this.loading = false;
      }
    },
    async searchShow(searchText) {
      this.searchText = searchText;
      if (searchText.trim() === "") return;
      this.loading = true;
      try {
        this.searchResults = await fetch(
          "https://api.tvmaze.com/search/shows?q=" +
            searchText +
            "&embed[]=seasons&embed[]=cast&embed[]=images"
        ).then((response) => response.json());
      } catch (error) {
        this.error = error;
      } finally {
        this.loading = false;
      }
    },
  },
});
