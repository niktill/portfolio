<template>
  <div id="app" class="animate__animated animate__fadeIn">
    <Banner />
    <Knowledge />
    <Featured />
    <hr />
    <Experience />
    <hr />
    <About />
    <Contact />
    <b-button id="back-to-top" pill v-on:click="backToTop">
      <b-icon icon="chevron-double-up"></b-icon>
      Back to Top</b-button
    >
    <div id="credits">
      Powered by <a href="https://bootstrap-vue.org/" target="_blank">BootstrapVue</a>
      <br />
      Icons made by
      <a href="https://www.freepik.com" title="Freepik">Freepik</a>,
      <a href="https://www.flaticon.com/authors/eucalyp" title="Eucalyp">Eucalyp</a>,
      <a href="https://www.flaticon.com/authors/pixel-perfect" title="Pixel perfect"
        >Pixel perfect</a
      >, <a href="https://www.freepik.com" title="Freepik">Freepik</a>, and
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
import About from './components/About.vue';
import Contact from './components/Contact.vue';

export default {
  name: 'App',
  components: {
    // Nav,
    Banner,
    Knowledge,
    Featured,
    Experience,
    About,
    Contact,
  },
  methods: {
    backToTop: () => {
      window.scrollTo(0, 0);
    },
  },
  mounted: () => {
    window.onbeforeunload = () => {
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
#back-to-top {
  margin-top: 50px;
}
#credits {
  margin-top: 20px;
  padding: 10px;
  background-color: white;
}
</style>
