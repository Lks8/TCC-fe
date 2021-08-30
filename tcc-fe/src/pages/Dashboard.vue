<template>
    <div>
        <header><Topbar /></header>

        <Sidebar />
    </div>
</template>

<script>
import Sidebar from "../components/Sidebar.vue";
import Topbar from "../components/Topbar.vue";
export default {
    components: { Topbar, Sidebar },
};
</script>

<style></style>
