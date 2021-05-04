<template>
  <b-jumbotron header="Nikolas Till" lead="Full Stack Developer" id="banner">
    <div class="social-buttons">
      <b-button
        class="github-color"
        aria-label="github profile link"
        href="https://github.com/niktill"
        target="_blank"
      >
        <b-icon icon="github" aria-hidden="true"></b-icon>
        GitHub
      </b-button>
      <b-button
        class="linkedin-color"
        aria-label="linkedin profile link"
        href="https://www.linkedin.com/in/nikolastill/"
        target="_blank"
      >
        <b-icon icon="linkedin" aria-hidden="true"></b-icon>
        LinkedIn
      </b-button>
      <b-button
        class="facebook-color"
        aria-label="facebook profile link"
        href="https://www.facebook.com/nik.till"
        target="_blank"
      >
        <b-icon icon="facebook" aria-hidden="true"></b-icon>
        Facebook
      </b-button>
      <b-button
        class="gmail-color"
        aria-label="gmail link"
        href="mailto:niktill123@gmail.com"
        target="_blank"
      >
        <b-icon icon="mailbox" aria-hidden="true"></b-icon>
        Email
      </b-button>
      <b-button
        aria-label="resume link"
        href="https://drive.google.com/file/d/1Dm5OQffkMxry076F0MIG-pazKOLZRa6g/view?usp=sharing"
        target="_blank"
      >
        <b-icon icon="file-earmark" aria-hidden="true"></b-icon>
        Resume
      </b-button>
    </div>
    <hr class="my-4" />

    <p id="bio">
      Hello 🙂! I am a new graduate from University of Toronto with a double major in Computer
      Science and Cognitive Science. As someone who has been developing software for over 5 years,
      web development is a field I have grown to love. I have professional experience developing web
      applications and multiple full stack projects I have developed and deployed as personal
      projects or through my studies. I am excited to explore new opportunuties to ultilize and
      further improve my skills as a human and software developer.
    </p>
  </b-jumbotron>
</template>

<script>
export default {
  name: 'Banner',
};
</script>

<style>
#banner {
  background-image: linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%);
  margin-bottom: 0;
}
.social-buttons > a {
  margin: 5px 5px;
}
#bio {
  margin: 0px 30px;
}
</style>
