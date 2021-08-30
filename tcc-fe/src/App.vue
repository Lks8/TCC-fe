<template>
    <div>
        <div v-if="!isLogged"><Login  /></div>
        <div v-else><Dashboard /></div>
    </div>
</template>

<script>
import Login from "./pages/Login.vue";
import Dashboard from "./pages/Dashboard.vue";


export default {
    name: "App",
    components: {
        Login,
        Dashboard,
    },
    data: function() {
        return {
            isLogged: false,
        }
    }
};
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    background-color: #252829;
    height: 100vh;
    margin: 0;
}

.div {
    margin: 0;
}
</style>
