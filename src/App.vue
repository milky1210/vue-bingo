<template>
  <div id="app">
    <BingoGame />
  </div>
</template>

<script>
import BingoGame from './components/BingoGame.vue'

export default {
  name: 'App',
  components: {
    BingoGame
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
