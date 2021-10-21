<template>
	<div class="topbar-core">
		<img
			class="logowhite"
			:src="require(`@/static/logo_branco.png`)"
			alt="logo"
			@click="redirectToHome"
		/>

		<div class="user">
			<b-dropdown
				size="lg"
				variant="link"
				toggle-class="text-decoration-none"
				no-caret
				class="user"
			>
				<template #button-content>
					<h1 class="username">{{ userName }}</h1>
					<img
						class="userpic"
						:src="require(`@/static/danny.jpg`)"
						alt="userpic"
					/>
				</template>
				<b-dropdown-item class="logout" @click="logout">
					Sair
					<fa class="icon" icon="sign-out-alt" />
				</b-dropdown-item>
			</b-dropdown>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				userName: "",
			};
		},
		methods: {
			redirectToHome() {
				this.$router.push("/");
			},
			logout() {
				localStorage.clear();
				this.$router.go(0);
			},
		},
		mounted() {
			this.userName = localStorage.getItem("userName");
		},
	};
</script>

<style>
	@import url("https://fonts.googleapis.com/css2?family=Rubik&display=swap");
	.topbar-core {
		z-index: 100;
		display: flex;
		justify-content: space-between;
		background: rgb(53, 57, 59);
		background: linear-gradient(
			0deg,
			rgba(24, 26, 27, 1) 0%,
			rgba(53, 57, 59, 1) 100%
		);
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
		justify-content: center;
		align-content: center;
		align-items: center;
	}

	.username {
		font-family: "Rubik";
		font-weight: normal;
		color: #d2d3d4;
		align-self: center;
		font-size: 22px;
		margin-bottom: 0;
	}

	.user:hover .btn-link {
		color: #d2d3d4;
	}

	.btn:hover .username:hover {
		text-decoration: underline;
	}

	.btn:focus {
		box-shadow: none;
	}

	.userpic {
		margin-right: 50px;
		margin-left: 20px;
		height: 50px;
		align-self: center;
		border-radius: 100px;
		border: white;
	}

	.btn-group > .btn {
		display: flex;
	}

	.dropdown-item {
		color: #d2d3d4;
		background-color: rgb(53, 57, 59);
		padding: 5px;
		text-align: center;
		width: 155px;
		margin: 0;
		min-width: auto;
	}

	.user > .dropdown-menu.show {
		position: fixed !important;
		border-radius: 0;
		background-color: rgb(53, 57, 59);
		top: 10px !important;
		left: 86% !important;
		padding: 0;
		font-family: "Rubik";
		font-size: 18px;
		min-width: auto;
	}

	.dropdown-item:active {
		background-color: #d2d3d49d;
	}

	.icon {
		margin-left: 5px;
	}

	@media (max-width: 1490px) {
		.user > .dropdown-menu.show {
			left: 84% !important;
		}
	}

	@media (max-width: 1280px) {
		.user > .dropdown-menu.show {
			left: 82% !important;
		}
	}

	@media (max-width: 768px) {
		.userpic {
			margin-right: 0;
			height: 40px;
		}
		.logowhite {
			height: 45px;
		}
        .user > .dropdown-menu.show {
			left: 80% !important;
			top: 5px !important;
			font-size: 15px;
			padding: 0;
		}
	}

    @media (max-width: 650px) {
		.user > .dropdown-menu.show {
			left: 74% !important;
		}
	}

	@media (max-width: 425px) {
		.user > .dropdown-menu.show {
			left: 63% !important;
		}
	}

	@media (max-width: 350px) {
		.user > .dropdown-menu.show {
			left: 55% !important;
		}
	}
</style>
