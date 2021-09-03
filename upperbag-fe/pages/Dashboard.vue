<template>
    <div>
        <header class="topbar"><Topbar /></header>
        <body class="body">
            <b-container class="graph-main">
                Gráfico
            </b-container>
            <b-row>
                <b-col class="filters-main">
                    Filtros
                </b-col>
                <b-col class="table-main">
                    Tabela
                </b-col>
            </b-row>
        </body>
        <div class="sidebar" v-show="false"><Sidebar /></div>
    </div>
</template>

<script>
import Sidebar from "../components/Sidebar.vue";
import Topbar from "../components/Topbar.vue";
export default {
    components: { Topbar, Sidebar },
};
</script>

<style>
.body {
    background-color: crimson;
    width: 72%;
    margin: 0 auto;
    height: 100%;
}

.topbar {
    height: 80px;
    width: 100%;
}

.sidebar {
    height: 100%;
}

.graph-main {
    display: flex;
    height: 250px;
    text-align: center;
    align-items: center;
    justify-content: center;
}

.table-main {
    height: 200px;
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center
}

.filters-main {
    height: 200px;
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center
}

</style>
