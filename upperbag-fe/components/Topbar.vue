<template>
	<div class="topbar-core">
		<img
			class="logowhite"
			src="../static/logo_branco.png"
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
					<h1 class="username">Jacinto Pinto Aquino Rego</h1>
					<img
						class="userpic"
						src="../static/user_pic.jpg"
						alt="userpic"
					/>
				</template>
				<b-dropdown-item href="/">
                    Sair
                    <fa class="icon" icon="sign-out-alt"/>
                </b-dropdown-item>
			</b-dropdown>
		</div>
	</div>
</template>

<script>
	export default {
		methods: {
			redirectToHome() {
				return this.$router.push("#");
			},
		},
	};
</script>

<style>
	@import url("https://fonts.googleapis.com/css2?family=Rubik&display=swap");
	.topbar-core {
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
	}

	.user:hover .btn-link {
		color: #d2d3d4;
	}

    .btn:hover .username:hover{
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
		border-radius: 40px;
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

	.dropdown-menu.show {
		border-radius: 0;
		background-color: rgb(53, 57, 59);
		top: 3px !important;
		left: 211px !important;
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
</style>
