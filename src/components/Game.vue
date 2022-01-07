<template>
  <div>
    <br /><br /><br />
    <h2>Round {{ this.counter }} <br /></h2>
    <table id="buttonRow" style="width: 85%">
      <thead></thead>
      <tbody>
        <td>
          <v-btn id="btn1" @click="matchNumber1()"> 1 </v-btn>
        </td>
        <td>
          <v-btn id="btn2" @click="matchNumber2()"> 2 </v-btn>
        </td>
        <td><v-btn id="btn3" @click="matchNumber3()"> 3 </v-btn></td>
        <td><v-btn id="btn4" @click="matchNumber4()"> 4 </v-btn></td>
        <td><v-btn id="btn4" @click="matchNumber5()"> 5 </v-btn></td>
      </tbody>
    </table>

    <v-spacer></v-spacer>
    <v-container v-if="counter > 1 && match == false">
      oops try again :P
    </v-container>

    <v-dialog v-model="match" max-width="500" persistent>
      <v-card>
        <v-card-text>
          Congrats! It took you {{ this.counter }} rounds!!
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" @click="playAgain()">
            Return to Start
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-dialog v-model="out" max-width="500" persistent>
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
      this.targetNumber = Math.floor(Math.random() * (5 - 1 + 1) + 1);
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
      this.targetNumber = Math.floor(Math.random() * (5 - 1 + 1) + 1);
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
      this.targetNumber = Math.floor(Math.random() * (5 - 1 + 1) + 1);
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
      this.targetNumber = Math.floor(Math.random() * (5 - 1 + 1) + 1);
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
      this.targetNumber = Math.floor(Math.random() * (5 - 1 + 1) + 1);
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

h2 {
  padding-left: 10em;
  padding-top: 20px;
}

#buttonRow {
  padding-left: 15%;
  padding-top: 20px;
}
#btn1,
#btn2,
#btn3,
#btn4,
#btn5 {
  min-width: 100%;
  height: 150px;
}
</style>
