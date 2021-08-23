<template>
    <div>
        <Login />
    </div>
</template>

<script>
import Login from "./components/Login.vue";

export default {
    name: "App",
    components: {
        Login,
    },
};
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    background-color: #252829;
    height: 923px;
    margin: 0;
}

.div {
    margin: 0;
}
</style>
