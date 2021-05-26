<template>
  <div id="experiences">
    <div id="experience-header">
      <h1>Experience</h1>
      <p>Click cards for details</p>
    </div>

    <div id="experiences-list">
      <div id="baby">
        <b-img id="baby-img" src="../assets/images/baby-boy.svg" rounded="circle" />
      </div>
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
      <div id="now">Now</div>
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
  margin-top: 75px;
  margin-bottom: 30px;
}
#experiences-list {
  position: relative;
  display: flex;
  flex-direction: column;
  max-width: 550px;
  margin: auto;
  flex: 1 1 0;
  align-items: stretch;
  padding: 10px;
  padding-top: 0;
  padding-bottom: 0;
}
#experience-header {
  margin: 50px auto 50px auto;
}
#baby,
#now {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  border-radius: 50%;
  margin: auto;
  width: 100px;
  padding: 5px;
  height: 100px;
  border: 1px solid rgba(0, 0, 0, 0.3);
}
#baby {
  margin-bottom: 100px;
}
#baby-img {
  height: 75px;
  width: 75px;
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
