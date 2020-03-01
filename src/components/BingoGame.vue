<template>
  <div id="main-game">
    <div class="columns">
      <div class="column">
        <ul class="panel">
          <li
            v-for="n in numbers"
            :id="[n.number]"
            :key="n.number"
            :class="[`number-${n.number}`, {picked: n.isPicked}]"
          >
            {{ n.number }}
          </li>
        </ul>
      </div>
      <div class="column">
        <transition-group
          name="list"
          tag="ul"
          class="panel last_three"
        >
          <li
            v-for="n in lastThree"
            :key="n"
          >
            {{ n }}
          </li>
        </transition-group>
        <div class="container">
          <div class="bingo_roulette">
            <p class="bingoNumberDraw">
              {{ targetNum }}
            </p>
            <b-button
              type="is-primary"
              :disabled="drawingInProcess" 
              @click="spin"
            >
              Træk et nummer!
            </b-button>
            <b-button
              type="is-light"
              @click="reset"
            >
              Nulstil
            </b-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      drawingInProcess: false,
      target: null,
      targetNum: null,
      maxNumber: 90,
      numbers: [],
      pickedNumbers: []
    };
  },
  computed: {
    lastThree: function() {
      return this.pickedNumbers.slice().reverse().slice(0, 3);
    }
  },
  created() {
    this.init();
  },
  methods: {
    init: function() {
      this.numbers = [...Array(this.maxNumber).keys()].map(i => ({number: ++i, isPicked: false}));
      this.pickedNumbers = [];
      this.target = null;
      this.targetNum = null;
    },
    spin: function() {
      this.drawingInProcess = true;
      this.startDrawing();
      setTimeout(() => {
        this.stopDrawing();
        this.drawingInProcess = false;
      }, 3000);
    },
    reset: function() {
      if (confirm("Vil du nulstille og starte forfra?")) {
      this.targetNum = null;

      this.init();
        
      }
    },
    startDrawing: function() {
      this.target = setInterval(() => {
        const availableNumbers = this.numbers.filter(n => !n.isPicked); 
        const rndDrawIdx =  Math.floor(Math.random() * availableNumbers.length);
        const draw = availableNumbers[rndDrawIdx];
        this.targetNum = draw.number;
      }, 100);
    },
    stopDrawing: function() {
      clearInterval(this.target);
      this.numbers[this.targetNum-1].isPicked = true;
      this.pickedNumbers = [...this.pickedNumbers, this.targetNum]
    },
  }
};
</script>

<style>
#app {
  font-family: Helvetica, Arial, "Avenir", sans-serif;
  font-size: 30pt;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
ul {
  list-style: none;
  padding: 0;
}
.view {
  margin: 20px auto;
  width: 50px;
  height: 50px;
  color: #fff;
  background-color: #333;
  display: flex;
  align-items: center;
  justify-content: center;
}
.bingoNumberDraw {
  width: 250px;
  height: 250px;
  margin: 0 auto 20px;
  border-radius: 125px;
  background-color: lightgray;
  font-size: 150pt;
  display: flex;
  align-items: center;
  justify-content: center;
}
.picked {
  border-radius: auto;
  background: #00A99D;
  color: white;
  -webkit-box-shadow: 0px 6px 0px #aaa;
  -moz-box-shadow: 0px 6px 0px #aaa;
  box-shadow: 0px 6px 0px #aaa;
}
.panel {
  margin: 0 auto;
  width: 700px;
  display: flex;
  flex-wrap: wrap;
}
.panel > li {
  font-size: 20pt;
  width: 70px;
  height: 70px;
  border-radius: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.black {
  color: #fff;
  background-color: #333;
  font-weight: bold;
}
.bingo_container {
  display: flex;
  justify-content: space-around;
  max-width: 980px;
  margin: 50px auto;
}
.list-enter-active, .list-leave-active {
  transition: all 0.5s;
}
.list-enter /* .list-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateX(-5px);
}
.list-leave-to {
  opacity: 0;
  transform: translateX(5px);
}
.last_three {
  align-items: center;
}
</style>
