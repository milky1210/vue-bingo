<template>
  <div
    id="app"
  >
    <div
      id="mainstage"
      class="container is-fluid"
    >
      <BingoGame />
    </div>
    <footer class="footer">
      <div class="columns is-centered">
        <img
          class="logo"
          src="./assets/silo-banko-logo@3x.png"
        >
      </div>
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

  display: flex;
  min-height: 100vh;
  flex-direction: column;
}
.logo {
  margin: 20px;
  width: 200px;
  
}
.footer {
  flex: 1;
}

#mainstage {
  padding: 3rem;
}
</style>
