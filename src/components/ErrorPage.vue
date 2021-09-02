<template>
  <div v-if="error" class="error-page">
    <h4>{{ error }}</h4>
    <button id="button" @click="refreshPage">Reload Page</button>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "ErrorPage",
  computed: {
    ...mapState(["error"]),
  },
  methods: {
    refreshPage() {
      window.location.reload();
    },
  },
};
</script>
