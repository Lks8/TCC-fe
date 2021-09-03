<template>
    <div class="topbar-core">
        <img
            class="logowhite"
            src="../static/logo_branco.png"
            alt="logo"
            @click="redirectToHome"
        />

        <div class="user">
            <h1 class="username">Jacinto Pinto Aquino Rego</h1>
            <img class="userpic" src="../static/user_pic.jpg" alt="userpic" />
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        redirectToHome() {
            return this.$router.push("#");
        },
    },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Rubik&display=swap");
.topbar-core {
    display: flex;
    justify-content: space-between;
    background: rgb(53, 57, 59);
    background: linear-gradient(
        0deg,
        rgba(24, 26, 27, 1) 0%,
        rgba(53, 57, 59, 1) 100%
    );
    margin-bottom: 100px;
}

.logowhite {
    display: flex;
    height: 60px;
    margin: 10px;
}

.logowhite:hover {
    cursor: pointer;
}

.user {
    display: flex;
}

.username {
    font-family: "Rubik";
    font-weight: normal;
    color: #d2d3d4;
    align-self: center;
    font-size: 22px;
}

.userpic {
    margin-right: 50px;
    margin-left: 20px;
    height: 50px;
    align-self: center;
    border-radius: 40px;
    border: white;
}
</style>
