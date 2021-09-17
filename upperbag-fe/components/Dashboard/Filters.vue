<template>
	<div class="core-filters">
		<div class="main-filters">
			<span class="organize-presets">
				<h4 class="text-preset">Filtros salvos:</h4>
				<b-dropdown
					class="presets"
					v-model="selected"
					block
					split
				>
					<b-dropdown-item class="preset-item">Camiseta Gola V Branca</b-dropdown-item>
					<b-dropdown-item class="preset-item">Calça Flare Tamanho M</b-dropdown-item>
					<b-dropdown-item class="preset-item">Cueca Box Cinza</b-dropdown-item>
				</b-dropdown>
			</span>
			<span>
				<h4>Período:</h4>
				<b-form-datepicker
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
				<b-form-datepicker
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
			};
		},
	};
</script>

<style>
	.main-filters {
		color: #d2d3d4;
	}
	.small {
		display: none;
	}
	.organize-presets {
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
	}
    .organize-presets > .btn-group > .btn {
        display: -webkit-box;
    }
    .presets > .dropdown-menu {
        width: 100%;
        left: 0 !important;
        top: -2px !important;
    }
    .preset-item {
        width: 100%;
        text-align: left;
    }
</style>
