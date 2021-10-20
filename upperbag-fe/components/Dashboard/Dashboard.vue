<template>
	<div>
		<body class="body-dashboard">
			<b-container class="graph-main">
				<Graph @getValues="getValues" />
			</b-container>
			<hr style="border-color: #212529; border-width: 7px" />
			<b-row>
				<b-col class="filters-main">
					<Filters />
				</b-col>
				<b-col class="table-main">
					<TableDashboard :items="items" />
				</b-col>
			</b-row>
		</body>
	</div>
</template>

<script>
	import Filters from "./Filters.vue";
	import Graph from "./Graph.vue";
	import TableDashboard from "./TableDashboard.vue";
	export default {
		transitions: {
			mode: "slide-left",
		},
		data() {
			return {
				items: [],
			};
		},
		components: { Filters, Graph, TableDashboard },
		methods: {
			getValues(sales) {
				this.items = [Graph.props.months.type, sales];
			},
		},
	};
</script>

<style>
	.body-dashboard {
		z-index: -2;
		min-height: 91.5vh;
		width: 72%;
		margin: 0 auto;
		height: 100%;
		display: block;
		justify-content: center;
	}

	.table-main {
		text-align: center;
		border-width: 5px solid #d2d3d4;
	}

	.filters-main {
		text-align: center;
		align-items: center;
		justify-content: center;
		transition: width 2s;
	}
</style>
