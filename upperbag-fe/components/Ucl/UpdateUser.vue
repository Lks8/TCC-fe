<template>
	<div>
		<b-container class="update-user-core">
			<b-button-close class="close" @click="closeModal" />
            <h4>Atualizar usuário</h4>
			<p>Nome:</p>
			<b-form-input
				v-model="user.name"
				value="porra"
				placeholder="Insira o nome completo do usuário"
			/>
			<p>O usuário terá permissões de administrador?</p>
			<b-form-select v-model="user.isAdmin" :options="options" />
			<Alert
				v-if="hasError"
				alertType="fail"
				alertMessage="Preencha todos os campos apropriadamente"
			/>
			<b-button class="update-user-button" variant="info" @click="updateUser"
				>Atualizar usuário</b-button
			>
		</b-container>
	</div>
</template>

<script>
	import Alert from "../Alert.vue";
	export default {
		components: {
			Alert,
		},
		data() {
			return {
				hasError: false,
				user: [
					{
						email: this.$attrs.user[0].email,
						name: this.$attrs.user[0].name,
						isAdmin: this.$attrs.user[0].isAdmin,
					},
				],
				options: [
					{
						value: 1,
						text: "Sim",
					},
					{
						value: 0,
						text: "Não",
						selected: true,
					},
				],
			};
		},
		methods: {
			closeModal() {
				this.$emit("closeModal");
			},
			async updateUser() {
				if (
					this.user.name == undefined ||
					this.user.isAdmin == undefined ||
					this.user.name == ""
				) {
					this.hasError = true;
					return;
				}
				this.$axios.setToken(
					localStorage.getItem("authToken"),
					"Bearer"
				);
                console.log(
							this.user
                )
				await this.$axios
					.$request({
                        method: "put",
						url:
							"http://forecasttcc-env.eba-tsdp2mnj.sa-east-1.elasticbeanstalk.com/api/User/",
						data: {
							name: this.user.name,
							email: this.user[0].email,
							isAdmin: this.user.isAdmin
						},
					})
					.then((response) => {
						console.log(response);
						// this.$emit("clicked");
						this.$router.go(0);
					})
					.catch((error) => {
						console.log("cai aqui", error);
						this.loginError = true;
					});
			},
		},
	};
</script>

<style>
	@import url("https://fonts.googleapis.com/css2?family=Rubik&display=swap");
	.update-user-core {
		font-family: "Rubik", "sans-serif";
		color: black;
		background-color: #d2d3d4;
		display: flex;
		flex-direction: column;
		border-radius: 10px;
		padding: 15px;
	}
	.update-user-core > p {
		margin-bottom: 0;
		margin-top: 10px;
		margin-inline: 10px;
	}
	.update-user-core > input {
		padding-inline: 10px;
	}
    .update-user-core > h4 {
		text-align: center;
        margin: 0;
	}
	.update-user-core > .close {
		position: absolute;
        top: 5px;
		right: 10px;
	}
	.update-user-button {
		margin-top: 10px;
	}
</style>
