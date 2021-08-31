<template>
  <div>
    <Login />
    <Dashboard />
  </div>
</template>

<script>
import Login from "/pages/Login.vue";
import Dashboard from "/pages/Dashboard.vue";
export default {
  components: {
    Login,
    Dashboard
  }
};
</script>
