<template>
  <div>
    <hr />
    <div id="experience-header">
      <h1>Experience</h1>
      <p>Click cards for details</p>
    </div>
    <div id="experiences">
      <ExperienceEntry
        v-for="experience in experiences"
        :key="experience.title"
        v-bind:title="experience.title"
        v-bind:date="experience.date"
        v-bind:img="experience.img"
        v-bind:imgAlt="experience.imgAlt"
        v-bind:description="experience.description"
      />
      <div id="vl"></div>
    </div>
  </div>
</template>

<script>
import experiences from '../assets/json/experience';
import ExperienceEntry from './ExperienceEntry.vue';

export default {
  name: 'Experience',
  components: { ExperienceEntry },
  data: () => ({
    experiences: experiences.data,
  }),
};
</script>

<style>
#experiences {
  position: relative;
  display: flex;
  flex-direction: column;
  max-width: 500px;
  margin: auto;
  flex: 1 1 0;
  align-items: stretch;
}
#experience-header {
  margin: 50px auto 50px auto;
}
#vl {
  border-left: 6px solid white;
  border-radius: 100px;
  height: 100%;
  position: absolute;
  left: 50%;
  margin-left: -3px;
  top: 0;
  z-index: -1;
}
</style>
60
