!
<template>
  <b-navbar toggleable="lg" type="light" id="nav-bar">
    <b-navbar-brand href="#">Nikolas Till</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-button pill variant="outline-primary" href="mailto:niktill123@gmail.com"
          >Email Me!</b-button
        >
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
  name: 'Nav',
};
</script>

<style>
#nav-bar {
  height: 50px;
  padding: 20px 20px;
}
</style>
