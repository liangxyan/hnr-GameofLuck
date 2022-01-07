<template>
  <v-app id="app">
    <!-- <v-toolbar dark color="blue darken-4 white--text text--lighten-3" id="bar">
      <v-toolbar-title> A Very Random Game </v-toolbar-title>
    </v-toolbar> -->
    <router-view></router-view>
  </v-app>
</template>

<script>
export default {};
</script>

<style scoped>
#bar {
  margin-top: 0;
  padding: 15px;
  font-family: "Remark";
}

#app {
  background-color: beige;
}
</style>
