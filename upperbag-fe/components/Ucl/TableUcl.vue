<template>
	<div class="main-ucl">
		<b-table
			class="ucl-table text-center"
			striped
			hover
			borderless
			:items="items"
			:fields="fields"
			:busy="isBusy"
		>
			<template #cell(actions)>
				<b-form-checkbox v-model="selected" :options="items" />
			</template>
			<template #table-busy>
				<div class="text-center my-2">
					<b-spinner class="align-middle"></b-spinner>
					<strong>Carregando...</strong>
				</div>
			</template>
		</b-table>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				fields: [
					{ key: "actions", label: "Selecionar usuário" },
					{ key: "name", label: "Nome" },
					{ key: "email", label: "Email" },
					{ key: "isAdmin", label: "Administrador" },
				],
				items: [],
				selected: [],
				isBusy: true,
			};
		},
		mounted() {
			this.$axios.setToken(localStorage.getItem("authToken"), "Bearer");
			this.$axios
				.$get(
					`http://forecasttcc-env.eba-tsdp2mnj.sa-east-1.elasticbeanstalk.com/api/User/`
				)
				.then((res) => {
					for (let value of res) {
						value.isAdmin = value.isAdmin ? "Sim" : "Não";
					}
					this.items = res;
				})
				.catch((error) => {
					console.log(error);
				});
			this.isBusy = false;
		},
	};
</script>

<style>
	@import url("https://fonts.googleapis.com/css2?family=Rubik&display=swap");
	.main-ucl {
		display: flex;
		font-family: "Rubik", "sans-serif";
	}
	.ucl-table {
		background-color: #d2d3d4;
		border: 1px solid black;
	}
</style>
