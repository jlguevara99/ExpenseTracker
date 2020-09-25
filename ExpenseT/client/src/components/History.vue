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
          <b-button size="sm" variant="outline-primary" class="ml-auto" @click="setToday">Set Today</b-button>
        </b-col>
        <b-col>
          <p>
            Value: <b>'{{ tdate }}'</b>
          </p>
          <p class="mb-0">Context:</p>
          <pre class="small">{{ context }}</pre>
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
          <tr v-for="expense in expenses" v-bind:key="expense.id">
            <td>{{ expense.description }}</td>
            <td>{{ expense.price }}</td>
            <td>{{ expense.date }}</td>
            <td>
              <b-button pill variant="primary" v-on:click="filterDay()"
                >Modify</b-button
              >
            </td>
            <td>
              <b-button pill variant="danger" v-on:click="filterDay()"
                >Delete</b-button
              >
            </td>
          </tr>
        </tbody>
      </table>
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
      tdate: "",
      context: "",
      fields: [
        "description",
        { key: "price", label: "Price", sortable: true },
        "date",
      ],
    };
  },
  async created() {
    try {
      this.expenses = await Services.getExpenses();
    } catch (err) {
      this.err = err.message;
    }
  },
  methods: {
    filterDay() {
      console.log("Intentó modificar o borrar");
    },
    onContext(ctx){
        this.context = ctx;
    },
    setToday(){
        const dateNow = new Date();
        this.tdate = new Date(dateNow.getFullYear(), dateNow.getMonth(), dateNow.getDate());
    }
  },
};
</script>

