<template>
  <div class="home">
    <h1>Welcome to the Strave Fixer Tool</h1>
    <p>Before you get started, you will need to export your strave gdx file.</p>
    <v-btn
      to="/upload"
      color="primary"
      class="button"
    >
      Get Started
    </v-btn>
    <br>
    <img src="../assets/Exporting your Data and Bulk Export – Eng.png">
  </div>
</template>

<script>
export default {
  name: 'HomePage',
};
</script>

<style lang="scss" scoped>
  .home {
    text-align: center;
    padding: 25px;

    .button {
      margin: 25px;
    }

    img {
      width: 100%;
      max-width: 600px;
    }
  }
</style>
