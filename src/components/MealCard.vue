<template>
  <div class="meal-card">
    <div v-if="meal">
      <b-card
        :img-src="meal.strMealThumb"
        img-alt="It is meal image"
        style="max-width: 20rem"
        id="card"
        @click="getMealDetails(meal.idMeal)"
      >
        <b-card-text>
          <p id="meal-name">
            <b> {{ meal.strMeal }}</b>
          </p>
          <p><b>Category:</b> {{ meal.strCategory }}</p>
        </b-card-text>
      </b-card>
    </div>
    <div v-else>
      <div class="loading">
        <b-spinner></b-spinner><br />
        <h4>Loading</h4>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MealCard",
  props: ["meal"],

  methods: {
    getMealDetails(id) {
      this.$router.push({ name: "MealDetails", params: { id } });
    },
  },
};
</script>

<style>
.meal-card {
  height: 100%;
}
.card {
  margin: auto;
  height: 100%;
  margin-top: 10px;
  margin-bottom: 10px;
}
#meal-name {
  text-align: center;
  font-size: 20px;
}
</style>
