<template>
	<div>
		<header class="topbar"><Topbar /></header>
		<div class="sidebar">
			<Sidebar v-if="this.userAdmin != 0" />
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
				userAdmin: 0,
			};
		},
		mounted() {
			this.$axios
				.$get(
					`http://forecasttcc-env.eba-tsdp2mnj.sa-east-1.elasticbeanstalk.com/api/User/`
				)
				.then((res) => {
					this.userAdmin = res.filter(function(elem) {
						return elem.name == localStorage.getItem("userName")
							? elem.name
							: 0;
					})[0].isAdmin;
				});
		},
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
