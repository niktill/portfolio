<template>
  <div>
    <b-card-group id="exp-cards">
      <b-card title="Front-end" border-variant="">
        <b-card-img src="../assets/web-design.svg" alt="frontend logo" />
        <b-card-text>
          From ideas to stuff on screen, I have developed the front-end for various web applications
          and pages. I have experience with the following front-end languages and frameworks:
        </b-card-text>
        <hr />
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>Bootstrap</li>
          <li>Semantic UI</li>
          <li>JavaScript</li>
          <li>jQuery</li>
          <li>React</li>
          <li>React Redux</li>
          <li>React Router</li>
          <li>
            <span class="dotted-line" v-b-popover.hover.top="'This site was built with Vue.js!'"
              >Vue.js</span
            >
          </li>
          <li>HTL</li>
        </ul>
      </b-card>

      <b-card title="Back-end">
        <b-card-img src="../assets/backend.svg" alt="frontend logo" />
        <b-card-text>
          From command line to servers and databases, I have developed algorithms and the back-end
          for web and desktop applications. I have experience with the following back-end languages
          and frameworks:
        </b-card-text>
        <hr />
        <ul>
          <li>Node.js</li>
          <li>Express</li>
          <li>Java</li>
          <li>Python</li>
          <li>MongoDB</li>
          <li>Mongoose</li>
          <li>PostgreSQL</li>
        </ul>
      </b-card>

      <b-card title="Tools & Testing">
        <b-card-img src="../assets/settings.svg" alt="frontend logo" />
        <b-card-text>
          From version control to testing and deploying software, I have experience with a vast
          array of developer tools, all of which are crucial in the workflow of deploying and
          maintaining software. I have experience with the following developer tools:
        </b-card-text>
        <hr />
        <ul>
          <li>Jira</li>
          <li>Git</li>
          <li>GitHub</li>
          <li>GitHub Actions</li>
          <li>JUnit</li>
          <li>Jest</li>
          <li>React Testing Library</li>
          <li>Sentry</li>
          <li>SendGrid</li>
          <li>Heroku</li>
          <li>Firebase</li>
          <li>Adobe Experience Manager (AEM)</li>
        </ul>
      </b-card>
    </b-card-group>
  </div>
</template>

<script>
export default {
  name: 'Experience',
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
#exp-cards p {
  height: 140px;
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
