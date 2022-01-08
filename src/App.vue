<template>
  <v-app id="app">
    <v-app-bar elevation="4" color="blue" id="appbar" app>
      <v-icon class="mx-5">mdi-gamepad-variant</v-icon>
      <v-app-bar-title> Game of Luck </v-app-bar-title>
      <v-spacer></v-spacer>
    </v-app-bar>
    <router-view></router-view>
  </v-app>
</template>

<script>
export default {};
</script>

<style>
#bar {
  margin-top: 0;
  padding: 15px;
  font-family: "Remark";
}

#app {
  background-color: beige;
}

#appbar {
  color: azure;
  font-size: 24px;
  width: 100%;
}
</style>
