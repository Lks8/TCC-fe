<template>
	<div>
		<b-container class="remove-user-core">
			<b-button-close class="close" @click="closeModal" />
			<p>Deseja remover o usuário {{ user[0].name }}?</p>
			<b-button class="delete-user-button" variant="info" @click="removeUser"
				>Sim</b-button
			>
			<b-button
				class="dont-delete-user-button"
				variant="danger"
				@click="closeModal"
				>Não</b-button
			>
		</b-container>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				user: [
					{
						email: this.$attrs.user[0].email,
						name: this.$attrs.user[0].name,
						isAdmin: this.$attrs.user[0].isAdmin,
					},
				],
			};
		},
		methods: {
			closeModal() {
				this.$emit("closeModal");
			},
			async removeUser() {
				if (this.user[0].isAdmin == "Sim") {
					this.user[0].isAdmin = 1;
				} else {
					this.user[0].isAdmin = 0;
				}
				this.$axios.setToken(
					localStorage.getItem("authToken"),
					"Bearer"
				);
				await this.$axios
					.$request({
						method: "delete",
						url:
							"http://forecasttcc-env.eba-tsdp2mnj.sa-east-1.elasticbeanstalk.com/api/User/",
						data: {
							email: this.user[0].email,
							name: this.user[0].name,
							isAdmin: this.user[0].isAdmin,
						},
					})
					.then((response) => {
						// this.$emit("clicked");
						this.$router.go(0);
					})
					.catch((error) => {
						console.log("cai aqui", error);
						this.closeModal();
					});
			},
		},
	};
</script>

<style>
	@import url("https://fonts.googleapis.com/css2?family=Rubik&display=swap");
	.remove-user-core {
		font-family: "Rubik", "sans-serif";
		color: black;
		background-color: #d2d3d4;
		display: flex;
        align-items: center;
		flex-direction: column;
		border-radius: 10px;
		padding: 15px;
	}
	.remove-user-core > p {
		margin: 0;
        padding-inline: 15px;
        font-weight: bold;
	}
	.remove-user-core > input {
		padding-inline: 10px;
	}
	.remove-user-core > .close {
		position: absolute;
		right: 10px;
        top: 5px;
	}
    .delete-user-button {
		margin-top: 10px;
        background-color: #d77f59;
        border: none;
        width: min-content;
        text-align: center;
        padding-inline: 30px;
	}
    .delete-user-button:hover, .delete-user-button:focus {
        background-color: #cc6031;
        border: none;
	}
    .btn-info:not(:disabled):not(.disabled):active {
        background-color: #c24914;
        border: none;
        box-shadow: 0 0 0 0.2rem#838486;
	}
    .dont-delete-user-button {
        padding-inline: 30px;
        margin-top: 10px;
        background-color: #838486;
        border: none;
    }
    .dont-delete-user-button:hover {
        background-color: #5a6268;
    }
</style>
