<template>
	<div class="core-filters">
        <div class="main-filters">
            <h3>Filtros salvos:</h3>
            <b-dropdown text="Camiseta Gola V Branca">
                <b-dropdown-item>Camiseta Gola V Branca</b-dropdown-item>
                <b-dropdown-item>Calça Flare Tamanho M</b-dropdown-item>
                <b-dropdown-item>Cueca Box Cinza</b-dropdown-item>
            </b-dropdown>
            <h3>Período:</h3>
            <b-form-datepicker v-model="value"></b-form-datepicker>
            <b-form-datepicker :min="value"></b-form-datepicker>
        </div>
    </div>
</template>

<script>
	export default {
        data() {
            return {
                value: ''
            }
        }
    };
</script>

<style>
.main-filters {
    color: #d2d3d4;
}
</style>
