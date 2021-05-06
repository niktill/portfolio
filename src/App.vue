<template>
  <div id="app">
    <Banner />
    <Experience />
    <Featured />
  </div>
</template>

<script>
// import Nav from './components/Nav.vue';
import Banner from './components/Banner.vue';
import Experience from './components/Experience.vue';
import Featured from './components/Featured.vue';

export default {
  name: 'App',
  components: {
    // Nav,
    Banner,
    Experience,
    Featured,
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
  background-color: #24282c !important;
  color: white !important;
}
button.github-color:hover,
a.github-color:hover {
  background-color: #35383a !important;
}
.linkedin-color {
  background-color: #0e76a8 !important;
}
button.linkedin-color:hover,
a.linkedin-color:hover {
  background-color: #096c9b !important;
}
.facebook-color {
  background-color: #4267b2 !important;
}
button.facebook-color:hover,
a.facebook-color:hover {
  background-color: #2a52a3 !important;
}
.gmail-color {
  background-color: #d44638 !important;
}
button.gmail-color:hover,
a.gmail-color:hover {
  background-color: #bb3024 !important;
}
</style>
