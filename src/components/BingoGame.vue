<template>
  <div id="main-game">
    <header><h1>Silo Banko</h1></header>
    <div class="columns">
      <div class="column">
        <ul class="panel">
          <li
            v-for="num in maxNumbers"
            :id="[num]"
            :key="num"
            :class="[activeClass.white, `number-${num}`]"
          >
            {{ num }}
          </li>
        </ul>
      </div>
      <div class="column">
        <transition-group
          name="list"
          tag="ul"
          class="panel"
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
      maxNumbers: 90,
      numberPool: [],
      pickedNumbers: [],
      activeClass: {
        white: "white",
        black: "black"
      }
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
      this.numberPool = [...Array(this.maxNumbers).keys()].map(i => ++i);
      this.pickedNumbers = [];
      this.target = null;
      this.targetNum = null;
    },
    spin: function() {
      this.drawingInProcess = true;
      this.startDrawing();
      setTimeout(() => {
        this.stopDrawing();
        this.updateNumberPool();
        this.styleNumber();
        this.drawingInProcess = false;
      }, 3000);
    },
    reset: function() {
      this.targetNum = null;
      this.resetStyleNumber();

      this.init();
    },
    startDrawing: function() {
      this.target = setInterval(() => {
        const rndDrawIdx = Math.floor(Math.random() * this.numberPool.length);
        const draw = this.numberPool[rndDrawIdx];
        this.targetNum = draw;
      }, 100);
    },
    stopDrawing: function() {
      clearInterval(this.target);
    },
    updateNumberPool: function() {
      this.numberPool = this.numberPool.filter(num => {
        return num !== this.targetNum;
      });

      this.pickedNumbers = [...this.pickedNumbers, this.targetNum];
    },
    styleNumber: function() {
      const targetElements = document.querySelectorAll(
        `.number-${this.targetNum}`
      );
      targetElements.forEach(el => {
        el.classList.remove(this.activeClass.white);
        el.classList.add(this.activeClass.black);
      });
    },
    resetStyleNumber: function() {
      const targetElements = document.querySelectorAll(
        `.${this.activeClass.black}`
      );
      targetElements.forEach(el => {
        el.classList.remove(this.activeClass.black);
        el.classList.add(this.activeClass.white);
      });
    }
  }
};
</script>

<style>
#app {
  font-family: Helvetica, Arial, "Avenir", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.btn {
  padding: 10px 20px;
  font-weight: bold;
  background-color: #f5f5f5;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
}
.btn + .btn {
  margin-top: 10px;
}
.header {
  padding: 20px;
  background-color: #333;
}
.header > h1 {
  font-weight: bold;
  color: #fff;
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
  border: 1px solid #333;
  border-radius: 5px;
  font-size: 150pt;
  display: flex;
  align-items: center;
  justify-content: center;
}
.panel {
  margin: 0 auto;
  width: 500px;
  display: flex;
  flex-wrap: wrap;
}
.panel > li {
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.black {
  color: #fff;
  background-color: #333;
}
.bingo_container {
  display: flex;
  justify-content: space-around;
  max-width: 980px;
  margin: 50px auto;
}
.list-enter-active, .list-leave-active {
  transition: all 1s;
}
.list-enter /* .list-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateX(-30px);
}
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>
