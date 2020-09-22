<template>
  <div id="app">
    <!--<div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>|

      <router-link v-if="$auth.isAuthenticated" to="/profile">Profile</router-link>
    </div>-->
    <b-navbar toggleable="md" type="dark" variant="info">
      <b-container>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-navbar-brand href="#">NavBar</b-navbar-brand>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item to="/">Home</b-nav-item>
            <b-nav-item to="about">About</b-nav-item>
            <b-nav-item v-if="$auth.isAuthenticated" to="/profile">Profile</b-nav-item>
          </b-navbar-nav>

          <b-navbar-nav class="ml-auto">
            <div v-if="!$auth.loading">
              <b-nav-item v-if="$auth.isAuthenticated" to="/">Today</b-nav-item>
            </div>
            <div v-if="!$auth.loading">
              <b-nav-item v-if="$auth.isAuthenticated" to="/">History</b-nav-item>
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

