export const basicOptions = {
	maintainAspectRatio: false,
	legend: {
		display: false,
	},
	responsive: true,
};

export const purpleChartOptions = {
	...basicOptions,
	tooltips: {
		backgroundColor: "#f5f5f5",
		titleFontColor: "#000000",
		bodyFontColor: "#000000",
		bodySpacing: 4,
		xPadding: 12,
		mode: "nearest",
		intersect: 0,
		position: "nearest",
	},
	scales: {
		yAxes: [
			{
				barPercentage: 1,
				gridLines: {
					drawBorder: true,
					color: "rgba(255,255,255,0.5)",
					zeroLineColor: "transparent",
				},
				ticks: {
					suggestedMin: 60,
					suggestedMax: 125,
					padding: 20,
					fontColor: "#ffffff",
				},
			},
		],

		xAxes: [
			{
				barPercentage: 1.6,
				gridLines: {
					drawBorder: true,
					color: "rgba(255,255,255,0)",
					zeroLineColor: "transparent",
				},
				ticks: {
					padding: 20,
					fontColor: "#ffffff",
				},
			},
		],
	},
};
