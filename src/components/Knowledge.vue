<template>
  <div>
    <b-card-group id="exp-cards">
      <KnowledgeEntry
        v-for="knowledge in knowledges"
        :key="knowledge.title"
        v-bind:title="knowledge.title"
        v-bind:img="knowledge.img"
        v-bind:imgAlt="knowledge.imgAlt"
        v-bind:description="knowledge.description"
        v-bind:experienceList="knowledge.knowledgeList"
      />
    </b-card-group>
  </div>
</template>

<script>
import $ from 'jquery';
import knowledges from '../assets/json/knowledge';
import KnowledgeEntry from './KnowledgeEntry.vue';

export default {
  name: 'Experience',
  data: () => ({
    knowledges: knowledges.data,
  }),
  components: {
    KnowledgeEntry,
  },
  mounted: () => {
    $(window).on('load resize', () => {
      const knowledgeCardTopClass = '.knowledge-card-top';
      $(knowledgeCardTopClass).height('auto');
      if ($(window).width() >= 576) {
        const heights = [...document.querySelectorAll(knowledgeCardTopClass)].map(
          (el) => el.offsetHeight
        );
        const maxHeight = Math.max(...heights);
        $(knowledgeCardTopClass).height(maxHeight);
      }
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
