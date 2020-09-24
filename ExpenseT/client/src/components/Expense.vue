<template>
  <div class="container">
    <h1>Expenses</h1>
    <hr />

    <div>
      <b-row class="mt-5">
        <b-col md="6">
          <b-card title="Expenses" sub-title="Today's Expenses" align="center">
            <b-card-text>{{ today }}</b-card-text>
            <b-button id="show-btn" @click="$bvModal.show('addExpense')">Open Modal</b-button>
          </b-card>
        </b-col>
      </b-row>
      <b-row class="mt-5">
        <b-col md="4">
          <b-card title="Food" sub-title="Today's Expenses" align="center">
            <b-card-text>{{ today }}</b-card-text>
          </b-card>
        </b-col>
        <b-col md="4">
          <b-card title="Health" sub-title="Today's Expenses" align="center">
            <b-card-text>{{ today }}</b-card-text>
          </b-card>
        </b-col>
        <b-col md="4">
          <b-card title="Gifts" sub-title="Today's Expenses" align="center">
            <b-card-text>{{ today }}</b-card-text>
          </b-card>
        </b-col>
      </b-row>
      <b-row class="mt-5">
        <b-col md="4">
          <b-card title="Transport" sub-title="Today's Expenses" align="center">
            <b-card-text>{{ today }}</b-card-text>
          </b-card>
        </b-col>
        <b-col md="4">
          <b-card title="Games" sub-title="Today's Expenses" align="center">
            <b-card-text>{{ today }}</b-card-text>
          </b-card>
        </b-col>
        <b-col md="4">
          <b-card title="Others" sub-title="Today's Expenses" align="center">
            <b-card-text>{{ today }}</b-card-text>
          </b-card>
        </b-col>
      </b-row>
    </div>

    <div>

      <b-modal id="addExpense">
        <b-form @submit="createExpense">
          <b-form-group id="input-group-1" label="Price" label-for="Price">
            <b-form-input id="input-1" v-model="price" type="number" placeholder="Enter Price"></b-form-input>
          </b-form-group>
          <b-form-group id="input-group-2" label="Description" label-for="Description">
            <b-form-input
              id="input-2"
              v-model="description"
              type="text"
              placeholder="Enter Despcription"
            ></b-form-input>
          </b-form-group>
          <b-form-group id="input-group-3" label="Category" label-for="Category">
            <b-form-select id="input-3" v-model="category" :options="categories" required></b-form-select>
          </b-form-group>
          <b-button type="submit" variant="primary">Create</b-button>
        </b-form>
      </b-modal>
    </div>
    <p>{{description}}</p>
  </div>
</template>

<script>
import Services from "../Services";

export default {
  name: "Expense",
  data() {
    return {
      expenses: [],
      err: "",
      text: "",
      description: "",
      price: 0,
      category: "",
      categories: [
        { text: "Select One", value: null },
        "Food",
        "Health",
        "Gifts",
        "Transport",
        "Games",
        "Other"
      ],
      today: 0,
      food: 0,
      health: 0,
      gifts: 0,
      transport: 0,
      games: 0,
      other: 0,
      user: ""
    };
  },
  async created() {
    await this.getUser();
    try {      
      this.expenses = await Services.getExpenses();
      this.CalculateTotal();
    } catch (err) {
      this.err = err.message;
    }
  },
  methods: {
    async createExpense() {
      await Services.insertExpense(
        this.description,
        this.price,
        new Date(),
        this.$auth.user.sub,
        this.category
      );
      this.description = "";
      this.price = 0;
      this.category = "";
      this.expenses = await Services.getExpenses();
    },
    CalculateTotal(){    
      var i = 0;
      var todate = new Date();
      for(i = 0; i < this.expenses.length; i++){
        console.log("USUARIO: " + this.user);
        if(this.expenses[i].date.getDate() == todate.getDate()
        && this.expenses[i].date.getMonth() + 1 == todate.getMonth() + 1
        && this.expenses[i].date.getFullYear() == todate.getFullYear()
        && this.expenses[i].userId == this.user){
          this.today = this.today + this.expenses[i].price;
          console.log("encontró" + this.expenses[i].price);
        }
      }
      console.log("Dia hoy: " + todate.getDate());
      console.log("Mes hoy: " + (todate.getMonth() + 1));
      console.log("Año hoy: " + todate.getFullYear());
      console.log("User: " + this.user );
    },
    async getUser(){
      this.user = this.$auth.user.sub;
    }
  },
};
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
  color: bisque;
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
