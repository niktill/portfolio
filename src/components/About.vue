<template>
  <div id="about">
    <h2>Other things I enjoy</h2>
    <b-card-group id="about-group">
      <AboutEntry
        v-for="about in abouts"
        :key="about.title"
        v-bind:title="about.title"
        v-bind:icon="about.icon"
        v-bind:description="about.description"
        v-bind:link="about.link"
        v-bind:linkUrl="about.linkUrl"
      />
    </b-card-group>
  </div>
</template>

<script>
import abouts from '../assets/json/about';
import AboutEntry from './AboutEntry.vue';

export default {
  name: 'About',
  data: () => ({
    abouts: abouts.data,
  }),
  components: {
    AboutEntry,
  },
};
</script>

<style>
#about {
  padding: 10px;
  margin-top: 60px;
}

#about-group {
  margin-top: 30px;
}
</style>
