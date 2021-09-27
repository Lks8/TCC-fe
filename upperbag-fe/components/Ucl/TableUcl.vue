<template>
    <div class="main-ucl">
        <b-table
            class="ucl-table"
            striped
            hover
            :items="items"
            :fields="fields"
        >
            <template #cell(actions)>
                <b-form-checkbox v-model="selected" :options="items" />
            </template>
        </b-table>
    </div>
</template>

<script>
export default {
    data() {
        return {
            fields: [
                { key: "actions", label: "Selecionar usuário" },
                { key: "name", label: "Nome" },
                { key: "email", label: "Email" },
                { key: "isAdmin", label: "Administrador" },
            ],
            items: [],
            selected: [],
        };
    },
    mounted() {
        this.$axios.setToken(localStorage.getItem("authToken"), "Bearer");
        this.$axios
            .$get(
                `http://forecasttcc-env.eba-tsdp2mnj.sa-east-1.elasticbeanstalk.com/api/User/`
            )
            .then((res) => {
                for (var i = 0; i < res.length; i++) {
                    res[i].isAdmin
                        ? (res[i].isAdmin = "Sim")
                        : (res[i].isAdmin = "Não");
                }
                this.items = res;
            })
            .catch((error) => {
                console.log(error);
            });
    },
};
</script>

<style>
.main-ucl {
    display: flex;
}
.ucl-table {
    background-color: #d2d3d4;
}
</style>
