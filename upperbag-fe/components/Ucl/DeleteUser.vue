<template>
	<div>
		<b-container class="remove-user-core">
			<b-button-close class="close" @click="closeModal" />
			<p>Deseja remover o usuário {{ user[0].name }}?</p>
			<b-button class="add-user-button" variant="info" @click="removeUser"
				>Sim</b-button
			>
			<b-button
				class="add-user-button"
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
                if(this.user[0].isAdmin=="Sim") {
                    this.user[0].isAdmin=1;
                } else {
                    this.user[0].isAdmin=0;
                }
				this.$axios.setToken(
					localStorage.getItem("authToken"),
					"Bearer"
				);
				await this.$axios
					.$request(
                        {method: "delete",
						url: "http://forecasttcc-env.eba-tsdp2mnj.sa-east-1.elasticbeanstalk.com/api/User/",
						data: {
							email: this.user[0].email,
							name: this.user[0].name,
							isAdmin: this.user[0].isAdmin,
						}}
					)
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
		flex-direction: column;
		border-radius: 10px;
		padding: 15px;
	}
	.remove-user-core > p {
		margin-bottom: 0;
		margin-top: 10px;
		margin-inline: 10px;
	}
	.remove-user-core > input {
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
