<template>
    <div class="border-table">
        <table class="maintable">
            <tr>
                <th>Mês</th>
                <th>Vendas</th>
            </tr>
            <tbody v-for="(item, index) in items" :key="index">
                <tr>
                    <td>{{ item.mes }}</td>
                    <td>{{ item.vendas }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    data() {
        return {
            items: [
                { mes: this.$attrs.items[0], vendas: this.$attrs.items[1] },
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
    border: 10px solid #35393b;
}
</style>
