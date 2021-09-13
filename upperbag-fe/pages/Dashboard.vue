<template>
	<div>
		<header class="topbar"><Topbar /></header>
		<div class="sidebar">
			<Sidebar />
		</div>
		<body class="body-dashboard">
			<b-container class="graph-main">
				<Graph />
			</b-container>
			<b-row>
				<b-col class="filters-main">
					<Filters />
				</b-col>
				<b-col class="table-main">
					<TableDashboard />
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
		components: { Topbar, Sidebar, Filters, Graph, TableDashboard },
	};
</script>

<style>
	.body-dashboard {
		width: 72%;
		margin: 0 auto;
		height: 100%;
        display: block;
        justify-content: center;
	}

	.topbar {
		height: 80px;
		width: 100%;
	}

	.sidebar {
		height: 100%;
		width: 269px;
		position: fixed;
		z-index: 1;
		top: 80px;
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
