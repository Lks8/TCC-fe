<template>
	<div class="main-ucl">
		<b-table class="ucl-table" striped hover :items="items"> </b-table>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				items: [
					{
						email: "",
						name: "",
						isAdmin: true,
					},
				],
			};
		},
		mounted() {
            this.$axios.setToken(localStorage.getItem("authToken"), 'Bearer')
			this.$axios
				.$get(`http://forecasttcc-env.eba-tsdp2mnj.sa-east-1.elasticbeanstalk.com/api/User/`)
                .then((res) => {
                    console.log(res);
                    this.items=res;
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
