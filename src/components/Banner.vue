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
    </div>
    <hr class="my-4" />

    <p>
      Hello 🙂! I am a new graduate from University of Toronto with a double major in Computer
      Science and Cognitive Science. I have both professional and personal experience in developing
      full stack web applications and I am excited to explore new opportunuties to ultilize and
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
}
.social-buttons > a {
  margin: 5px 5px;
}
</style>
