<template>
  <div class="home">
    <h1>Hola</h1>
  </div>
</template>

<script>

export default {
  name: 'Home',
  methods: {
    // Log the user in
    login() {
      this.$auth.loginWithRedirect();
    },
    // Log the user out
    logout() {
      this.$auth.logout({
        returnTo: window.location.origin
      });
    }
  }
};
</script>
