<template>
  <div id="contact">
    <h2>Want to say hello?</h2>
    <b-button id="contact-email-button" pill variant="primary" href="mailto:niktill123@gmail.com">
      <b-icon icon="envelope"></b-icon>
      Send me an email</b-button
    >
  </div>
</template>

<script>
export default {
  name: 'Contact',
};
</script>

<style>
#contact {
  margin-top: 50px;
}
#contact-email-button {
  margin-top: 10px;
}
</style>
