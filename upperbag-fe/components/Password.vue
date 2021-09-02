<template>
	<div>
		<b-container class="main-password">
			<b-button-close @click="closeModal" />
			<p class="hint">Digite o e-mail para alterar sua senha:</p>
			<b-input
				class="input"
				type="email"
				placeholder="Insira seu e-mail"
			></b-input>
			<b-button class="button-password">
				Enviar e-mail
				<span class="arrow"><fa icon="arrow-right"/></span>
			</b-button>
		</b-container>
	</div>
</template>

<script>
	export default {
		methods: {
			closeModal() {
                this.$emit('closeModal')
            },
		},
	};
</script>

<style>
	@import url("https://fonts.googleapis.com/css2?family=Rubik&display=swap");
	.main-password {
		z-index: 3;
		background-color: white;
		justify-content: center;
        padding: auto;
	}

	.hint {
		padding-top: 20px;
		font-family: "Rubik", "sans-serif";
		font-weight: bold;
		margin-bottom: 0.5rem;
	}

	.input {
		align-self: center;
		width: 93%;
		margin: 0 auto;
		border-color: rgb(118, 118, 118);
		border-radius: 2px;
		outline: none;
		font-family: "Rubik", "sans-serif";
	}

	.input:focus {
		border-width: 2px;
		border-color: black;
		transition: none;
		outline: none;
		box-shadow: none;
	}

	input:placeholder-shown {
		font-style: italic;
		font-size: 17px;
	}

	.arrow {
		padding-left: 3px;
	}

	.button-password {
		background-color: #d77f59;
		border-radius: 0;
		border: 0;
		margin: 15px;
		font-family: "Rubik", "sans-serif";
	}

	.button-password:hover {
		background-color: rgb(204, 96, 49);
	}
</style>
