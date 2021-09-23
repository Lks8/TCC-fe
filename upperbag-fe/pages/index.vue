<template>
	<div class="html">
		<div class="login" v-if="!isLogged">
			<Login @clicked="logIn" />
		</div>
		<div class="main-program" v-else>
			<Dashboard :user="user"/>
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
                user: '',
			};
		},
		components: {
			Login,
			Dashboard,
		},
		methods: {
			logIn(user) {
				this.isLogged = true;
                this.user = user;
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
		background: linear-gradient(
			0deg,
			rgba(24, 26, 27, 1) 0%,
			rgba(53, 57, 59, 1) 100%
		);
		height: 100%;
		min-height: 100vh;
		width: 100%;
	}

	.html {
		min-height: 100vh;
	}
</style>
