<template>
  <div class="app-header">
    <b-navbar toggleable="lg" fixed="top" id="header">
      <router-link to="/" name="Home"
        ><b-img src="https://www.themealdb.com/images/logo-small.png"
      /></router-link>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav class="nav">
        <b-navbar-nav>
          <div class="search-input">
            <b-form v-on:submit.prevent>
              <input
                class="meal-search"
                type="text"
                name="search"
                v-model="search"
                placeholder="Search Meal"
                autocomplete="off"
              />
              <b-icon class="button" icon="search" @click="onSubmit"></b-icon>
            </b-form>
          </div>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>
<script>
export default {
  name: "Header",
  data() {
    return {
      search: null,
    };
  },
  methods: {
    onSubmit() {
      const searchText = this.search;
      this.$router.push({ name: "SearchDetails", params: { searchText } });
      this.search = "";
    },
  },
};
</script>

<style scoped>
#header {
  position: relative;
  background-color: #44311e;
}
.nav {
  justify-content: center;
}
.navbar-nav {
  display: inline;
  flex-direction: column;
}
.search-input {
  background: white;
  padding: 10px;
  margin: 10px;
}
.meal-search {
  border: 0px;
}
input:focus-visible {
  outline: 0px;
}
</style>
