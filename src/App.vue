<script setup>
// imports
import { RouterLink, RouterView, useRoute } from "vue-router";
import { useShowsStore } from "./stores/shows";
import { computed } from "vue";
import { ref } from "vue";
// fetch shows on mount
const { fetchShows, searchShow } = useShowsStore();
fetchShows();

// component variables
const searchText = ref("");
const route = useRoute();
const routeName = computed(() => route.name);
// form submit handler
const onSubmit = (e) => {
  e.preventDefault();
  searchShow(searchText.value);
};
const clearSearch = () => {
  searchText.value = "";
  searchShow("");
};
</script>

<template>
  <header>
    <div class="wrapper">
      <div class="menu">
        <router-link to="/">
          <img
            alt="Vue logo"
            class="logo"
            src="@/assets/logo.svg"
            width="50"
            height="50"
          />
        </router-link>
        <nav>
          <RouterLink
            v-bind:class="
              routeName === 'detail' ? 'router-link-exact-active' : ''
            "
            to="/"
            >Home</RouterLink
          >
        </nav>
      </div>

      <nav class="search" v-if="routeName !== 'detail'">
        <form @submit="onSubmit">
          <div class="search-bar">
            <span class="icon" id="search-icon">
              <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20">
                <path
                  d="m15.938 17-4.98-4.979q-.625.458-1.375.719Q8.833 13 8 13q-2.083 0-3.542-1.458Q3 10.083 3 8q0-2.083 1.458-3.542Q5.917 3 8 3q2.083 0 3.542 1.458Q13 5.917 13 8q0 .833-.26 1.583-.261.75-.719 1.375L17 15.938ZM8 11.5q1.458 0 2.479-1.021Q11.5 9.458 11.5 8q0-1.458-1.021-2.479Q9.458 4.5 8 4.5q-1.458 0-2.479 1.021Q4.5 6.542 4.5 8q0 1.458 1.021 2.479Q6.542 11.5 8 11.5Z"
                />
              </svg>
            </span>
            <input
              type="text"
              v-model="searchText"
              placeholder="Search show..."
            />
            <span
              class="icon"
              id="clear-icon"
              v-if="searchText !== ''"
              @click="clearSearch"
            >
              <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20">
                <path
                  d="M6.062 15 5 13.938 8.938 10 5 6.062 6.062 5 10 8.938 13.938 5 15 6.062 11.062 10 15 13.938 13.938 15 10 11.062Z"
                />
              </svg>
            </span>
          </div>
          <button type="submit">Search</button>
        </form>
      </nav>
    </div>
  </header>

  <div class="container">
    <div class="container-card">
      <RouterView />
    </div>
  </div>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 1rem;
}
header {
  display: flex;
  align-items: center;
  justify-content: center;
}

nav {
  text-align: center;
}

nav a.router-link-exact-active {
  color: hsla(160, 100%, 37%, 1);
}
nav a {
  color: var(--color-text);
}
nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}
.search {
  padding: 10px;
  width: 100%;
}
.search a {
  border-left: none;
}
.wrapper {
  flex-direction: row;
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  max-width: 700px;
}
.search-bar {
  display: flex;
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border-radius: 5px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  background-color: var(--vt-c-text-light-1);
}
.search form {
  display: flex;
  align-items: center;
  justify-content: center;
}
.search button {
  border-radius: 5px;
  padding: 10px;
  height: 40px;
  background-color: var(--button-background-color);
  border: 0;
  margin-left: 10px;
}
.search-bar .icon {
  width: 20px;
  height: 20px;
  margin-right: 10px;
  fill: var(--vt-c-white-soft);
}
.search-bar input {
  background-color: var(--vt-c-text-light-1);
  border: 0;
  width: 100%;
  color: var(--vt-c-white-soft);
}
.search-bar input:focus {
  outline: none !important;
}
.menu {
  display: flex;
  align-items: center;
  flex: 1;
}
.container {
  align-items: center;
  justify-content: center;
  flex: 1;
}
.container-card {
  max-width: 700px;
  margin: 10px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  border: 1px rgba(0, 0, 0, 0.25) solid;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
}
@media (min-width: 1024px) {
  .search-bar {
    width: 250px;
  }
  .search {
    width: auto;
  }

  .wrapper {
    flex-direction: row;
  }
  .container {
    display: flex;
  }
}
</style>
