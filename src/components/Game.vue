<template>
  <div>
    <div id="header">A Very Random Game</div>
    <div>
      Round {{ this.counter }} <br />
      <v-btn id="btn1" @click="matchNumber1()"> 1 </v-btn>
      <v-btn id="btn2" @click="matchNumber2()"> 2 </v-btn>
      <v-btn id="btn3" @click="matchNumber3()"> 3 </v-btn>
      <v-btn id="btn4" @click="matchNumber4()"> 4 </v-btn>
      <v-btn id="btn4" @click="matchNumber5()"> 5 </v-btn>
    </div>

    <v-dialog v-model="match" max-width="500">
      <v-card>
        <v-card-text>
          Congrats! It took you {{ this.counter }} rounds!!
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" @click="playAgain()">
            Play Again
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-dialog v-model="out" max-width="500">
      <v-card>
        <v-card-text> Sorry! Out of tries :( </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" @click="playAgain()">
            Play Again
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      counter: 1,
      currNumber: 0,
      targetNumber: 0,
      match: false,
      out: false,
    };
  },
  methods: {
    matchNumber1() {
      this.currNumber = 1;
      this.targetNumber = Math.floor(Math.random() * (4 - 1 + 1) + 1);
      if (this.targetNumber == this.currNumber && this.counter > 1) {
        console.log("Congrats!", this.counter);
        this.match = true;
      } else {
        if (this.counter < 10) {
          this.counter++;
        }
      }
      if (this.counter == 10) {
        this.out = true;
      }
      console.log(this.targetNumber);
      console.log(this.currNumber);
    },
    matchNumber2() {
      this.currNumber = 2;
      this.targetNumber = Math.floor(Math.random() * (4 - 1 + 1) + 1);
      if (this.targetNumber == this.currNumber && this.counter > 1) {
        //this.counter = 0;
        console.log("Congrats!", this.counter);
        this.match = true;
      } else {
        if (this.counter < 10) {
          this.counter++;
        }
      }
      if (this.counter == 10) {
        this.out = true;
      }
      console.log(this.targetNumber);
      console.log(this.currNumber);
    },
    matchNumber3() {
      this.currNumber = 3;
      this.targetNumber = Math.floor(Math.random() * (4 - 1 + 1) + 1);
      if (this.targetNumber == this.currNumber && this.counter > 1) {
        //this.counter = 0;
        console.log("Congrats!", this.counter);
        this.match = true;
      } else {
        if (this.counter < 10) {
          this.counter++;
        }
      }
      if (this.counter == 10) {
        this.out = true;
      }
      console.log(this.targetNumber);
      console.log(this.currNumber);
    },
    matchNumber4() {
      this.currNumber = 4;
      this.targetNumber = Math.floor(Math.random() * (4 - 1 + 1) + 1);
      if (this.targetNumber == this.currNumber && this.counter > 1) {
        //this.counter = 0;
        console.log("Congrats!", this.counter);
        this.match = true;
      } else {
        if (this.counter < 10) {
          this.counter++;
        }
      }
      if (this.counter == 10) {
        this.out = true;
      }
      console.log(this.targetNumber);
      console.log(this.currNumber);
    },
    matchNumber5() {
      this.currNumber = 5;
      this.targetNumber = Math.floor(Math.random() * (4 - 1 + 1) + 1);
      if (this.targetNumber == this.currNumber && this.counter > 1) {
        //this.counter = 0;
        console.log("Congrats!", this.counter);
        this.match = true;
      } else {
        if (this.counter < 10) {
          this.counter++;
        }
      }
      if (this.counter == 10) {
        this.out = true;
      }
      console.log(this.targetNumber);
      console.log(this.currNumber);
    },
    playAgain() {
      this.counter = 0;
      this.nodeDetails = false;
      this.out = false;
      this.$router.push({
        path: "/",
      });
    },
  },
};
</script>

<style scoped>
#header {
  background-color: #2e70d3;
}
</style>
