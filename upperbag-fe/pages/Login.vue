<template>
	<div class="main">
		<div class="modal" v-if="forgotPassword">
			<Password @closeModal="closeModal()" @recoverSent="recoverSent" />
		</div>
		<div class="core" v-bind:class="{ active: !isActive }">
			<div class="logo">
				<img src="../static/logo.png" alt="logo" />
			</div>
			<div class="login">
				<p class="input-name">Login</p>
				<input
					type="email"
					v-model="userLogin"
					placeholder="Insira seu e-mail"
					@keyup.enter="login()"
				/>
				<p class="input-name">Senha</p>
				<input
					type="password"
					v-model="userPassword"
					placeholder="Insira sua senha"
					@keyup.enter="login()"
				/>
				<span
					class="recover-password"
					v-bind:class="{ active: loginError }"
				>
					<Alert
						v-if="loginError"
						alertMessage="Login ou senha inválidos"
						alertIcon="fail"
					/>
					<p class="password-link" @click="recoverPassword()">
						Esqueci minha senha
					</p>
				</span>
				<b-button class="button" to="/" @click="login()">
					Entrar
					<span class="arrow">
						<fa icon="arrow-right" />
					</span>
				</b-button>
			</div>
		</div>
	</div>
</template>

<script>
	import Password from "../components/Password.vue";
	import Alert from "../components/Alert.vue";

	export default {
		name: "Login",
		data: function() {
			return {
                
				isActive: true,
				wrongLogin: true,
				forgotPassword: false,
				message: "",
				userLogin: "",
				userPassword: "",
				loginError: false,
			};
		},
		components: {
			Password,
			Alert,
		},
		methods: {
			async login() {
				if (this.checkLogin()) {
                    this.$emit("clicked");
                }
			},
			recoverPassword() {
				this.isActive = false;
				this.forgotPassword = true;
			},
			closeModal() {
				this.forgotPassword = false;
				this.isActive = true;
			},
			recoverSent(message) {
				this.message = message;
				this.closeModal();
				alert(
					"Um e-mail de redefinição de senha foi enviado para " +
						this.message
				);
				this.loginError = false;
			},
			checkLogin() {
				const mandatoryCharacter = "@";
				if (
					this.userLogin !== "" &&
					this.userLogin.includes(mandatoryCharacter)
				) {
					this.loginError = false;
					return true;
				} else {
					this.loginError = true;
				}
			},
		},
	};
</script>

<style scoped>
	@import url("https://fonts.googleapis.com/css2?family=Rubik&display=swap");
	.main {
		position: absolute;
		margin-top: 9%;
		text-align: center;
		width: 410px;
	}

	.core {
		text-align: center;
	}
	.core.active {
		pointer-events: none;
	}

	.logo {
		height: 110px;
		background-color: #d2d3d4;
	}

	img {
		padding: 14px;
		width: 250px;
	}

	.login {
		padding: 1px;
		padding-left: 27px;
		background-color: white;
	}

	.input-name {
		text-align: left;
		font-family: "Rubik", "sans-serif";
		font-weight: bold;
		margin-top: 10px;
		margin-bottom: 5px;
		font-size: 17px;
		margin-left: 5px;
	}

	input {
		display: flex;
		width: 355px;
		height: 40px;
		padding-inline: 10px;
		font-family: "Rubik", "sans-serif";
		font-size: 18px;
	}

	input:placeholder-shown {
		font-style: italic;
		padding-left: 7px;
		font-size: 17px;
	}

	.button {
		display: inline-flex;
		font-family: "Rubik", "sans-serif";
		font-size: 20px;
		color: white;
		background-color: #d77f59;
		height: 50px;
		width: 150px;
		margin-bottom: 10px;
		align-items: center;
		justify-content: center;
		margin-right: 27px;
		border: 0;
		border-radius: 0;
	}

	.button:hover {
		background-color: rgb(204, 96, 49);
	}

	.arrow {
		padding-left: 10px;
	}

	a {
		color: black;
	}

	.recover-password.active {
		justify-content: space-between;
	}

	.recover-password {
		font-family: "Rubik", "sans-serif";
		display: flex;
		justify-content: flex-end;
		margin: 5px 33px 0 0;
		font-size: 15px;
	}

	.password-link {
		text-decoration-line: underline;
		text-align: right;
	}

	.password-link:hover {
		cursor: pointer;
		color: #337ab7;
	}

	.modal {
		z-index: 5;
		position: absolute;
		top: 50px;
		width: auto;
		height: auto;
		left: 50px;
		display: flex;
		box-shadow: 0 0 0 100vmax rgba(0, 0, 0, 0.7);
	}

	@media only screen and (max-width: 425px) {
		.main {
			width: 100%;
			margin-top: 50px;
		}
		.core {
			margin-left: 10px;
			width: 95%;
		}

		.logo {
			width: 100%;
		}

		.login {
			padding-left: 20px;
		}

		input {
			width: 95%;
		}

		.button {
			width: 130px;
		}
	}
</style>
