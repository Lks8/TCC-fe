<template>
	<div class="border-table">
		<table class="maintable" ref="table">
			<tr>
				<th id="mes">Mês</th>
				<th id="vendas">Vendas</th>
			</tr>
			<tr v-for="(item, index) in items[0]" :key="index">
				<td v-for="item in items" :key="item">
					{{ item[index] }}
				</td>
			</tr>
		</table>

		<b-button v-if="suma" @click="refreshTable">Mostrar tabela</b-button>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				items: this.$attrs.items,
                suma: true
			};
		},
		methods: {
			refreshTable() {
				this.items = this.$attrs.items;
                this.suma = false
			},
		},
		// mounted() {
		// 	console.log("carrega essa bct", this.items);
		// 	this.refreshTable();
		// },
	};
</script>

<style>
	.maintable {
		border: 2px solid black !important;
		font-family: "Rubik", "sans-serif";
		color: black;
		background-color: #d2d3d4;
	}

	th {
		border: 1px solid black !important;
		background-color: #252829;
		color: #d2d3d4;
		width: 100%;
	}

	tr {
		display: flex;
		width: 100%;
	}

	td {
		border: 1px solid #000;
		display: flex;
		width: 100%;
		justify-content: center;
	}

	.table thead th {
		border: none;
	}

	.border-table {
		border: 10px solid #35393b;
		display: flex;
		flex-direction: column;
	}
</style>
