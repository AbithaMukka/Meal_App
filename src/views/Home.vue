<template>
  <div class="home">
    <div id="random-meal" v-if="!isLoading && !error">
      <meal-card :meal="randomMeal" />
    </div>
    <div id="loading" v-else>
      <b-spinner></b-spinner><br />
      <h4>Loading</h4>
    </div>
  </div>
</template>

<script>
import MealCard from "../components/MealCard.vue";
import { mapState } from "vuex";
export default {
  name: "Home",
  components: {
    MealCard,
  },
  data() {
    return {
      isLoading: false,
      // error: null,
    };
  },
  computed: {
    ...mapState(["randomMeal", "error"]),
  },
  created() {
    this.getRandomMealData();
  },
  methods: {
    async getRandomMealData() {
      this.isLoading = true;
      await this.$store.dispatch("getRandomMeal");
      this.isLoading = false;
    },
  },
};
</script>

<style>
.home {
  justify-content: center;
  background-color: #ccc6be;
  height: 90vh;
}
#random-meal {
  padding: 100px;
}
#loading {
  text-align: center;
}
@media only screen and (max-width: 567px) {
  #random-meal {
    padding: 10px;
  }
}
</style>
