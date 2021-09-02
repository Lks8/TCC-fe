<template>
    <div>
        <div v-for="alert in alerts" :key="alert.title">
            <b-img :src="alert.icon" />
            <p>{{ alert.message }}</p>
        </div>
    </div>
</template>

<script>
export default {
    data: function () {
        return {};
    },
    props: {
        alerts: [
            { title: "fail", icon: require("../static/logo.png"), message: "" },
            { title: "success", icon: require("../static/logo.png"), message: "" },
            { title: "warning", icon: require("../static/logo.png"), message: "" },
        ],
    },
};
</script>

<style>
</style>