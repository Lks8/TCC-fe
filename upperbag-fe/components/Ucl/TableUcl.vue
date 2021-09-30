<template>
	<div class="main-ucl">
		<b-table
			class="ucl-table text-center"
			striped
			hover
			borderless
            selectable
			:items="items"
			:fields="fields"
			:busy="isBusy"
            :filter="filter"
            select-mode="single"
            @row-selected="onRowSelected"
		>

			<template #table-busy>
				<div class="text-center my-2">
					<b-spinner class="align-middle"></b-spinner>
					<strong>Carregando...</strong>
				</div>
			</template>

			<template #cell(actions)="{ rowSelected }">
				<template v-if="rowSelected">
					<span aria-hidden="true">&check;</span>
					<span class="sr-only">Selected</span>
				</template>
				<template v-else>
					<span aria-hidden="true">&nbsp;</span>
					<span class="sr-only">Not selected</span>
				</template>
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
                filter: null,
			};
		},
        methods: {
            onRowSelected(items) {
                this.selected = items
                this.$emit("selectedUser",this.selected);
            },
            applyFilter(filter) {
                this.filter = filter
            }
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
					this.options = this.items;
				})
				.catch((error) => {
					localStorage.clear();
					this.$router.push("/");
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
