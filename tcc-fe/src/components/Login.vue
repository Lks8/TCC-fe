<template>
    <div class="main">
        <div class="core">
            <div class="logo">
                <img src="/assets/logo.png" alt="logo" />
            </div>
            <div class="login">
                <p>Login</p>
                <input />
                <p>Senha</p>
                <input />
                <b-button> Entrar </b-button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Login",
    props: {},
};
</script>

<style scoped>
.main {
    display: inline-flex;
    height: 500px;
}

.core {
    width: 400px;
}

.logo {
    height: 120px;
    display: inline-block;
    background-color: #d2d3d4;
    width: 400px;
}

.login {
    padding: 10px;
    background-color: white;
}

p {
    text-align: left;
}

input {
    display: flex;
    width: 350px;
    height: 30px;
}

b-button {
    color: red;
    background-color: blue;
}
</style>
