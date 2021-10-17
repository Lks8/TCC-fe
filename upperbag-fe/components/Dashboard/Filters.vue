<template>
	<div class="core-filters">
		<div class="main-filters">
			<span class="organize-presets">
				<h4 class="text-preset">Predefinições:</h4>
				<b-form-select
					class="presets"
					v-model="selected"
					:options="presets"
				/>
				<b-button
					variant="danger"
					class="erase-preset"
					@click="deletePreset(selected)"
					><fa icon="minus-circle"
				/></b-button>
				<b-button variant="success" class="apply-preset"
					><fa icon="check"
				/></b-button>
			</span>
			<span class="organize-filters">
				<span class="organize-search">
					<h4 class="text-parameters">Parâmetros:</h4>
					<b-input-group class="search-filter">
						<b-input
							placeholder="Digite o filtro desejado"
							v-model="search"
							:state="typingError"
						/>
						<b-input-group-append>
							<b-button
								class="add-preset"
								variant="success"
								@click="addFilter"
								><fa icon="plus"
							/></b-button>
						</b-input-group-append>
					</b-input-group>
				</span>
				<span class="organize-selected">
					<b-badge
						class="badges"
						pill
						variant="info"
						v-for="filter in filters"
						:key="filter"
						>{{ filter
						}}<b-button-close
							class="close"
							@click="removeFilter(filter)"
					/></b-badge>
				</span>
			</span>
			<span class="organize-create" v-if="filters.length">
				<h4>Salvar predefinição:</h4>
				<b-input-group class="create-preset">
					<b-input
						placeholder="Nome da predefinição"
						v-model="presetName"
						:state="missingText"
					/>
					<b-input-group-append>
						<b-button
							class="button-new-preset"
							@click="createNewPreset"
							><fa icon="plus"
						/></b-button>
					</b-input-group-append>
				</b-input-group>
			</span>
			<span class="organize-periodo">
				<h4>Período:</h4>
				<b-form-datepicker
					class="periodo-inicial"
					placeholder="Data inicial"
					:max="endDate"
					v-model="startDate"
					:date-format-options="{
						year: 'numeric',
						month: 'numeric',
						day: 'numeric',
					}"
					locale="pt"
					hide-header
                    :dark="true"
				/>
				<h4>-</h4>
				<b-form-datepicker
					class="periodo-final"
					placeholder="Data final"
					:min="startDate"
					v-model="endDate"
					:date-format-options="{
						year: 'numeric',
						month: 'numeric',
						day: 'numeric',
					}"
					locale="pt"
					hide-header
                    :dark="true"
				/>
				<b-button class="button-new-forecast" variant="info"
					>Criar forecast</b-button
				>
			</span>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				startDate: "",
				endDate: "",
				search: "",
				typingError: null,
				missingText: null,
				selected: null,
				presetName: "",
				presets: [
					{
						disabled: true,
						text: "Selecione uma opção",
						value: null,
					},
					{
						text: "Camiseta Gola V Branca",
						value: [ 0, ["Camiseta", "Gola V", "Cor branco"]],
					},
					{
						text: "Camiseta Gola V Branca",
						value: [ 1, ["Camiseta", "Gola V", "Cor branco"]],
					},
				],
				filters: [
					"Comedor de casadas",
					"Mamador de machos",
					"chupa buceta",
					"mama aqui",
				],
			};
		},
		methods: {
			removeFilter(filter) {
				this.filters.splice(this.filters.indexOf(filter), 1);
			},
			addFilter() {
				if (this.search.length == 0) {
					this.typingError = false;
					return;
				}
				this.filters.push(this.search);
				this.search = "";
				this.typingError = null;
			},
			createNewPreset() {
				if (this.presetName == "") {
					this.missingText = false;
					return;
				}
				this.presets.push({
					text: this.presetName,
					value: [this.presets.length ,this.filters],
				});
				this.filters = [];
				this.presetName = "";
			},
		},
	};
</script>

