<template>
    <div class="core-filters">
        <div class="main-filters">
            <span class="organize-presets">
                <h4 class="text-preset">Predefinições:</h4>
                <b-form-select
                    class="presets"
                    v-model="selected"
                    :options="presets"
                    block
                    split
                />
                <b-button variant="danger" class="apply-preset"><fa icon="minus-circle" /></b-button>
                <b-button variant="success" class="erase-preset"><fa icon="check" /></b-button>
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
                    hide-footer
                />
            </span>
            <span class="organize-filters">
                <span class="organize-search">
                    <h4 class="text-parameters">Parâmetros:</h4>
                    <b-input-group class="search-filter">
                        <b-input placeholder="Digite o filtro desejado" />
                        <b-input-group-append>
                            <b-button><fa icon="search" style="transform: scaleX(-1)" key="" /></b-button>
                        </b-input-group-append>
                    </b-input-group>
                    <b-button class="apply-preset" variant="success"><fa icon="plus" /></b-button>
                </span>
                <span class="organize-selected">
                    <b-badge
                        class="badges"
                        pill
                        variant="info"
                        v-for="preset in presets"
                        :key="preset"
                        >{{ preset }}<b-button-close class="close" /></b-badge
                    >
                </span>
                <span class="organize-create">
                    <b-input-group class="create-preset">
                        <b-input placeholder="Nome da predefinição" />
                        <b-input-group-append>
                            <b-button class="button-new-preset"><fa icon="plus" /></b-button>
                        </b-input-group-append>
                    </b-input-group>
                    <b-button class="button-new-forecast" variant="info">Criar forecast</b-button>
                </span>
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
}
.organize-search {
    margin-top: 10px;
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
    margin-right: 10px;
    margin-top: 15px;
}
.create-preset {
    margin-inline: 20px;    
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
}
</style>
