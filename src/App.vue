<template>
  <div id="app">
    <Nav />
    <Banner />
    <Experience />
  </div>
</template>

<script>
import Nav from './components/Nav.vue';
import Banner from './components/Banner.vue';
import Experience from './components/Experience.vue';

export default {
  name: 'App',
  components: {
    Nav,
    Banner,
    Experience,
  },
};
</script>

<style>
#app {
  font-family: 'Open Sans', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}
.github-color {
  background-color: #24292e !important;
}
.linkedin-color {
  background-color: #0e76a8 !important;
}
.facebook-color {
  background-color: #4267b2 !important;
}
.gmail-color {
  background-color: #d44638 !important;
}
</style>
