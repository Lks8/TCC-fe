<template>
	<div class="border-table">
		<b-table
			class="maintable"
			striped
			small
			hover
			:fields="fields"
			:items="items"
			ref="table"
		>
		</b-table>
	</div>
</template>

<script>
	export default {
        mounted() {
            if(this.$attrs.items){
                this.callData()
                this.$refs.table.refresh()
            }
        },
		methods: {
			callData() {
				return {
					fields: ["Mês", "Vendas"],
					items: [
						{
							Mês: this.$attrs.items[0][0],
							Vendas: this.$attrs.items[1][0],
						},
						{
							Mês: this.$attrs.items[0][1],
							Vendas: this.$attrs.items[1][1],
						},
						{
							Mês: this.$attrs.items[0][2],
							Vendas: this.$attrs.items[1][2],
						},
						{
							Mês: this.$attrs.items[0][3],
							Vendas: this.$attrs.items[1][3],
						},
						{
							Mês: this.$attrs.items[0][4],
							Vendas: this.$attrs.items[1][4],
						},
						{
							Mês: this.$attrs.items[0][5],
							Vendas: this.$attrs.items[1][5],
						},
						{
							Mês: this.$attrs.items[0][6],
							Vendas: this.$attrs.items[1][6],
						},
						{
							Mês: this.$attrs.items[0][7],
							Vendas: this.$attrs.items[1][7],
						},
						{
							Mês: this.$attrs.items[0][8],
							Vendas: this.$attrs.items[1][8],
						},
						{
							Mês: this.$attrs.items[0][9],
							Vendas: this.$attrs.items[1][9],
						},
						{
							Mês: this.$attrs.items[0][10],
							Vendas: this.$attrs.items[1][10],
						},
						{
							Mês: this.$attrs.items[0][11],
							Vendas: this.$attrs.items[1][11],
						},
					],
				};
			},
		},
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
		background-color: #252829;
		color: #d2d3d4;
	}

	td {
		border: 1px solid #000;
	}

	.table thead th {
		border: none;
	}

	.border-table {
		border: 10px solid #35393b;
	}
</style>
