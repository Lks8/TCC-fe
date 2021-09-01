<template> 
    <div>
        <div class="sidebar-core">
            <row>
                <b-button class="button-dash">Dashboard</b-button>
                
            </row>
            <row>
                <b-button class="button-user-list">User Control List</b-button>
            </row>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style>
.sidebar-core {
    color: #d2d3d4;
    position: fixed;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: flex-start;
    background: rgb(53,57,59);
    background: linear-gradient(0deg, rgba(24,26,27,1) 0%, rgba(53,57,59,1) 100%);
    height: 100%;
}
</style>
