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
					{ key: "actions", label: "Selecionar usuário", class: "actions" },
					{ key: "name", label: "Nome" },
					{ key: "email", label: "Email" },
					{ key: "isAdmin", label: "Administrador", class: "admins" },
				],
                items: [],
				selected: [],
				isBusy: true,
                filter: "",
			};
		},
        methods: {
            onRowSelected(items) {
                this.selected = items
                this.$emit("selectedUser",this.selected);
            },
            applyFilter() {
                this.filter = filter
                console.log("uhul")
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
    .table.b-table > tbody > .table-active {
        color: white;
        background-color: #d77f59;
    }
    .table.b-table.table-hover > tbody > tr.table-active:hover td {
        color: white;
    }
    .table-hover tbody tr:hover {
        background-color:rgba(0, 0, 0, 0.1);
        transition: 0.3s;
    }
    .actions {
        max-width: 13%;
    }
    .admins {
        max-width: 15%;
    }
</style>
