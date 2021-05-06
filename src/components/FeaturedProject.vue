<template>
  <b-card
    :img-src="require(`../assets/images/${img}`)"
    img-top
    border-variant="light"
    class="mb-3 featured-project-card"
  >
    <b-card-title>{{ title }}</b-card-title>
    <b-card-text>{{ description }}</b-card-text>
    <template #footer>
      <b-button variant="outline-primary" pill link :href="link" target="_blank"
        >Visit Website</b-button
      >
      <b-button
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
  props: ['title', 'img', 'imgAlt', 'description', 'link', 'githubLink'],
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
}
</style>
