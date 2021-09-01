<template>
	<div>
		<div class="login" v-if="isLogged">
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
        data: function() {
            return {
                isLogged: false
            }
        },
		components: {
			Login,
			Dashboard,
		},
        methods: {
            logIn () {
                const isLogged = true;
            }
        }
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
