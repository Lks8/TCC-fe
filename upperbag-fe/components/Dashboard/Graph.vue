<template>
	<div id="app">
        <span class="badge-tier">
            <p class="filter-title">Filtros utilizados:</p>
            <b-badge class="badges" variant="info" pill v-for="filter in filters" :key="filter">
                {{filter}}
            </b-badge>
        </span>
		<line-chart
			class="line-chart"
			:width="1300"
			:chart-data="purpleLineChart.chartData"
			:gradient-colors="purpleLineChart.gradientColors"
			:gradient-stops="purpleLineChart.gradientStops"
			:extra-options="purpleLineChart.extraOptions"
		>
		</line-chart>
        
	</div>
</template>

<script>
	import LineChart from "../LineChart";
	import * as chartConfigs from "../config.js";

	const config = {
		colors: {
			default: "#ffffff",
			primary: "#D77F59",
			info: "#FFFFFF",
			danger: "#FFFFFF",
			teal: "#FFFFFF",
			primaryGradient: [
				"rgba(76, 211, 150, 0.1)",
				"rgba(53, 183, 125, 0)",
				"rgba(119,52,169,0)",
			],
		},
	};

	const months = [
		"JAN",
		"FEV",
		"MAR",
		"ABR",
		"MAI",
		"JUN",
		"JUL",
		"AUG",
		"SEP",
		"OCT",
		"NOV",
		"DEC",
	];

	export default {
		name: "App",
		components: {
			LineChart,
		},
		data() {
			return {
                filters: ["Camiseta","Cor: Branco","Tamanho: M","Gola V"],
				purpleLineChart: {
					extraOptions: chartConfigs.purpleChartOptions,
					chartData: {
						labels: months,
						datasets: [
							{
								label: "Data",
								fill: true,
								borderColor: "rgba(255,255,255,1)",
								borderWidth: 2,
								borderDash: [5],
								borderDashOffset: 0.0,
								pointBackgroundColor: config.colors.primary,
								pointBorderColor: "rgba(255,255,255,1)",
								pointHoverBackgroundColor:
									config.colors.primary,
								pointBorderWidth: 1,
								pointHoverRadius: 4,
								pointHoverBorderWidth: 15,
								pointRadius: 5,
								data: Array(months.length)
									.fill()
									.map(() => Math.round(Math.random() * 200)),
							},
						],
					},
                    sales: Array,
					gradientColors: config.colors.primaryGradient,
					gradientStops: [1, 0.2, 0],
				},
			};
		},
		props: {
			months: months
		},
        mounted() {
            this.sales = this.purpleLineChart.chartData.datasets[0].data;
            this.getValues();
        },
        methods: {
            getValues: function() {
                this.$emit("getValues", this.sales);
            }
        }
	};
</script>

<style>
	@import url("https://fonts.googleapis.com/css2?family=Rubik&display=swap");
	body {
		background-color: #35393b;
	}
	#app {
		font-family: "Rubik", "sans-serif";
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		color: #2c3e50;
	}
    .badge-tier {
        align-items: center;
        display: flex;
        justify-content: flex-start;
        margin-bottom: 20px;
        color: #fff;
    }
    .badges {
        display: flex;
        margin-top: 3px;
        margin-left: 5px;
        font-weight: 500;
        font-size: 13px;
        justify-content: center;
        align-items: center;
    }
    .filter-title {
        margin: 0;
        margin-right: 10px;
        font-size: 22px;
    }
</style>
