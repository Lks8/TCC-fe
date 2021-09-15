<template>
	<div>
		<div class="sidebar-core col-12">
			<b-button class="button-dash" type="link">Dashboard</b-button>
			<b-button class="button-user-list">User Control List</b-button>
		</div>
	</div>
</template>

<script>
	export default {};
</script>

<style>
	.sidebar-core {
		display: flex;
		flex-direction: column;
		height: 100%;
        padding: 0;
        top: 80px;
	}

    .button-dash, .button-user-list {
        color: #d2d3d4;
        display: flex;
        background: 0;
        border: none;
        padding-block: 15px;
        font-family: "Rubik","sans-serif";
        font-size: 20px;
    }

    .button-dash:hover, .button-user-list:hover {
        background-color:#e9ecef;
        color: #16181b;
    }

    .button-dash:active, .button-user-list:active {
        background-color: #95989a;
        color: #fff;
    }
</style>
