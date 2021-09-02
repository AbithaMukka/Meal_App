<template>
  <div class="search-details">
    <div class="searching-text">
      Searching results for : <b>{{ this.$route.params.searchText }}</b>
    </div>
    <div v-if="!isLoading && !error">
      <div v-if="meals">
        <b-container>
          <b-row cols="1" cols-sm="2" cols-md="3" cols-lg="4">
            <b-col id="meal" v-for="meal in meals" :key="meal.idMeal">
              <meal-card :meal="meal" />
            </b-col>
          </b-row>
        </b-container>
      </div>
      <div v-else class="no-meals">
        <h4>No Meals Found.</h4>
        <h4>Try searching with another meal</h4>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
import MealCard from "./MealCard.vue";

export default {
  name: "SearchDetails",

  components: {
    MealCard,
  },
  data() {
    return {
      searchInput: null,
      isLoading: false,
      meals: [],
    };
  },

  computed: {
    ...mapState(["searchData", "error"]),
  },
  created() {
    this.$watch(
      () => this.$route.params.searchText,
      () => {
        this.getSearchDataResults();
      }
    );
    this.getSearchDataResults();
  },

  methods: {
    async getSearchDataResults() {
      this.searchInput = this.$route.params.searchText;
      if (this.searchInput.trim() !== "") {
        this.isLoading = true;
        await this.$store.dispatch("getSearchData", this.searchInput);
        this.meals = this.searchData;
        this.isLoading = false;
      }
    },
  },
};
</script>

<style scoped>
.search-details {
  background-color: #ccc6be;
  min-height: 100vh;
}
h4 {
  text-align: center;
}
.searching-text {
  font-size: 25px;
  padding: 10px;
}
.no-meals {
  padding: 200px;
  height: 100vh;
}
</style>
