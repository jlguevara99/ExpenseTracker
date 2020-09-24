<template>
  <div class="home">
    <Expense/>
  </div>
</template>

<script>
// @ is an alias to /src
import Expense from '@/components/Expense.vue'

export default {
  name: 'Home',
  components: {
    Expense
  },
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
