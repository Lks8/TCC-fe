<template>
	<div class="html">
		<div class="main-program">
			<div class="loading text-center my-2" style="color:white" v-if="!loaded">
				<b-spinner class="align-middle"></b-spinner>
				<strong>Carregando...</strong>
			</div>
			<div v-else>
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
									><fa
										icon="search"
										style="transform: scaleX(-1)"
								/></b-button>
							</b-input-group-append>
						</b-input-group>
						<b-button
							v-if="
								this.user.length == 1 &&
									this.loggedUser != this.user[0].name
							"
							variant="danger"
							@click="openModalRemoveUser"
							>Remover selecionado</b-button
						>
						<b-button
							v-if="this.user.length == 1"
							@click="openModalUpdateUser"
							>Editar selecionado</b-button
						>
						<b-button variant="info" @click="openModalCreateUser"
							>Adicionar usuário</b-button
						>
					</div>
					<TableUcl
						@selectedUser="selectedUser"
						@applyFilter="applyFilter"
					/>
					<div class="modal-user" v-if="this.modalCreateUser">
						<CreateUser @closeModal="closeModal" />
					</div>
					<div class="modal-user" v-if="this.modalUpdateUser">
						<UpdateUser :user="user" @closeModal="closeModal" />
					</div>
					<div class="modal-user" v-if="this.modalRemoveUser">
						<DeleteUser :user="user" @closeModal="closeModal" />
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import Bars from "../components/Bars/Bars.vue";
	import TableUcl from "../components/Ucl/TableUcl.vue";
	import CreateUser from "../components/Ucl/CreateUser.vue";
	import DeleteUser from "../components/Ucl/DeleteUser.vue";
	import UpdateUser from "../components/Ucl/UpdateUser.vue";
	export default {
		components: {
			Bars,
			TableUcl,
			CreateUser,
			DeleteUser,
			UpdateUser,
		},
		data() {
			return {
				isLogged: false,
				user: "",
				filter: "",
				modalCreateUser: false,
				modalUpdateUser: false,
				modalRemoveUser: false,
				loggedUser: "",
				loaded: false,
			};
		},
		mounted() {
			this.loaded = false;
			if (localStorage.getItem("userName")) {
				this.isLogged = true;
				this.loggedUser = localStorage.getItem("userName");
				if (localStorage.getItem("userAdmin") == 0) {
					this.$router.push("/");
					//adicionar página de não autorizado
				}
                this.loaded = true;
			} else {
				this.$router.push("/");
			}
		},
		methods: {
			selectedUser(selected) {
				this.user = selected;
			},
			openModalCreateUser() {
				this.modalCreateUser = true;
			},
			openModalUpdateUser() {
				this.modalUpdateUser = true;
			},
			openModalRemoveUser() {
				this.modalRemoveUser = true;
			},
			closeModal() {
				this.modalCreateUser = false;
				this.modalUpdateUser = false;
				this.modalRemoveUser = false;
			},
			applyFilter() {
				console.log("yep");
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
		background-color: #35393b;
		padding: 15px;
	}
	.crud-control {
		display: flex;
		align-items: center;
		margin-block: 10px;
		position: static;
	}
	.modal-user {
		z-index: 5;
		position: absolute;
		width: auto;
		height: auto;
		top: 24vh;
		left: 36vw;
		display: flex;
		box-shadow: 0 0 0 100vmax rgba(0, 0, 0, 0.7);
		border-radius: 10px;
	}
    .loading {
        position: absolute;
        top: 9vh;
        left: 47vw;

    }
</style>
