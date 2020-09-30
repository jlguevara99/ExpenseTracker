<template>
  <div>
    <div class="container">
      <h1>Expenses</h1>
      <hr />

      <div>
        <b-row class="mt-5">
          <b-col md="3"></b-col>
          <b-col md="6">
            <b-card class="today"
              title="Expenses"
              sub-title="Today's Expenses"
              align="center"
            >
              <b-card-text>${{ today }}</b-card-text>
              <b-button id="show-btn" variant="primary" @click="showModal()"
                >Add Expense</b-button
              >
            </b-card>
          </b-col>
          <b-col md="3"></b-col>
        </b-row>
        <b-row class="mt-5">
          <b-col md="4">
            <b-card title="Food" sub-title="Today's Expenses" align="center">
              <b-card-text>${{ food }}</b-card-text>
            </b-card>
          </b-col>
          <b-col md="4">
            <b-card title="Health" sub-title="Today's Expenses" align="center">
              <b-card-text>${{ health }}</b-card-text>
            </b-card>
          </b-col>
          <b-col md="4">
            <b-card title="Gifts" sub-title="Today's Expenses" align="center">
              <b-card-text>${{ gifts }}</b-card-text>
            </b-card>
          </b-col>
        </b-row>
        <b-row class="mt-5">
          <b-col md="4">
            <b-card
              title="Transport"
              sub-title="Today's Expenses"
              align="center"
            >
              <b-card-text>${{ transport }}</b-card-text>
            </b-card>
          </b-col>
          <b-col md="4">
            <b-card title="Games" sub-title="Today's Expenses" align="center">
              <b-card-text>${{ games }}</b-card-text>
            </b-card>
          </b-col>
          <b-col md="4">
            <b-card title="Others" sub-title="Today's Expenses" align="center">
              <b-card-text>${{ others }}</b-card-text>
            </b-card>
          </b-col>
        </b-row>
      </div>

      <div>
        <b-modal ref="addExpense" title="Add Expense" ok-only header-bg-variant="primary">
          <b-form @submit.prevent="createExpense">
            <b-form-group id="input-group-1" label="Price $" label-for="Price">
              <b-form-input
                id="input-1"
                v-model="price"
                type="number"
                :state="priceState"
                aria-describedby="input-live-help input-live-feedback"
                required
                placeholder="Enter Price"
              ></b-form-input>
              <b-form-invalid-feedback id="input-live-feedback">
                Price must be greater than 0
              </b-form-invalid-feedback>
              <b-form-text id="input-live-help">Correct price</b-form-text>
            </b-form-group>
            <b-form-group
              id="input-group-2"
              label="Description"
              label-for="Description"
            >
              <b-form-input
                id="input-2"
                v-model="description"
                type="text"
                required
                placeholder="Enter Despcription"
              ></b-form-input>
            </b-form-group>
            <b-form-group
              id="input-group-3"
              label="Category"
              label-for="Category"
            >
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
      <p>{{ description }}</p>
    </div>
  </div>
</template>

<script>
import Services from "../Services";

export default {
  name: "Expense",
  computed: {
    priceState(){
      return this.price > 0 ? true:false;
    }
  },
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
        "Other",
      ],
      today: 0,
      food: 0,
      health: 0,
      gifts: 0,
      transport: 0,
      games: 0,
      others: 0,
      user: "",
    };
  },
  async created() {
    await this.getUser();
    
    console.log("Hola");
    try {
      this.expenses = await Services.getExpenses();
      this.CalculateTotal();
    } catch (err) {
      this.err = err.message;
      console.log(this.err);
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
      this.CalculateTotal();
      this.$refs["addExpense"].hide();
    },
    showModal() {
      this.$refs["addExpense"].show();
    },
    CalculateTotal() {
      this.today = 0;
      this.food = 0;
      this.health = 0;
      this.gifts = 0;
      this.transport = 0;
      this.games = 0;
      this.others = 0;
      var i = 0;
      var todate = new Date();
      for (i = 0; i < this.expenses.length; i++) {
        if (
          this.expenses[i].date.getDate() == todate.getDate() &&
          this.expenses[i].date.getMonth() + 1 == todate.getMonth() + 1 &&
          this.expenses[i].date.getFullYear() == todate.getFullYear() &&
          this.expenses[i].userId == this.user
        ) {
          this.today = this.today + this.expenses[i].price;
          switch (this.expenses[i].category) {
            case "Food":
              this.food = this.food + this.expenses[i].price;
              break;
            case "Health":
              this.health = this.health + this.expenses[i].price;
              break;
            case "Gifts":
              this.gifts = this.gifts + this.expenses[i].price;
              break;
            case "Transport":
              this.transport = this.transport + this.expenses[i].price;
              break;
            case "Games":
              this.games = this.games + this.expenses[i].price;
              break;
            case "Other":
              this.others = this.others + this.expenses[i].price;
          }
        }
      }
    },
    async getUser() {
      this.user = this.$auth.user.sub;
    },
  },
};
</script>

<style scoped>
:root{
  background-color: #42b983;
}
div.container {
  max-width: 800px;
  margin: 0 auto;
}

.card{
  color: green;
  border-style: groove;
  border-radius: 5px;
  border-color: #1078af;
  border-width: medium;
  background-color: #0a588d3f;
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

.today {
  font-size: 150%;
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
