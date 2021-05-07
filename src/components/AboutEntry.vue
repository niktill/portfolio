<template>
  <b-card>
    <b-icon class="about-icon" :icon="icon"></b-icon>
    <b-card-title>{{ title }}</b-card-title>
    <b-card-text>
      {{ description }}
    </b-card-text>
    <a v-if="link" :href="linkUrl" target="_blank">{{ link }}</a>
  </b-card>
</template>

<script>
export default {
  name: 'AboutEntry',
  props: ['title', 'icon', 'link', 'description', 'linkUrl'],
};
</script>

<style>
.about-icon {
  font-size: 40px;
  margin-bottom: 10px;
  filter: invert(18%) sepia(83%) saturate(2339%) hue-rotate(210deg) brightness(106%) contrast(103%);
}
</style>
