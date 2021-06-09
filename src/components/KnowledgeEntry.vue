<template>
  <b-card>
    <div class="knowledge-card-top">
      <b-card-title>{{ title }}</b-card-title>
      <b-card-img :src="require(`../assets/images/${img}`)" :alt="imgAlt" />
      <b-card-text class="experience-text">
        {{ description }}
      </b-card-text>
    </div>
    <hr />
    <ul>
      <li v-for="item in experienceList" :key="item">
        {{ item }}
      </li>
    </ul>
  </b-card>
</template>

<script>
export default {
  name: 'ExperienceEntry',
  props: ['title', 'img', 'imgAlt', 'description', 'experienceList'],
};
</script>

<style></style>
