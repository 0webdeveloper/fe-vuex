<template>
  <div id="app">
    <Navbar />
    <router-view/>
      <footer>
          <div class="container">
              footer
          </div>
      </footer>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
export default {
    components: {
        Navbar
    }
}
</script>

<style lang="scss">
:root {
    --bs-highlight-bg: #fff3cd;
    --white-color: rgba(255, 255, 255, .5);
    --red-color: #e6615e;
    --fluent: linear-gradient(to right, #C4D8D5, #D3D1C5);
    --antiquewhite: antiquewhite;
    --black: #040605;
    --white: #f5f7f6;
    --blue-white: #e1e7e8;
    --pink: #fd588a;
    --tangerine: #f86a6c;
    --border-color: #ced4da;
    --font-color: #2c3e50;
}
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: var(--font-color);
}
.container {
    max-width: 1170px;
    margin: 0 auto;
    outline: 1px solid var(--alomost-white);
}

.container__flex {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
</style>
