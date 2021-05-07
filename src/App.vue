<template>
  <div id="app" class="animate__animated animate__fadeIn">
    <Banner />
    <Knowledge />
    <Featured />
    <hr />
    <Experience />
    <div>
      Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a>,
      <a href="https://www.flaticon.com/authors/eucalyp" title="Eucalyp">Eucalyp</a>, and
      <a href="https://www.flaticon.com/authors/becris" title="Becris">Becris</a> from
      <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
    </div>
  </div>
</template>

<script>
// import Nav from './components/Nav.vue';
import Banner from './components/Banner.vue';
import Knowledge from './components/Knowledge.vue';
import Featured from './components/Featured.vue';
import Experience from './components/Experience.vue';

export default {
  name: 'App',
  components: {
    // Nav,
    Banner,
    Knowledge,
    Featured,
    Experience,
  },
  mounted: () => {
    window.onbeforeunload = function () {
      window.scrollTo(0, 0);
    };
  },
};
</script>

<style>
body {
  background-image: linear-gradient(120deg, #a9d6ff 0%, #ceedfc 100%);
}
#app {
  font-family: 'Open Sans', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
  animation-duration: 2s;
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
