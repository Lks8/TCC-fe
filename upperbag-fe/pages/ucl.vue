<template>
	<div class="html">
		<div class="main-program">
			<Bars />
			<div class="core-ucl">
				<div class="crud-control">
                    <b-input-group class="search-filter">
                        <b-input placeholder="Digite o usuário" />
                        <b-input-group-append>
                            <b-button><fa icon="search" /></b-button>
                        </b-input-group-append>
                    </b-input-group>
                    <b-button variant="danger">Remover usuário</b-button>
					<b-button variant="info">Adicionar usuário</b-button>
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
	.core-ucl {
		z-index: -2;
		min-height: 91.5vh;
		width: 72%;
		margin: 0 auto;
		height: 100%;
		display: block;
		justify-content: center;
        background-color: rgb(53, 57, 59);
        padding: 15px;
	}
	.crud-control {
		display: flex;
		align-items: center;
        margin-block: 10px;
        position: static;
	}
</style>
