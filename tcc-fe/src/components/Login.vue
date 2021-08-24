<template>
    <div class="main">
        <div class="core">
            <div class="logo">
                <img src="/assets/logo.png" alt="logo" />
            </div>
            <div class="login">
                <p>Login</p>
                <input type="login" />
                <p>Senha</p>
                <input type="password" />
                <b-button> ENTRAR
                    <span>
                        <font-awesome-icon icon="arrow-right"/>
                    </span>
                </b-button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Login",
    props: {},
    components: {},
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Rubik&display=swap");
.main {
    margin-top: 100px;
    display: inline-flex;
    height: 500px;
}

.core {
        width: 420px;
    }

.logo {
    height: 110px;
    display: inline-block;
    background-color: #d2d3d4;
    width: 420px;
}


img {
    padding: 14px;
    width: 210px;
}

.login {
    padding: 1px;
    padding-left: 27px;
    background-color: white;
}

p {
    text-align: left;
    font-family: "Rubik", "sans-serif";
    font-weight: bold;
    margin-block: 10px;
    font-size: 17px;
    margin-left: 5px;
}

input {
    display: flex;
    width: 325px;
    height: 40px;
    padding-inline: 10px;
    font-family: "Rubik", "sans-serif";
    font-size: 18px;
}

b-button {
    display: inline-flex;
    font-family: "Rubik", "sans-serif";
    font-size: 20px;
    color: white;
    background-color: #d77f59;
    height: 50px;
    width: 170px;
    margin-block: 20px;
    align-items: center;
    justify-content: center;
    margin-right: 27px;
}

span {
    padding-left: 8px;
}
</style>
