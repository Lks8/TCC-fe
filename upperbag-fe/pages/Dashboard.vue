<template>
	<div>
		<header class="topbar"><Topbar /></header>
		<div class="sidebar">
			<Sidebar />
		</div>
		<body class="body-dashboard">
			<b-container class="graph-main">
				<Graph @getValues="getValues" />
			</b-container>
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
	import Sidebar from "../components/Sidebar.vue";
	import Topbar from "../components/Topbar.vue";
	import Filters from "../components/Dashboard/Filters.vue";
	import Graph from "../components/Dashboard/Graph.vue";
	import TableDashboard from "../components/Dashboard/TableDashboard.vue";
	export default {
        data() {
            return {
                items: []
            }
        },
		components: { Topbar, Sidebar, Filters, Graph, TableDashboard },
        methods: {
            getValues(sales) {
                this.items = [Graph.props.months.type,sales]
			},
        }
	};
</script>

<style>
	.body-dashboard {
        z-index: -2;
		width: 72%;
		margin: 0 auto;
		height: 100%;
        display: block;
        justify-content: center;
        margin-top: 80px;
	}

	.topbar {
		height: 80px;
		width: 100%;
        z-index: 5;
        position: fixed;
        top: 0;
	}

	.sidebar {
		height: 100vh;
		width: 269px;
		position: fixed;
        z-index: 0;
		top: 0;
		left: 0;
		overflow-x: hidden;
        background: rgb(53, 57, 59);
		background: linear-gradient(
			0deg,
			rgba(24, 26, 27, 1) 0%,
			rgba(53, 57, 59, 1) 100%
		);
	}

	.graph-main {
		display: flex;
		height: 500px;
		text-align: center;
		align-items: center;
		justify-content: center;
        width: 72%;
	}

	.table-main {
        text-align: center;
        border-width: 5px solid #d2d3d4;
	}

	.filters-main {
		height: 300px;
		text-align: center;
		align-items: center;
		justify-content: center;
	}
</style>
