<template>
  <div
    id="component"
    class="container"
  >
    <div class="container has-text-centered">
      <h1 class="title is-2 has-text-dark">
        直近の数字↓
      </h1>
      <hr>
    </div>
    <div class="container">
      <transition-group
        name="list"
        tag="ul"
        class="numbers-container"
      >
        <li
          v-for="n in numbers"
          :key="n"
          class="bingo-number"
        >
          {{ n }}
        </li>
      </transition-group>
    </div>
  </div>
</template>

<script>
export default {
    props: {
        numbers: {
            type: Array,
            default: () => []
        }
    }
}
</script>

<style scoped lang="scss">
@import "~bulma/sass/utilities/_all";
#component {
  height: 200px;
}
.numbers-container {
  margin: 0 auto;
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
}
.bingo-number {
  font-size: 20pt;
  width: 70px;
  height: 70px;
  border-radius: 50px;
  margin: 5px;
  padding-top: 5px;
  border: 1px solid rgba(#000, 0.5);
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
}

.list-enter-active {
    animation: ease-in 1s;
}
.list-leave-active {
    animation: ease-out 1s;
}

@keyframes ease-in {
  0% {
    margin-left: -70px;;
    opacity: 0;
    transform: scale(0);
    border: solid rgba($primary, 0.5) 10px;
    
  }
  100% {
    transform: scale(1);
  }
}

@keyframes ease-out {
  0% {
    opacity: 1;
  }
  100% {
    transform: scale(0);
    margin-right: -70px;
  }
}
</style>