<style>
	@import url("https://fonts.googleapis.com/css2?family=Rubik&display=swap");
	.main-filters {
		color: #d2d3d4;
	}
	.small {
		display: none;
	}
	.organize-presets {
		padding: 10px 10px 15px 10px;
		display: flex;
		justify-content: flex-start;
		align-items: center;
		margin-inline: 15px;
	}
	.text-preset {
		width: 50%;
	}
	.presets {
		margin-inline: 5px;
		width: 100%;
		display: -webkit-box;
		color: #16181b;
		background-color: #d2d3d4;
		font-family: "Rubik", "sans-serif";
	}
	.presets:hover {
		color: #e9ecef;
		background-color: #252829;
		border-color: transparent;
	}
	.custom-select:focus {
		box-shadow: none;
	}
	option {
		color: #d2d3d4;
		background-color: rgb(53, 57, 59);
	}
	.organize-periodo {
		padding: 20px 25px 10px 30px;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	.b-form-btn-label-control.form-control {
		width: 100%;
		margin-inline: 10px;
		background-color: #d2d3d4;
		font-family: "Rubik", "sans-serif";
		font-style: italic;
		font-size: 17px;
	}
	.b-form-btn-label-control.form-control:active {
		box-shadow: none;
	}
	.b-form-btn-label-control.form-control > .form-control {
		color: #16181b !important;
	}
	.periodo-inicial > .dropdown-menu,
	.periodo-final > .dropdown-menu {
		top: 0 !important;
		left: 0 !important;
	}
	.b-calendar .b-calendar-inner {
		width: auto;
		min-width: 0px;
		max-width: 238px;
	}
	.apply-preset,
	.erase-preset {
		margin-inline: 5px;
		border: none;
	}
	.erase-preset {
		background-color: #ff3334;
		border: none;
	}
	.erase-preset:hover {
		background-color: #cd192b;
	}
	.organize-search {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding-block: 10px;
		margin-left: 20px;
		margin-right: 14px;
		background-color: #252829;
		border-radius: 15px 15px 0px 0px;
	}
	.text-parameters {
		margin-inline: 10px;
		color: #d2d3d4;
	}
	.search-filter {
		margin-right: 5px;
	}
	.organize-search > .apply-preset {
		margin-right: 15px;
	}
	.organize-selected {
		display: flex;
		justify-content: flex-start;
		align-items: center;
		flex-wrap: wrap;
		background-color: #252829;
		border-radius: 0px 0px 15px 15px;
		margin: 0px 14px 0px 20px;
		padding: 5px;
	}
	.add-preset,
	.button-new-preset {
		margin-right: 10px;
		background-color: #6c757d;
		border: none;
		padding-inline: 14px;
	}
	.add-preset:hover,
	.add-preset:focus,
	.button-new-preset:focus,
	.button-new-preset:hover {
		background-color: #5a6268;
	}
	.add-preset:not(:disabled):not(.disabled):active,
	.button-new-preset:not(:disabled):not(.disabled):active {
		background-color: #545b62;
	}
	.organize-selected > .badges {
		margin-block: 5px;
	}
	.close {
		color: black;
		opacity: 0.8;
		text-shadow: none;
		font-size: 1rem;
		margin-left: 5px;
	}
	.organize-create {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin: 10px 10px 0px 30px;
	}
	.create-preset {
		max-width: 65%;
	}
	.button-new-preset {
		width: min-content;
		font-weight: bold;
		margin-right: 20px;
	}
	.button-new-forecast {
		padding: 2px 20px 2px 20px;
		margin-inline: 5px;
		width: min-content;
		font-weight: bold;
		font-size: 20px;
		background-color: #d77f59;
		border: none;
	}
	.apply-preset {
		background-color: #d77f59;
		border: none;
	}
	.button-new-forecast:hover,
	.button-new-forecast:focus,
	.apply-preset:hover,
	.apply-preset:focus {
		background-color: #cc6031;
	}
	.button-new-forecast:not(:disabled):not(.disabled):active,
	.btn-info:not(:disabled):not(.disabled):active:focus,
	.apply-preset:not(:disabled):not(.disabled):active:focus {
		background-color: #c24914;
		box-shadow: 0 0 0 0.2rem#838486;
	}
</style>
