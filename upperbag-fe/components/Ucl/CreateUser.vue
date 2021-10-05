<template>
	<div>
		<b-container class="create-user-core">
            <h4>Criar usuário</h4>
			<b-button-close class="close" @click="closeModal" />
			<p>Nome:</p>
			<b-form-input
				v-model="user.name"
				placeholder="Insira o nome completo do usuário"
			/>
			<p>Email:</p>
			<b-form-input
				v-model="user.email"
				placeholder="Insira o email do usuário"
			/>
			<p>Senha:</p>
			<b-form-input
				v-model="user.password"
				placeholder="Insira a senha do usuário"
			/>
			<p>O usuário terá permissões de administrador?</p>
			<b-form-select v-model="user.isAdmin" :options="options" />
			<Alert
				v-if="hasError"
				alertType="fail"
				alertMessage="Preencha todos os campos apropriadamente"
			/>
			<b-button class="add-user-button" variant="info" @click="createUser"
				>Adicionar usuário</b-button
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
						name: "",
						email: "",
						password: "",
						isAdmin: 0,
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
			async createUser() {
				if (
					this.user.name == undefined ||
					this.user.email == undefined ||
					this.user.password == undefined ||
					this.user.isAdmin == undefined ||
					this.user.name == "" ||
					this.user.email == "" ||
					this.user.password == "" ||
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
					.$post(
						`http://forecasttcc-env.eba-tsdp2mnj.sa-east-1.elasticbeanstalk.com/api/User/`,
						{
							name: this.user.name,
							email: this.user.email,
							password: this.user.password,
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
    .create-user-core > h4 {
		text-align: center;
        margin: 0;
	}
	.create-user-core > input {
		padding-inline: 10px;
	}
	.create-user-core > .close {
		position: absolute;
        top: 5px;
		right: 10px;
	}
	.add-user-button {
		margin-top: 10px;
        background-color: #d77f59;
        border: none;
	}
    .add-user-button:hover, .add-user-button:focus {
        background-color: #cc6031;
        border: none;
	}
    .btn-info:not(:disabled):not(.disabled):active {
        background-color: #c24914;
        border: none;
        box-shadow: 0 0 0 0.2rem#838486;
	}
</style>
