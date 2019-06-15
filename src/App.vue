<template>
  <div id="app">
 
    <Zcard></Zcard>
  </div>
</template>

<script>


import Zcard from './components/z-card';

export default {
  name: 'app',
  components: {
    Zcard
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
