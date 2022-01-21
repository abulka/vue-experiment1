<template>
  <div id="app">
    <ManualWiring msg="andy"/>
    <button-counter></button-counter>
    <Comp2 msg="freddy"/>
    <button-counter></button-counter>
    <img alt="Vue logo" src="https://vuejs.org/images/logo.png">
    <HelloWorld msg="Welcome ANDY to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Comp2 from './components/comp2.vue'

import "https://g200kg.github.io/webaudio-controls/webaudio-controls.js"
import ManualWiring from './components/ManualWiring.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    Comp2,
    ManualWiring,
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
