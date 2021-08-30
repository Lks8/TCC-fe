<template>
    <div>
        <header><Topbar /></header>

        <div><Sidebar /></div>
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
header {
    height: 90px;
}

</style>
