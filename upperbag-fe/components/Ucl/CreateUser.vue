<template>
	<div>
		<b-container class="create-user-core">
            <b-button-close class="close" />
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
			<p>O usuário terá permissões de administrador?</p>
			<b-form-select v-model="user.isAdmin" :options="options" />
			<b-button variant="info" @click="createUser">Adicionar usuário</b-button>
		</b-container>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				user: [
					{
						name: "",
						email: "",
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
                        selected: true
					},
				],
			};
		},
        methods: {
            createUser() {
                console.log(this.user)
            },
        },
        mounted() {
           this.user.isAdmin = 0; 
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
</style>
