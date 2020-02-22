<template>
  <div id="app">
    <Header />
    <Home msg="Welcome to Your Vue.js App"/>
    <Footer />
  </div>
</template>

<script>
import Footer from './components/Footer.vue';
import Header from './components/Header.vue';
import Home from './components/Home.vue';

export default {
  name: 'App',
  components: {
    Footer,
    Header,
    Home,
  }
}
</script>

<style>
body {
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
