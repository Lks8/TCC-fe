<template>
	<div style="min-height: 100vh">
		<header class="topbar"><Topbar :user="user" /></header>
		<div class="sidebar">
			<Sidebar v-if="this.user.isAdmin" />
		</div>
		<body class="body-dashboard">
			<b-container class="graph-main">
				<Graph @getValues="getValues" />
			</b-container>
            <hr style="border-color: #212529; border-width: 7px">
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
                items: [],
                user: this.$attrs.user
            }
        },
		components: { Topbar, Sidebar, Filters, Graph, TableDashboard },
        methods: {
            getValues(sales) {
                this.items = [Graph.props.months.type,sales];
			},
        }
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

	.topbar {
		height: 80px;
		width: 100%;
        z-index: 5;
        top: 0;
	}

	.sidebar {
		width: 269px;
        float: left;
		position: sticky;
        position: -webkit-sticky;
        z-index: 0;
		top: 0;
		overflow-x: hidden;
        background: none;
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
		text-align: center;
		align-items: center;
		justify-content: center;
	}
</style>
