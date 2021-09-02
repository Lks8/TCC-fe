<template>
	<div>
		<div class="login" v-if="!isLogged">
			<Login />
		</div>
        <div class="dashboard" v-else>
            <Dashboard />
        </div>
	</div>
</template>

<script>
	import Login from "/pages/Login.vue";
	import Dashboard from "/pages/Dashboard.vue";
	export default {
		components: {
			Login,
			Dashboard,
		},
        created() {
            const isLogged = false;
            console.log("carapassouaqui", isLogged);
            this.$root.$refs.index = this;
        },
        methods: {
            logIn: function() {
                const isLogged = true;
                console.log("chupameupinto", isLogged);
            }
        },
        data() {
            return {
                isLogged: false
            }
        },
	};
</script>

<style scoped>
	.login {
		background-color: #252829;
		height: 100vh;
		display: flex;
		justify-content: center;
	}

    .dashboard {
        background-color: #252829;
		height: 100vh;
    }
</style>
