<template>
	<div class="html">
        <div class="text-center my-2" style="color:white; padding-top: 90px" v-if="!loaded">
			<b-spinner class="align-middle"></b-spinner>
			<strong>Carregando...</strong>
		</div>
		<div class="login" v-if="!isLogged && loaded">
			<Login @clicked="logIn" />
		</div>
		<div class="main-program" v-if="isLogged && loaded">
			<Bars />
			<Dashboard />
		</div>
	</div>
</template>

<script>
	import Login from "../components/Login/Login.vue";
	import Dashboard from "../components/Dashboard/Dashboard.vue";
	import Bars from "../components/Bars/Bars.vue";

	export default {
		data() {
			return {
				isLogged: false,
                loaded: false,
			};
		},
        beforeMount() {
            this.loaded = false;
        },
		mounted() {
            this.$axios.setToken(localStorage.getItem("authToken"), "Bearer");
			this.$axios
				.$get(
					`http://forecasttcc-env.eba-tsdp2mnj.sa-east-1.elasticbeanstalk.com/api/User/`
				)
                .catch((error) => {
					localStorage.clear();
                    this.isLogged = false
					this.$router.push("/");
				});
			if (localStorage.getItem("userName")) {
				this.isLogged = true;
			}
            this.loaded = true;
		},
		components: {
			Login,
			Dashboard,
			Bars,
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
