<template>

  <Drawer />
</template>

<script>
import Drawer from './components/Drawer.vue'

export default {
  name: 'App',
  components: {
    Drawer
  }
}
</script>

<style>

body {
  background-color: #293565;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  background-color: #2c3e50;
  color: white;
}
</style>
