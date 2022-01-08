<template>
  <div>
    <br /><br /><br />
    <h2>Round {{ this.counter }}</h2>
    <br />
    <table id="buttonRow" style="width: 85%">
      <thead></thead>
      <tbody>
        <td>
          <v-btn
            id="btn1"
            @click="
              matchNumber1();
              playSound();
            "
          >
            1
          </v-btn>
        </td>
        <td>
          <v-btn
            id="btn2"
            @click="
              matchNumber2();
              playSound();
            "
          >
            2
          </v-btn>
        </td>
        <td>
          <v-btn
            id="btn3"
            @click="
              matchNumber3();
              playSound();
            "
          >
            3
          </v-btn>
        </td>
        <td>
          <v-btn
            id="btn4"
            @click="
              matchNumber4();
              playSound();
            "
          >
            4
          </v-btn>
        </td>
        <td>
          <v-btn
            id="btn4"
            @click="
              matchNumber5();
              playSound();
            "
          >
            5
          </v-btn>
        </td>
      </tbody>
    </table>

    <v-spacer></v-spacer> <br />
    <v-container id="outcome">
      <v-col md="6" lg="6">
        <v-card v-if="counter > 1 && match == false" width="500px" id="fail">
          <v-card-text id="outcometxt">oops try again :P</v-card-text>
        </v-card>
      </v-col>
    </v-container>

    <v-dialog v-model="match" max-width="500" persistent>
      <v-card>
        <v-card-text>
          <br />
          Congrats! It took you {{ this.counter }} rounds!!
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue lighten-4" @click="playAgain()">
            Return to Start
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-dialog v-model="out" max-width="500" persistent>
      <v-card>
        <br />
        <v-card-text> Sorry! Out of tries :( </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue lighten-4" @click="playAgain()">
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
    playSound() {
      var sound1 =
        "http://soundbible.com/mp3/Air Plane Ding-SoundBible.com-496729130.mp3";
      var sound2 =
        "https://soundbible.com/mp3/Basketball Game-SoundBible.com-932524357.mp3";
      if (
        sound1 &&
        (this.currNumber != this.targetNumber || this.counter == 1)
      ) {
        var audio = new Audio(sound1);
        audio.play();
      } else {
        var audio2 = new Audio(sound2);
        audio2.play();
      }
    },
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

#outcome {
  padding-left: 30%;
}

#fail {
  background-color: lightgray;
}

#outcometxt {
  font-size: large;
  font-family: Helvetica;
}
</style>
