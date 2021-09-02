<template>
  <div class="meal-details">
    <div v-if="!isLoading && !error">
      <div>
        <table>
          <tr>
            <td id="meal-heading">
              <h5>
                <b>{{ mealDetails.strMeal }}</b>
              </h5>
            </td>
            <td id="ingrediants-heading">
              <h5>Ingredients</h5>
            </td>
          </tr>
          <tr>
            <td id="meal-image">
              <b-img
                :src="mealDetails.strMealThumb"
                alt="It is meal image"
                fluid
              ></b-img>
            </td>
            <div id="ingredients-table">
              <table style="width: 95%">
                <tr>
                  <th>Ingredients</th>
                  <th>Measures</th>
                </tr>
                <tr
                  v-for="list in getIngredientsWithMeasuresList"
                  :key="list.id"
                >
                  <td>{{ list.ingredient }}</td>
                  <td>{{ list.measure }}</td>
                </tr>
              </table>
            </div>
          </tr>
        </table>
      </div>
      <br />
      <h3>Instructions</h3>
      <p class="instructions">{{ mealDetails.strInstructions }}</p>
      <div class="video">
        <b-embed
          type="iframe"
          :src="getYoutubeVideo(mealDetails.strYoutube)"
        ></b-embed>
      </div>
    </div>
    <div v-else>
      <b-spinner></b-spinner><br />
      <b>Loading</b>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";
export default {
  name: "MealDetails",
  data() {
    return {
      isLoading: false,
    };
  },
  computed: {
    ...mapState(["mealDetails", "error"]),
    ...mapGetters(["getIngredientsWithMeasuresList"]),
  },
  created() {
    this.getMealDetailsThroughId(this.$route.params.id);
  },
  methods: {
    async getMealDetailsThroughId(id) {
      this.isLoading = true;
      await this.$store.dispatch("getMealDetailsById", id);
      this.isLoading = false;
    },
    getYoutubeVideo(videoUrl) {
      return videoUrl.replace("watch?v=", "embed/");
    },
  },
};
</script>

<style scoped>
.meal-details {
  background-color: #ccc6be;
  text-align: center;
  padding: 40px;
}
#meal-heading {
  width: 30%;
}
.instructions {
  text-align: center;
}
#meal-image {
  width: 30%;
}
.img-fluid {
  max-width: 60%;
  height: auto;
}
#ingredients-table {
  width: 100%;
}
th {
  width: 50%;
}
.video {
  max-width: 100%;
  margin: auto;
}
#ingrediants-heading {
  width: 60%;
}
</style>
