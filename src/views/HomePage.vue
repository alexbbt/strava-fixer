<template>
  <div class="home">
    <h1>Welcome to the Strave Fixer Tool</h1>
    <p>Before you get started, you will need to export your strave gdx file.</p>
    <router-link class="button button-primary" to="/upload">Get Started</router-link>
    <br>
    <img src="../assets/Exporting your Data and Bulk Export – Eng.png">
  </div>
</template>

<script>
export default {
  name: 'home-page',
};
</script>

<style lang="scss" scoped>
  .home {
    text-align: center;

    img {
      width: 100%;
      max-width: 600px;
    }
  }
</style>
