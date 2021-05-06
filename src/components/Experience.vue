<template>
  <div>
    <b-card-group id="exp-cards">
      <ExperienceEntry
        v-for="experience in experiences"
        :key="experience.title"
        v-bind:title="experience.title"
        v-bind:img="experience.img"
        v-bind:imgAlt="experience.imgAlt"
        v-bind:description="experience.description"
        v-bind:experienceList="experience.experienceList"
      />
    </b-card-group>
  </div>
</template>

<script>
import $ from 'jquery';
import experiences from '../assets/json/experience';
import ExperienceEntry from './ExperienceEntry.vue';

export default {
  name: 'Experience',
  data: () => ({
    experiences: experiences.data,
  }),
  components: {
    ExperienceEntry,
  },
  mounted: () => {
    $(window).on('load resize', () => {
      $('.experience-text').height('auto');
      const heights = [...document.querySelectorAll('.experience-text')].map(
        (el) => el.offsetHeight
      );
      const maxHeight = Math.max(...heights);
      $('.experience-text').height(maxHeight);
    });
  },
};
</script>

<style>
#exp-cards .card-title {
  font-weight: 800;
}
#exp-cards img {
  width: 120px !important;
  margin: 20px 10px;
  filter: invert(18%) sepia(83%) saturate(2339%) hue-rotate(210deg) brightness(106%) contrast(103%);
}
ul {
  list-style: none;
  padding: 0;
}
.dotted-line {
  padding-bottom: 1px;
  border-bottom: grey dashed 2px;
}
</style>
