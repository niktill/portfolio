<template>
  <b-card
    :img-src="require(`../assets/images/${img}`)"
    img-top
    border-variant="light"
    class="mb-3 featured-project-card"
    v-show="isVisible"
    v-bind:class="{ 'animate__animated animate__fadeInUp': isVisible }"
  >
    <b-card-title>{{ title }}</b-card-title>
    <b-card-text>{{ description }}</b-card-text>
    <div class="tools">
      <b-badge class="tool-badge" pill variant="light" v-for="tool in tools" :key="tool">{{
        tool
      }}</b-badge>
    </div>
    <template #footer>
      <b-button variant="outline-primary" pill link size="sm" :href="link" target="_blank"
        ><b-icon icon="globe" aria-hidden="true"></b-icon> Visit Website</b-button
      >
      <b-button
        size="sm"
        variant="outline-light"
        class="github-color"
        pill
        link
        :href="githubLink"
        target="_blank"
      >
        <b-icon icon="github" aria-hidden="true"></b-icon> Visit GitHub</b-button
      >
    </template>
  </b-card>
</template>

<script>
export default {
  name: 'FeaturedProject',
  props: ['title', 'img', 'imgAlt', 'description', 'link', 'githubLink', 'tools', 'isVisible'],
};
</script>

<style scoped>
img {
  width: 100px;
  align-self: center;
  margin: 10px;
}
button,
a {
  margin-right: 10px;
  margin-top: 5px;
}
.card-body {
  display: flex;
  flex-direction: column;
}
.tools {
  margin-top: auto;
  padding-top: 10px;
}
.tool-badge {
  margin: 2px;
  padding: 5px;
  border: 1px solid rgba(0, 0, 0, 0.3);
}
</style>
