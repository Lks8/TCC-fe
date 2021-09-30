<template>
	<div>
		<b-container class="create-user-core">
			<b-button-close class="close" @click="closeModal" />
			<p>Nome:</p>
			<b-form-input
				v-model="user.name"
                value="porra"
				placeholder="Insira o nome completo do usuário"
			/>
			<p>Email:</p>
			<b-form-input
				v-model="user.email"
				placeholder="Insira o email do usuário"
			/>
			<p>O usuário terá permissões de administrador?</p>
			<b-form-select v-model="user.isAdmin" :options="options" />
			<Alert
				v-if="hasError"
				alertType="fail"
				alertMessage="Preencha todos os campos apropriadamente"
			/>
			<b-button class="add-user-button" variant="info" @click="updateUser"
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
					this.user.email == undefined ||
					this.user.isAdmin == undefined ||
					this.user.name == "" ||
					this.user.email == "" ||
					!this.user.email.includes("@")
				) {
					this.hasError = true;
					return;
				}
				this.$axios.setToken(
					localStorage.getItem("authToken"),
					"Bearer"
				);
				await this.$axios
					.$put(
						`http://forecasttcc-env.eba-tsdp2mnj.sa-east-1.elasticbeanstalk.com/api/User/`,
						{
							name: this.user.name,
							email: this.user.email,
							isAdmin: this.user.isAdmin,
						}
					)
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
	.create-user-core {
		font-family: "Rubik", "sans-serif";
		color: black;
		background-color: #d2d3d4;
		display: flex;
		flex-direction: column;
		border-radius: 10px;
		padding: 15px;
	}
	.create-user-core > p {
		margin-bottom: 0;
		margin-top: 10px;
		margin-inline: 10px;
	}
	.create-user-core > input {
		padding-inline: 10px;
	}
	.close {
		position: absolute;
		right: 15px;
	}
	.add-user-button {
		margin-top: 10px;
	}
</style>
