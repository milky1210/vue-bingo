<template>
  <div
    id="main-game"
    class="tile is-ancestor"
  >
    <div
      id="numbers-column"
      class="tile is-8"
    >
      <ul class="numbers-container">
        <li
          v-for="n in numbers"
          :id="[n.number]"
          :key="n.number"
        >
          <transition name="fade">
            <button
              v-if="!n.isPicked"
              class="bingo-number"
              @click="n.isPicked = editable !== n.isPicked"
            >
              {{ n.number }}
            </button>
            <button
              v-else
              :class="['bingo-number', {picked: n.isPicked}]"
              @click="n.isPicked = editable !== n.isPicked"
            >
              {{ n.number }}
            </button>
          </transition>
        </li>
        <li
          v-for="n in presents"
          :id="[n.number]"
          :key="n.number"
        >
          <transition name="fade">
            <button
              v-if="!n.isPicked"
              class="bingo-number"
              @click="n.isPicked = editable !== n.isPicked"
            >
              {{ n.number }}等
            </button>
            <button
              v-else
              :class="['bingo-number', {picked: n.isPicked}]"
              @click="n.isPicked = editable !== n.isPicked"
            >
              {{ n.number }}等
            </button>
          </transition>
        </li>
      </ul>
    </div>
    <div
      id="draw-column"
      class="tile is-4 is-vertical is-parent"
    >
      <div
        class="tile is-child"
      >
        <last-three-numbers :numbers="lastThree" />
        <div
          class="bingo-roulette"
        >
          <p :class="['number-draw', animateTagetNum ? 'reveal-number reveal-number-animation' : '']">
            {{ targetNum > 0 ? targetNum : 'Q' }}
          </p>
        </div>
      </div>
      <div
        id="controls"
        class="tile is-child"
      >
        <div>
          <b-tooltip
            label="ビンゴを実行"
            position="is-bottom"
            type="is-light"
            size="is-small"
            delay="1000"
          >
            <b-button
              type="is-primary"
              size="is-medium"
              :disabled="drawingInProcess" 
              rounded
              outlined
              icon-left="play"
              @click="spin"
              @keyup.enter="spin"
            >
              ビンゴ
            </b-button>
          </b-tooltip>
          <b-tooltip
            label="ギフトを実行"
            position="is-bottom"
            type="is-light"
            size="is-small"
            delay="1000"
          >
            <b-button
              type="red"
              size="is-small"
              :disabled="drawingInProcess" 
              rounded
              outlined
              icon-left="gift"
              @click="spinGift"
              @keyup.enter="spin"
            >
              ギフト
            </b-button>
          </b-tooltip>
          <b-button
            type="is-text"
            rounded
            @click="reset"
          >
            初期化
          </b-button>
          <b-button
            rounded
            @click="editable=!editable"
          >
            <b-icon :icon="editable ? 'pencil' : 'lock'" />
          </b-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LastThreeNumbers from './LastThreeNumbers.vue'
