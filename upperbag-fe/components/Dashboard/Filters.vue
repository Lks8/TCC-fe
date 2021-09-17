<template>
	<div class="core-filters">
		<div class="main-filters">
			<span class="organize-presets">
				<h4 class="text-preset">Filtros salvos:</h4>
				<b-form-select
					class="presets"
					v-model="selected"
					:options="presets"
					block
					split
				>
				</b-form-select>
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
				></b-form-datepicker>
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
					hide-footer
				></b-form-datepicker>
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
				selected: "Camiseta Gola V Branca",
				presets: [
					"Camiseta Gola V Branca",
					"Cueca Box Cinza",
					"Calça Flare Tamanho M",
				],
			};
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
		padding: 10px;
		display: flex;
		justify-content: flex-start;
		align-items: center;
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
		padding: 10px 5px 10px 19px;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	.b-form-btn-label-control.form-control {
		width: 100%;
		margin-inline: 10px;
        background-color: #d2d3d4;
        font-family: "Rubik","sans-serif";
        font-style: italic;
        font-size: 17px;
	}
    .b-form-btn-label-control.form-control:active {
		box-shadow: none;
	}
	.b-form-btn-label-control.form-control > .form-control {
		color: #16181b !important;
	}
</style>
