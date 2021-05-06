<template>
  <div id="featured">
    <h1>Featured Projects</h1>
    <b-card-group deck id="featured-projects-group">
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
      />
    </b-card-group>
    <b-button
      pill
      variant="outline"
      class="github-color"
      href="https://github.com/niktill"
      target="_blank"
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
  }),
};
</script>

<style scoped>
#featured {
  padding: 50px;
  background-image: linear-gradient(120deg, #a9d6ff 0%, #ceedfc 100%);
}
#featured-projects-group {
  margin-bottom: 20px;
}
h1 {
  margin-bottom: 25px;
}
</style>
