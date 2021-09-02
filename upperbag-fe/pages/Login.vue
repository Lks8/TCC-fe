<template>
	<div class="main">
        <div class="recover" v-if="forgotPassword">
			<Password  @closeModal="closeModal()"/>
		</div>
		<div class="core">
			<div class="logo">
				<img src="../static/logo.png" alt="logo" />
			</div>
			<div class="login">
				<p class="input-name">Login</p>
				<input type="email" placeholder="Insira seu e-mail" />
				<p class="input-name">Senha</p>
				<input type="password" placeholder="Insira sua senha" />
				<span class="recover-password" @click="recoverPassword()">
				    <p class="password-link">Esqueci minha senha</p>
				</span>
                <Alert v-if="wrongLogin" alert.message="'Login ou senha inválidos'" alert.title="fail" />
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
                wrongLogin: true,
                forgotPassword: false,
            }
        },
		components: {
			Password,
            Alert,
		},
		methods: {
			login() {
				this.$emit("clicked");
			},
            recoverPassword() {
                this.forgotPassword = true;
            },
            closeModal() {
                this.forgotPassword = false;
            }

		},
	};
</script>

<style scoped>
	@import url("https://fonts.googleapis.com/css2?family=Rubik&display=swap");
	.main {
		position: absolute;
		margin-top: 12%;
		text-align: center;
		width: 410px;
	}

	.core {
		text-align: center;
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

	.recover-password {
		font-family: "Rubik", "sans-serif";
		display: block;
		text-align: right;
		margin: 5px 33px 0 0;
		font-size: 15px;
	}

    .password-link {
        text-decoration-line: underline;
    }

	.password-link:hover {
        cursor: pointer;
		color: #337ab7;
	}

    .recover {
        position: absolute;
        padding: 50px;
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
