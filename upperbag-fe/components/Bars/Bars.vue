<template>
	<div>
		<header class="topbar"><Topbar /></header>
		<div class="sidebar">
			<Sidebar v-if="this.userAdmin" />
		</div>
	</div>
</template>

<script>
	import Sidebar from "./Sidebar.vue";
	import Topbar from "./Topbar.vue";
	export default {
		components: { Topbar, Sidebar },
		data() {
			return {
				items: [],
				userAdmin: "",
			};
		},
        mounted() {
            this.userAdmin = localStorage.getItem("userAdmin");
        }
	};
</script>

<style>
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
		background: none;
	}
</style>
