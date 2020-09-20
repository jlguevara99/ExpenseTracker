<template>
  <div class="container">
    <h1>Expenses</h1>
    <hr>
    <div class="expenses-container">
      <div class="expense"
        v-for="(expense,index) in expenses"
        v-bind:item="expense"
        v-bind:index="index"
        v-bind:key="expense._id"
      >
      <p class="text">{{ expense.description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import Services from '../Services'

export default {
  name: 'Expense',
  data(){
    return {
      expenses: [],
      err: '',
      text: ''
    }
  },
  async created(){
    try {
      this.expenses = await Services.getExpenses();
    } catch (err) {
      this.err = err.message;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div.container {
  max-width: 800px;
  margin: 0 auto;
}

div.expense {
  position: relative;
  border: 1px solid rgba(52, 77, 85, 0.267);
  background-color: azure;
  padding: 10px 10px 30px 10px;
  margin-bottom: 15px;
}

p.text {
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 0;
}

div.date {
  position: absolute;
  top: 0;
  left: 0;
  padding: 5px 15px 5px 15px;
  background-color: darkblue;
  color:bisque;
  font-size: 13px;
}

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
