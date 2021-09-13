<template>
    <div>
        <div class="login" v-if="!isLogged">
            <Login @clicked="logIn" />
        </div>
        <div class="main-program" v-else>
            <Dashboard />
        </div>
    </div>
</template>

<script>
import Login from "/pages/Login.vue";
import Dashboard from "/pages/Dashboard.vue";
export default {
    data() {
        return {
            isLogged: false,
        };
    },
    components: {
        Login,
        Dashboard,
    },
    methods: {
        logIn() {
            this.isLogged = true;
        },
    },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Rubik&display=swap");
.login {
    background-color: #252829;
    height: 100vh;
    display: flex;
    justify-content: center;
}

.main-program {
    background-color: #252829;
    height: 100vh;
    width: 100vw;
}
</style>
