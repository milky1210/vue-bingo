<template>
  <div
    id="app"
  >
    <div class="container is-fluid">
      <BingoGame />
    </div>
    <footer class="footer">
      <img
        class="logo"
        src="./assets/silo-banko-logo@3x.png"
      >
    </footer>
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
  font-family: Helvetica, Arial, Avenir, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.logo {
  width: 200px;
}
footer {
}
</style>
