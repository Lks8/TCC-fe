<template>
	<div class="html">
		<div class="main-program">
			<Bars />
			<div class="main-ucl">
				<div class="crud-control">
					<b-button variant="info">Criar</b-button>
                    <b-button variant="danger">Deletar</b-button>
				</div>
                <TableUcl />
			</div>
		</div>
	</div>
</template>

<script>
	import Bars from "../components/Bars/Bars.vue";
	import TableUcl from "../components/Ucl/TableUcl.vue";
	export default {
		data() {
			return {
				isLogged: false,
			};
		},
		mounted() {
			if (localStorage.getItem("userName")) {
				this.isLogged = true;
			}
		},
		components: {
			Bars,
			TableUcl,
		},
		methods: {
			logIn() {
				this.isLogged = true;
			},
		},
	};
</script>

<style scoped>
	@import url("https://fonts.googleapis.com/css2?family=Rubik&display=swap");
	.main-program {
		background-color: #252829;
		background: linear-gradient(
			0deg,
			rgba(24, 26, 27, 1) 0%,
			rgba(53, 57, 59, 1) 100%
		);
		height: 100%;
		min-height: 100vh;
		width: 100%;
	}

	.html {
		min-height: 100vh;
	}
	.main-ucl {
		z-index: -2;
		min-height: 91.5vh;
		width: 72%;
		margin: 0 auto;
		height: 100%;
		display: block;
		justify-content: center;
	}
	.crud-control {
		display: flex;
		justify-content: space-evenly;
		align-items: center;
	}
</style>
