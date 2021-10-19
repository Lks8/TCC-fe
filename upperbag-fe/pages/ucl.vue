<template>
	<div class="html">
		<div class="main-program">
			<div
				class="loading text-center my-2"
				style="color:white"
				v-if="!loaded"
			>
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
								<b-button v-on:click="$emit('apply-filter')"
									><fa
										icon="search"
										style="transform: scaleX(-1)"
								/></b-button>
							</b-input-group-append>
						</b-input-group>
						<span class="crud-buttons-organizer">
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
								variant="secondary"
								v-if="this.user.length == 1"
								@click="openModalUpdateUser"
								>Editar selecionado</b-button
							>
							<b-button
								variant="info"
								@click="openModalCreateUser"
								>Adicionar usuário</b-button
							>
						</span>
					</div>
					<TableUcl
						@selectedUser="selectedUser"
						v-on:apply-filter="apply - filter"
						:filter="filter"
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
		beforeCreate() {
			this.loaded = false;
		},
		mounted() {
			this.$axios
				.$get(
					`http://forecasttcc-env.eba-tsdp2mnj.sa-east-1.elasticbeanstalk.com/api/User/`
				)
				.then((res) => {
					if (
						!res.filter(function(elem) {
							if (elem.name == localStorage.getItem("userName"))
								return elem;
						})[0].isAdmin
					)
						this.$router.push("/unauthorized");
				});
			if (localStorage.getItem("userName")) {
				this.isLogged = true;
				this.loggedUser = localStorage.getItem("userName");
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
				console.log("VAIPORAR");
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
	.loading {
		position: absolute;
		top: 9vh;
		left: 47vw;
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
		align-items: stretch;
		justify-content: space-between;
		margin-block: 10px;
		position: static;
	}
	.button-crud-organizer > .btn {
		padding: 5px;
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
	.button-crud-organizer {
		width: 50%;
	}
	.input-group > .form-control {
		height: 100%;
		width: auto;
	}
	.input-group {
		width: 35%;
	}
	.btn-danger {
		background-color: #ff3334;
		border: none;
	}
	.btn-danger:hover {
		background-color: #cd192b;
	}
	.btn-info {
		background-color: #d77f59;
		border: none;
	}
	.btn-info:hover {
		background-color: #cc6031;
	}
	.btn-info:not(:disabled):not(.disabled):active,
	.btn-info:not(:disabled):not(.disabled):active:focus {
		background-color: #c24914;
		box-shadow: 0 0 0 0.2rem#838486;
	}
	.btn-secondary {
		background-color: #838486;
		border: none;
	}
	.btn-secondary:hover {
		background-color: #5a6268;
	}
</style>
