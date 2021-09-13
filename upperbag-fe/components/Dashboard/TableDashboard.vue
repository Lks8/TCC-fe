<template>
    <div class="border-table">
        <b-table class="maintable" striped small hover :items="items">
        </b-table>
    </div>
</template>

<script>
export default {
    data() {
        return {
            items: [
                { Mês: "Jan", Vendas: 10 },
                { Mês: "Fev", Vendas: 20 },
                { Mês: "Mar", Vendas: 30 },
                { Mês: "Abr", Vendas: 40 },
                { Mês: "Mai", Vendas: 50 },
                { Mês: "Jun", Vendas: 60 },
                { Mês: "Jul", Vendas: 70 },
                { Mês: "Ago", Vendas: 80 },
                { Mês: "Sep", Vendas: 90 },
                { Mês: "Out", Vendas: 100 },
                { Mês: "Nov", Vendas: 110 },
                { Mês: "Dez", Vendas: 120 },
            ],
        };
    },
};
</script>

<style>
.maintable {
    border: 2px solid black !important;
    font-family: "Rubik", "sans-serif";
    color: black;
    background-color: #d2d3d4;
}

th {
    background-color: #252829;
    color: #d2d3d4;
}

td {
    border: 1px solid #000;
}

.table thead th {
    border: none;
}

.border-table {
    border: 10px solid #35393B;
}
</style>