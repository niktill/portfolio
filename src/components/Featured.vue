<template>
  <div id="featured">
    <h1>Featured Projects</h1>
    <b-card-group
      deck
      id="featured-projects-group"
      v-observe-visibility="{
        callback: visibilityChanged,
        once: true,
      }"
    >
      <FeaturedProject
        deck
        v-for="project in projects"
        v-bind:key="project.title"
        v-bind:title="project.title"
        v-bind:img="project.img"
        v-bind:imgAlt="project.imgAlt"
        v-bind:description="project.description"
        v-bind:link="project.link"
        v-bind:githubLink="project.githubLink"
        v-bind:isVisible="isVisible"
      />
    </b-card-group>
    <b-button
      pill
      variant="outline"
      class="github-color"
      href="https://github.com/niktill"
      target="_blank"
      v-show="isVisible"
      v-bind:class="{ 'animate__animated animate__fadeInUp': isVisible }"
      ><b-icon icon="github" aria-hidden="true"></b-icon> See more projects on GitHub</b-button
    >
  </div>
</template>

<script>
import FeaturedProject from './FeaturedProject.vue';
import featured from '../assets/json/featured';

export default {
  name: 'Featured',
  components: {
    FeaturedProject,
  },
  data: () => ({
    projects: featured.data,
    isVisible: false,
  }),
  methods: {
    visibilityChanged(isVisible) {
      this.isVisible = isVisible;
    },
  },
};
</script>

<style scoped>
#featured {
  padding: 50px;
  margin-bottom: 30px;
}
#featured-projects-group {
  margin-bottom: 20px;
}
h1 {
  margin-bottom: 25px;
}
</style>
