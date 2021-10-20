<template>
  <div class="container">
    <body class="body-dashboard mx-md-5 mx-0">
      <b-container class="card">
        <Graph @getValues="getValues" />
      </b-container>
      <hr style="border-color: #212529; border-width: 7px" />
      <b-row>
        <b-col class="filters-main">
          <b-container class="card h-100">
            <Filters />
          </b-container>
        </b-col>
        <b-col class="table-main">
          <b-container class="card h-100">
            <TableDashboard :items="items" />
          </b-container>
        </b-col>
      </b-row>
    </body>
  </div>
</template>

<script>
import Filters from "./Filters.vue";
import Graph from "./Graph.vue";
import TableDashboard from "./TableDashboard.vue";
export default {
  transitions: {
    mode: "slide-left",
  },
  data() {
    return {
      items: [],
    };
  },
  components: { Filters, Graph, TableDashboard },
  methods: {
    getValues(sales) {
      this.items = [Graph.props.months.type, sales];
    },
  },
};
</script>

<style>
.card {
  background-color: #35393b;
}
.body-dashboard {
  z-index: -2;
  margin: 0 auto;
  height: 100%;
  padding: 1rem;
  background: transparent !important;
}

.table-main {
  text-align: center;
  border-width: 5px solid #d2d3d4;
}

.filters-main {
  text-align: center;
  align-items: center;
  justify-content: center;
  transition: width 2s;
}
</style>