export default {
  components: {
    LastThreeNumbers
    },
  data() {
    return {
      drawingInProcess: false,
      target: null,
      targetNum: null,
      animateTagetNum: false,
      maxNumber: 75,
      maxPresent: 7,
      quizRate: 0.3,
      editable: false,
      numbers: [],
      presents: [],
      pickedNumbers: [],
      pickedPresents: []
    };
  },
  computed: {
    lastThree: function() {
      return this.pickedNumbers.slice().reverse().slice(0, 3);
    }
  },
  watch: {
    numbers: {
      handler: function(val, oldVal) {
      localStorage.numbers = JSON.stringify(val);
      },
      deep: true
    },
    pickedNumbers: {
      handler: function(val, oldVal) {
      localStorage.pickedNumbers = JSON.stringify(val);
      },
      deep: true
    }
  },
  mounted() {
      if(localStorage.numbers) {
        this.numbers = JSON.parse(localStorage.numbers);
      }
      if(localStorage.pickedNumbers) {
        this.pickedNumbers = JSON.parse(localStorage.pickedNumbers);
      }
  },
  created() {
    this.init();
    var vm = this
    window.addEventListener('keyup', function(event) {
        if (event.keyCode == 13) { 
          vm.spin();
        }
      });
  },
  methods: {
    init: function() {
      if(this.numbers.length === 0) {
        this.numbers = [...Array(this.maxNumber).keys()].map(i => ({number: ++i, isPicked: false}));
      }
      if(this.presents.length === 0) {
        this.presents = [...Array(this.maxPresent).keys()].map(i => ({number: ++i, isPicked: false}));
      }
      if(this.pickedNumbers.length === 0) {
      this.pickedNumbers = [];
      }
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
    spinGift: function() {
      this.drawingInProcess = true;
      this.startDrawingGift();
      setTimeout(() => {
        this.stopDrawingGift();
        this.drawingInProcess = false;
      }, 3000);
    },
    reset: function() {
      if (confirm("初めからにする?")) {
        this.target = null;
        this.targetNum = null;
        localStorage.removeItem("numbers");
        localStorage.removeItem("pickedNumbers");
        this.target = null;
        this.pickedNumbers = [];
        this.numbers = [...Array(this.maxNumber).keys()].map(i => ({number: ++i, isPicked: false}));
        this.pickedPresents = [];
        this.presents = [...Array(this.maxPresent).keys()].map(i => ({number: ++i, isPicked: false}));
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
      this.animateTagetNum = true;
      setTimeout(() => {
        this.animateTagetNum = false;
      }, 1000)
      if (Math.random() < this.quizRate){
        this.targetNum = 0;
      }
      if(this.targetNum>0){
      this.numbers[this.targetNum-1].isPicked = true;
      this.pickedNumbers = [...this.pickedNumbers, this.targetNum];
      }
    },
    startDrawingGift: function() {
      this.target = setInterval(() => {
        const availableNumbers = this.presents.filter(n => !n.isPicked); 
        const rndDrawIdx =  Math.floor(Math.random() * availableNumbers.length);
        const draw = availableNumbers[rndDrawIdx];
        this.targetNum = draw.number;
      }, 100);
    },
    stopDrawingGift: function() {
      clearInterval(this.target);
      this.animateTagetNum = true;
      setTimeout(() => {
        this.animateTagetNum = false;
      }, 1000)
      this.presents[this.targetNum-1].isPicked = true;
      this.pickedPresents = [...this.pickedNumbers, this.targetNum]
    },
  }
};
</script>

<style lang="scss" scoped>
@import "~bulma/sass/utilities/_all";

#controls {
  display: flex;
  align-items: flex-end;
  justify-content: center;
}
#controls > div {
  display: flex;
  align-items: center;
}

.bingo-roulette {
  margin-top: 50px;
}
ul {
  list-style: none;
  padding: 0;
}

.number-draw {
  width: 200px;
  height: 200px;
  margin: 0 auto 20px;
  border-radius: 100px;
  color: #000;
  padding-top: 10px;
  background-color: rgba($dark, 0.3);
  font-size: 150pt;
  display: flex;
  align-items: center;
  justify-content: center;
}
.numbers-container {
  margin: 0 auto;
  border-radius: 30px;
  padding: 5px;
  box-shadow: 5px 5px 20px rgba($dark, 0.3);
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
}
.numbers-container > li {
  font-size: 20pt;
  width: 10%;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.bingo-number {
  font-size: 20pt;
  width: 60px;
  height: 60px;
  border-radius: 30px;
  padding-top: 2px;
  border: 1px solid rgba(#000, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
}
.picked {
  background: $primary;
  color: white;
  font-weight: bold;
  -webkit-box-shadow: 2px 2px 5px rgba($primary, 0.5);
  -moz-box-shadow: 2px 2px 5px rgba($primary, 0.5);
  box-shadow: 2px 2px 5px rgba($primary, 0.5);
}

.picked-number-enter-active {
  animation: bounce-in 1.0s;
}

@keyframes bounce-in {
  0% {
    opacity: 0;
    transform: scale(0.8);
    background-color: $dark;
    border: 10px rgba($dark, 0.5) solid;
  }
  50% {
    transform: scale(1.4);
    border: 10px rgba($dark, 0.5) solid;
  }
  100% {
    transform: scale(1);
  }
}

.reveal-number-animation {
  animation: reveal-number 1.0s;
}

@keyframes reveal-number {
  0% {
    opacity: 0;
    transform: scale(0.8);
    background-color: rgba($primary, 1);
  }
  50% {
    transform: scale(1.4);
  }
  100% {
    transform: scale(1);
  }
}

</style>
