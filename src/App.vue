<template>
<div class="continer">
  <HelloWorld/>
  <router-view/>
  <AddZakl/>
</div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import AddZakl from './components/AddZakl.vue';

export default {
  name: 'App',
  components: {
    HelloWorld,
    AddZakl
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
