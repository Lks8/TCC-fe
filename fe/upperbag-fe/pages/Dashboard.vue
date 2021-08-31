<template>
    <div>
        <header class="topbar"><Topbar /></header>

        <div class="sidebar"><Sidebar /></div>
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
.topbar {
    position: fixed;
    height: 80px;
    width: 100%;
}

.sidebar {
    position: relative;
    padding-top: 80px;
}

</style>
