<template>
  <div id="app" >
    <b-navbar toggleable="md" type="dark" variant="dark">
      <b-container>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-avatar variant="info" square src="https://i.imgur.com/GPOlvgq.png"></b-avatar>
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item to="/">Home</b-nav-item>
            <b-nav-item v-if="$auth.isAuthenticated" to="/profile">Profile</b-nav-item>
          </b-navbar-nav>

          <b-navbar-nav class="ml-auto">
            <div v-if="!$auth.loading">
              <b-nav-item v-if="$auth.isAuthenticated" to="/expense">Today</b-nav-item>
            </div>
            <div v-if="!$auth.loading">
              <b-nav-item v-if="$auth.isAuthenticated" to="/history">History</b-nav-item>
            </div>
            <div v-if="!$auth.loading">
              <!-- show login when not authenticated -->
              <b-nav-item v-if="!$auth.isAuthenticated" @click="login">Log in</b-nav-item>
              <!-- show logout when authenticated -->
              <b-nav-item v-if="$auth.isAuthenticated" @click="logout">Log out</b-nav-item>
            </div>
          </b-navbar-nav>
        </b-collapse>
      </b-container>
    </b-navbar>

    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  methods: {
    // Log the user in
    login() {
      this.$auth.loginWithRedirect();
    },
    // Log the user out
    logout() {
      this.$auth.logout({
        returnTo: window.location.origin,
      });
    },
  },
};
</script>

<style scoped>
.back{
  background: #085078; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to left,
    #85d8ce,
    #085078
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to left,
    #85d8ce,
    #085078
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
</style>

