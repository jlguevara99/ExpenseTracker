<template>
  <div class="home">
    <hr/>
    <div class="container">
    <b-row>
      <b-col md="4">
        <h1>Expense Tracker</h1>
        <hr/>
        <p>Keep Track of your daily expenses with us.</p>
        <p>Add your expenses, sort them by category. </p>
        <p>and see what you have spent on any day of the month.</p>
      </b-col>
      
      <b-col md="8">
        <b-img src="https://i.imgur.com/vMHA3WU.jpg" thumbnail fluid alt="Img"></b-img>
      </b-col>
    </b-row>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
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
.card {
  color: green;
  border-style: groove;
  border-radius: 5px;
  border-color: #1078af;
  border-width: medium;
  background-color: #0a588d3f;
}

h1 {
  font-family: "Lucida Console", Courier, monospace;
  font-weight: bold;
  font-size: 2.5em;
}

p {
  font-family: "Lucida Console", Courier, monospace;
  font-size: 1.42em;
}
</style>
