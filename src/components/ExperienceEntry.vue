<template>
  <b-card
    no-body
    class="experience-card"
    border-variant="light"
    v-observe-visibility="{
      callback: visibilityChanged,
      once: true,
    }"
    v-bind:class="{ 'animate__animated animate__fadeInUp': isVisible }"
  >
    <b-card-header v-b-toggle:[title]>
      <img class="header-img" :src="require(`../assets/images/${img}`)" :alt="imgAlt" />
      <p>{{ title }}</p>
      <small>{{ date }}</small>
    </b-card-header>
    <b-collapse v-bind:id="title" accordion="my-accordion" role="tabpanel">
      <b-card-body>
        <small>{{ description }}</small>
      </b-card-body>
    </b-collapse>
  </b-card>
</template>

<script>
export default {
  name: 'ExperienceEntry',
  data: () => ({
    visible: false,
    isVisible: false,
  }),
  props: ['title', 'img', 'imgAlt', 'description', 'experienceList', 'date'],
  methods: {
    visibilityChanged(isVisible) {
      this.isVisible = isVisible;
    },
  },
};
</script>

<style scoped>
.experience-card {
  margin-bottom: 100px;
}
.experience-card:first-of-type {
  margin-top: 0;
}
.header-img {
  float: left;
  width: 75px;
}
</style>
