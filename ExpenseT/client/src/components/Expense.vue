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
      {{`${expense.date.getDate()}/${expense.date.getMonth() + 1}/${expense.date.getFullYear()}`}}
      <p class="text">{{ expense.description }}</p>
      </div>
    </div>
    <button v-on:click="createExpense">Proba</button>
    <div>
      <b-button id="show-btn" @click="$bvModal.show('addExpense')">Open Modal</b-button>

      <b-modal id="addExpense">
          <b-form @submit="createExpense">
            <b-form-group id="input-group-1" label="Price" label-for="Price">
              <b-form-input 
                id="input-1" 
                v-model="price" 
                type="number" 
                placeholder="Enter Price">
              </b-form-input>
            </b-form-group>
            <b-form-group id="input-group-2" label="Description" label-for="Description">
              <b-form-input 
                id="input-2" 
                v-model="description" 
                type="text" 
                placeholder="Enter Despcription">
              </b-form-input>
            </b-form-group>
            <b-form-group id="input-group-3" label="Category" label-for="Category">
              <b-form-select
                id="input-3"
                v-model="category"
                :options="categories"
                required
              ></b-form-select>
            </b-form-group>
            <b-button type="submit" variant="primary">Create</b-button>
          </b-form>
      </b-modal>
    </div>
    <p>{{description}}</p>
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
      text: '',
      description: '',
      price: 0,
      category: '',
      categories: [{text: 'Select One', value: null}, 'Food', 'Health', 'Gifts', 'Transport', 'Games']
    }
  },
  async created(){
    try {
      this.expenses = await Services.getExpenses();
    } catch (err) {
      this.err = err.message;
    }
  },
  methods: {
    async createExpense(){
      await Services.insertExpense(this.description, this.price, new Date(), this.$auth.user.sub, this.category);
      this.description = '';
      this.price = 0;
      this.category = '';
      this.expenses = await Services.getExpenses();
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
