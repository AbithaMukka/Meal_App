<template>
  <div class="page-not-found">
    <h3>404 Page Not Found</h3>
    To go to Home Page
    <router-link to="/" name="Home"><p>click here</p></router-link>
  </div>
</template>

<script>
export default {
  name: "PageNotFound",
};
</script>

<style scoped>
.page-not-found {
  background-color: #ccc6be;
  text-align: center;
  padding: 200px;
  height: 90vh;
}
</style>
