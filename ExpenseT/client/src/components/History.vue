<template>
  <b-container>
    <h1>History</h1>
    <div>
      <b-row>
        <b-col md="auto">
          <b-calendar
            v-model="tdate"
            value-as-date
            @context="onContext"
            locale="en-US"
          ></b-calendar>
          <b-button
            size="sm"
            variant="outline-primary"
            class="ml-auto"
            @click="setToday"
            >Set Today</b-button
          >
        </b-col>
        <b-col>
          <p>
            Value: <b>'{{ tdate }}'</b>
          </p>
        </b-col>
      </b-row>
    </div>
    <div>
      <table class="table centered">
        <thead>
          <tr>
            <th>Description</th>
            <th>Price</th>
            <th>Date</th>
            <th>Modify</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="expense in fexpenses" v-bind:key="expense.id">
            <td>{{ expense.description }}</td>
            <td>{{ expense.price }}</td>
            <td>{{ expense.date }}</td>
            <td>
              <b-button pill variant="primary" @click="showUpdateModal(expense)"
                >Modify</b-button
              >
            </td>
            <td>
              <b-button pill variant="danger" v-on:click="deleteExpense(expense._id)"
                >Delete</b-button
              >
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div>
      <b-modal ref="updateModal">
        <b-form @submit="updateExpense(upData)">
          <b-form-group id="input-group-1" label="Price" label-for="Price">
            <b-form-input id="input-1" v-model="upData.price" type="number" placeholder="Enter Price"></b-form-input>
          </b-form-group>
          <b-form-group id="input-group-2" label="Description" label-for="Description">
            <b-form-input
              id="input-2"
              v-model="upData.description"
              type="text"
              placeholder="Enter Despcription"
            ></b-form-input>
          </b-form-group>
          <b-form-group id="input-group-3" label="Category" label-for="Category">
            <b-form-select id="input-3" v-model="upData.category" :options="categories" required></b-form-select>
          </b-form-group>
          <b-button type="submit" variant="primary">Update</b-button>
        </b-form>
      </b-modal>
    </div>
  </b-container>
</template>

<script>
import Services from "../Services";

export default {
  name: "History",
  data() {
    return {
      expenses: [],
      fexpenses: [],
      user: '',
      tdate: "",
      context: "",
      fields: [
        "description",
        { key: "price", label: "Price", sortable: true },
        "date",
      ],
      categories: [
        { text: "Select One", value: null },
        "Food",
        "Health",
        "Gifts",
        "Transport",
        "Games",
        "Other"
      ],
      upData: {
          id: '',
          description: '',
          price: 0,
          category: '',
          userId: '',
          date: new Date()
      }
    };
  },
  async created() {
    await this.getUser();
    try {
      this.expenses = await Services.getExpenses();
      this.setToday();
      this.filterExpenses();
    } catch (err) {
      this.err = err.message;
    }
  },
  methods: {
    async deleteExpense(id){
        await Services.deleteExpense(id);
        this.expenses = await Services.getExpenses();
        this.filterExpenses();
    },
    async updateExpense(data){
        alert("hizo algo"  + data.id);
        await Services.updateExpense(data.id, data.description, data.price, data.date, data.userId, data.category);
        this.expenses = await Services.getExpenses();
        this.filterExpenses();
    },
    onContext(ctx) {
      this.context = ctx;
      this.filterExpenses();
    },
    setToday() {
      const dateNow = new Date();
      this.tdate = new Date(
        dateNow.getFullYear(),
        dateNow.getMonth(),
        dateNow.getDate()
      );
    },
    async getUser(){
        this.user = this.$auth.user.sub;
    },
    filterExpenses() {
      this.fexpenses = [];
      var i = 0;
      for (i; i < this.expenses.length; i++) {
        if (
          this.expenses[i].date.getDate() == this.tdate.getDate() &&
          this.expenses[i].date.getMonth() + 1 == this.tdate.getMonth() + 1 &&
          this.expenses[i].date.getFullYear() == this.tdate.getFullYear() &&
          this.expenses[i].userId == this.user
        ) {
            this.fexpenses.push(this.expenses[i]);
        }
      }
    },
    showUpdateModal(data){
        this.upData.description = data.description;
        this.upData.price = data.price;
        this.upData.category = data.category;
        this.upData.date = data.date;
        this.upData.userId = data.userId;
        this.upData.id = data._id;
        console.log("user: " + this.upData.userId);
        console.log("id: " + this.upData.id);
        this.$refs['updateModal'].show();
    }
  },
};
</script>

