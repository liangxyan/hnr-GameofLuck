<template>
  <div id="home">
    <br /><br /><br />
    <h2>Welcome!</h2>
    <br />
    <p>Feeling bored? Test your luck right here hic hic hic</p>

    <h3>Instructions:</h3>
    <p>
      5 buttons, 10 rounds. Choose within 5 buttons and see if you picked the
      correct button within 10 tries. <br />
      No one really knows which button is THE ONE for each round!
    </p>
    <button v-on:click="start()" type="button">Start</button>
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
#home {
  padding-left: 5em;
  padding-top: 1em;
  color: black;
  height: 100%;
}

h2 {
  font-size: 3em;
}
#header {
  background-color: #2e70d3;
}

button {
  background-color: #2e70d3;
  border-color: #2e70d3;
  width: 100px;
  height: 40px;
  float: center;
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
  /*font-family: "Arial";*/
}

img {
  width: 100%;
  height: 700px;
}

#foot {
  background-color: #faedcd;
}
</style>
