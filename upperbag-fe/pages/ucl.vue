<template>
	<div class="html">
		<div class="main-program">
			<Bars />
			<div class="core-ucl">
				<div class="crud-control">
					<b-input-group class="search-filter">
						<b-form-input
							id="filter-input"
							v-model="filter"
							type="search"
							placeholder="Digite o usuário"
						/>
						<b-input-group-append>
							<b-button @click="applyFilter"
								><fa icon="search" style="transform: scaleX(-1)"
							/></b-button>
						</b-input-group-append>
					</b-input-group>
					<b-button v-if="this.users.length == 1" variant="danger"
						>Remover selecionado</b-button
					>
					<b-button v-if="this.users.length > 1" variant="danger"
						>Remover selecionados</b-button
					>
					<b-button v-if="this.users.length == 1"
						>Editar selecionado</b-button
					>
					<b-button variant="info">Adicionar usuário</b-button>
				</div>
				<TableUcl @selectedUsers="selectedUsers" @applyFilter="applyFilter" />
			</div>
		</div>
	</div>
</template>

<script>
	import Bars from "../components/Bars/Bars.vue";
	import TableUcl from "../components/Ucl/TableUcl.vue";
	export default {
		components: {
			Bars,
			TableUcl,
		},
		data() {
			return {
				isLogged: false,
				users: "",
                filter: null,  
			};
		},
		mounted() {
			if (localStorage.getItem("userName")) {
				this.isLogged = true;
				if (localStorage.getItem("userAdmin") == 0) {
					this.$router.push("/");
					//adicionar página de não autorizado
				}
			} else {
				this.$router.push("/");
			}
		},
		methods: {
			selectedUsers(selected) {
				this.users = selected;
				console.log(this.users);
			},
            applyFilter() {
                console.log("foi")
            }
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
		background-color: #35393b;
		padding: 15px;
	}
	.crud-control {
		display: flex;
		align-items: center;
		margin-block: 10px;
		position: static;
	}
</style>
