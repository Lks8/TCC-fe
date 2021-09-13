<template>
	<div>
		<header class="topbar"><Topbar /></header>
		<div class="sidebar">
			<!-- <Sidebar /> -->
		</div>
		<body class="body-dashboard">
			<b-container class="graph-main">
				<Graph />
			</b-container>
			<!-- <b-row>
				<b-col class="filters-main">
					<Filters />
				</b-col>
				<b-col class="table-main">
					<TableDashboard />
				</b-col>
			</b-row> -->
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
		/* background-color: crimson; */
		width: 72%;
		margin: 0 auto;
		height: 100%;
        display: flex;
        justify-content: center;
	}

	.topbar {
		height: 80px;
		width: 100%;
	}

	.sidebar {
		height: 100%;
		width: 160px;
		position: fixed;
		z-index: 1;
		top: 80px;
		left: 0;
		overflow-x: hidden;
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
		height: 200px;
		display: flex;
		text-align: center;
		align-items: center;
		justify-content: center;
	}

	.filters-main {
		height: 200px;
		display: flex;
		text-align: center;
		align-items: center;
		justify-content: center;
	}
</style>
