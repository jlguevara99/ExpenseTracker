<template>
  <div>
    <b-container>
      <h1>History</h1>
      <div>        
        <b-button
              size="sm"
              variant="outline-primary"
              class="ml-auto"
              @click="setToday"
              >Set Today</b-button
            >
        <hr/>
        <p>Total: ${{total}}</p>
      </div>
        <b-row>
          <b-col md="auto">
            <b-calendar
              v-model="tdate"
              value-as-date
              @context="onContext"
              locale="en-US"
            ></b-calendar>            
          </b-col>
          <b-col>
            <div>
              <table class="table centered">
                <thead>
                  <tr>
                    <th>Description</th>
                    <th>Price</th>
                    <th>Category</th>
                    <th>Modify</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody class="inf">
                  <tr v-for="expense in fexpenses" v-bind:key="expense.id">
                    <td>{{ expense.description }}</td>
                    <td>${{ expense.price }}</td>
                    <td>{{ expense.category }}</td>
                    <td>
                      <b-button
                        pill
                        variant="primary"
                        @click="showUpdateModal(expense)"
                        >Modify</b-button
                      >
                    </td>
                    <td>
                      <b-button
                        pill
                        variant="danger"
                        v-on:click="deleteExpense(expense._id)"
                        >Delete</b-button
                      >
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </b-col>
        </b-row>
      <div>
        <b-modal ref="updateModal" title="Update Expense" ok-only header-bg-variant="primary">
          <b-form @submit.prevent="updateExpense(upData)">
            <b-form-group id="input-group-1" label="Price $" label-for="Price">
              <b-form-input
                id="input-1"
                v-model="upData.price"
                type="number"
                required                
                :state="priceState"
                aria-describedby="input-live-help input-live-feedback"
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
                v-model="upData.description"
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
                v-model="upData.category"
                :options="categories"
                required
              ></b-form-select>
            </b-form-group>
            <b-button type="submit" variant="primary">Update</b-button>
          </b-form>
        </b-modal>
      </div>
    </b-container>
  </div>
</template>

<script>
import Services from "../Services";

export default {
  name: "History",
  computed: {
    priceState(){
      return this.upData.price > 0 ? true:false;
    }
  },
  data() {
    return {
      expenses: [],
      fexpenses: [],
      total: 0,
      user: "",
      tdate: "",
      context: "",
      categories: [
        { text: "Select One", value: null },
        "Food",
        "Health",
        "Gifts",
        "Transport",
        "Games",
        "Other",
      ],
      upData: {
        id: "",
        description: "",
        price: 0,
        category: "",
        userId: "",
        date: new Date(),
      },
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
    async deleteExpense(id) {
      await Services.deleteExpense(id);
      this.expenses = await Services.getExpenses();
      this.filterExpenses();
    },
    async updateExpense(data) {
      await Services.updateExpense(
        data.id,
        data.description,
        data.price,
        data.date,
        data.userId,
        data.category
      );
      this.expenses = await Services.getExpenses();
      this.filterExpenses();
      this.$refs["updateModal"].hide();
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
    async getUser() {
      this.user = this.$auth.user.sub;
    },
    filterExpenses() {
      this.fexpenses = [];
      this.total = 0;
      var i = 0;
      for (i; i < this.expenses.length; i++) {
        if (
          this.expenses[i].date.getDate() == this.tdate.getDate() &&
          this.expenses[i].date.getMonth() + 1 == this.tdate.getMonth() + 1 &&
          this.expenses[i].date.getFullYear() == this.tdate.getFullYear() &&
          this.expenses[i].userId == this.user
        ) {
          this.fexpenses.push(this.expenses[i]);
          this.total += this.expenses[i].price;
        }
      }
    },
    showUpdateModal(data) {
      this.upData.description = data.description;
      this.upData.price = data.price;
      this.upData.category = data.category;
      this.upData.date = data.date;
      this.upData.userId = data.userId;
      this.upData.id = data._id;
      this.$refs["updateModal"].show();
    },
  },
};
</script>

<style scoped>
.inf {
  background: white;
  padding: 25px;
  margin: 25px;
}

p {
  font-family: "Lucida Console", Courier, monospace;
  font-weight: bold;
}

table {
  border-collapse: collapse;
  font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
}
td {
  padding: 15px;
  text-align: left;
}
th {
  padding: 15px;
  background-color: #63add4;
  text-align: left;
}

tr:nth-child(even) {
  background-color: #f2f2f2;
}
</style>

