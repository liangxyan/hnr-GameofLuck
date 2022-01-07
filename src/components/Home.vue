<template>
  <div id="home">
    <h1 id="shopname">A Very Random Game</h1>
    <div id="foot">
      <br />
      <p>hic hic hic</p>
      <p>HelloWorld</p>
      <button v-on:click="start()" type="button">Start</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  components: {},
  methods: {
    start() {
      this.$router.push({
        path: "start",
      });
    },
  },
};
</script>

<style scoped>
#shopname {
  font-size: 70px;
  margin-top: 0;
  padding-top: 25px;
  font-style: italic;
  font-family: "Remark";
}

#home {
  font-size: 20px;
  color: black;
  height: 100%;
}
button {
  background-color: #f3cfab;
  border-color: #f3cfab;
  width: 100px;
  height: 40px;
  float: none;
  right: 10cm;
  max-width: 70%;
  margin: 50px;
  margin-top: 10px;
  padding: 0 5px;
  box-sizing: border-box;
  font-size: 20px;
  border-radius: 10px;
  border-width: 1px;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  font-style: italic;
}

button:hover {
  border: 2px solid #f3cfab;
  background-color: #f3cfab;
  color: white;
  border-color: #f3cfab;
  width: 100px;
  cursor: pointer;
}

p {
  font-size: 20px;
  font-family: "Arial";
}

img {
  width: 100%;
  height: 700px;
}

#foot {
  background-color: #faedcd;
}
</style>
