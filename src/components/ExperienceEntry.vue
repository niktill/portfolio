<template>
  <b-card
    no-body
    class="experience-card"
    border-variant="primary"
    v-observe-visibility="{
      callback: visibilityChanged,
      once: true,
      intersection: {
        rootMargin: '20px',
      },
    }"
    v-bind:class="{ 'animate__animated animate__fadeInUp': isVisible }"
  >
    <b-card-header v-b-toggle:[title] class="experience-card-header" v-on:click="openTab">
      <img class="header-img" :src="require(`../assets/images/${img}`)" :alt="imgAlt" />
      <div>
        <p>{{ title }}</p>
        <small>{{ date }}</small>
      </div>
      <div>
        <b-icon
          class="h5 expand-icon"
          v-bind:icon="tabOpen ? 'chevron-up' : 'chevron-down'"
          aria-hidden="true"
        ></b-icon>
      </div>
    </b-card-header>
    <b-collapse v-bind:id="title" role="tabpanel">
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
    tabOpen: false,
  }),
  props: ['title', 'img', 'imgAlt', 'description', 'experienceList', 'date'],
  methods: {
    visibilityChanged(isVisible) {
      this.isVisible = isVisible;
    },
    openTab: function () {
      this.tabOpen = !this.tabOpen;
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
  height: 75px;
}
.experience-card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.experience-card-header p {
  margin-bottom: 5px;
}
.expand-icon {
  margin: 0 15px 0 15px;
}
@media screen and (max-width: 350px) {
  .experience-card-header {
    flex-direction: column;
  }
  .experience-card-header > * {
    margin-bottom: 5px;
  }
  .expand-icon {
    margin-left: 0;
  }
}
</style>
