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
                    <h4>Parâmetros:</h4>
                    <b-input-group>
                        <b-input placeholder="Digite o filtro desejado" />
                        <b-input-group-append>
                            <b-button><fa icon="search" /></b-button>
                        </b-input-group-append>
                    </b-input-group>

                    <b-button class="remove-preset" variant="danger"><fa icon="minus-circle" /></b-button>
                    <b-button class="apply-preset" variant="success"><fa icon="check" /></b-button>
                </span>
                <span class="organize-selected">
                    <b-badge
                        class="badges"
                        pill
                        variant="info"
                        v-for="preset in presets"
                        :key="preset"
                        >{{ preset }}</b-badge
                    >
                </span>
                <span class="organize-create">
                    <b-button class="button-new-preset">Criar nova predefinição</b-button>
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
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-inline: 10px;
    margin-left: 8px;
}
.organize-selected {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-top: 10px;
    margin-left: 15px;
    max-width: 635px;
    flex-wrap: wrap;
}
.organize-create {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-right: 10px;
    margin-top: 10px;
}
.button-new-preset, .button-new-forecast {
    padding-inline: 20px;
    margin-inline: 5px;
    width: min-content;
}
</style>
