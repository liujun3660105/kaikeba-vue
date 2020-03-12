<template>
  <div id="app">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- <Parent/>
    <Emit/>
    <On/> -->
    <Index/>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import Parent from './components/Parent'
// import Emit from './components/Emit'
// import On from './components/On'
// import Parent from './components/slot/Parent'
// import Index from './components/form/Index'
import Index from './components/lform/Index'

export default {
  name: 'App',
  components: {
    // HelloWorld,
    // Parent,
    // Emit,
    // On
    // Parent
    Index
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
