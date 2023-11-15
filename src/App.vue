<template>
  <div
    id="app"
  >
    <header class="header">
      <div class="columns is-centered">
        <img
          class="logo"
          src="./assets/yamana_marrige.png"
        >
      </div>
    </header>
    <div
      id="mainstage"
      class="container is-fluid"
    >
      <BingoGame />
    </div>
    <footer class="footer">
      <div class="columns is-centered">
        ©︎milky開発
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
  background-color: #000;
}
.logo {
  margin: 20px;
  width: 300px;
  
}

#mainstage {
  padding: 3rem;
  border-radius: 10px;
  background-color: #ffffff;
}
</style>
