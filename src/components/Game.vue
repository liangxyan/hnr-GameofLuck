<template>
  <div>
    <div id="header">A Very Random Game</div>
    <div>
      Round {{ this.counter }} <br />
      <v-btn id="btn1" @click="matchNumber1()"> 1 </v-btn>
      <v-btn id="btn2" @click="matchNumber2()"> 2 </v-btn>
      <v-btn id="btn3" @click="matchNumber3()"> 3 </v-btn>
      <v-btn id="btn4" @click="matchNumber4()"> 4 </v-btn>
    </div>
    <p>test</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      counter: 1,
      currNumber: 0,
      targetNumber: 0,
    };
  },
  methods: {
    matchNumber1() {
      this.currNumber = 1;
      this.targetNumber = Math.floor(Math.random() * (4 - 1 + 1) + 1);
      if (this.targetNumber == this.currNumber && this.counter > 1) {
        this.counter = 0;
        console.log("Congrats!", this.counter);
      } else {
        this.counter++;
      }
      console.log(this.targetNumber);
      console.log(this.currNumber);
    },
    matchNumber2() {
      this.currNumber = 2;
      this.targetNumber = Math.floor(Math.random() * (4 - 1 + 1) + 1);
      if (this.targetNumber == this.currNumber && this.counter > 1) {
        this.counter = 0;
        console.log("Congrats!", this.counter);
      } else {
        this.counter++;
      }
      console.log(this.targetNumber);
      console.log(this.currNumber);
    },
    matchNumber3() {
      this.currNumber = 3;
      this.targetNumber = Math.floor(Math.random() * (4 - 1 + 1) + 1);
      if (this.targetNumber == this.currNumber && this.counter > 1) {
        this.counter = 0;
        console.log("Congrats!", this.counter);
      } else {
        this.counter++;
      }
      console.log(this.targetNumber);
      console.log(this.currNumber);
    },
    matchNumber4() {
      this.currNumber = 4;
      this.targetNumber = Math.floor(Math.random() * (4 - 1 + 1) + 1);
      if (this.targetNumber == this.currNumber && this.counter > 1) {
        this.counter = 0;
        console.log("Congrats!", this.counter);
      } else {
        this.counter++;
      }
      console.log(this.targetNumber);
      console.log(this.currNumber);
    },
  },
};
</script>

<style scoped>
#header {
  background-color: #2e70d3;
}
</style>
