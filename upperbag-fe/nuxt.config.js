export default {
	// Global page headers: https://go.nuxtjs.dev/config-head
	head: {
		title: "UpperBag",
		htmlAttrs: {
			lang: "en",
		},
		meta: [
			{ charset: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1",
			},
			{ hid: "description", name: "description", content: "" },
			{ name: "format-detection", content: "telephone=no" },
		],
		link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
	},

	// Global CSS: https://go.nuxtjs.dev/config-css
	css: [],

	// Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
	plugins: [
    ],

	// Auto import components: https://go.nuxtjs.dev/config-components
	components: true,

	// Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
	buildModules: [
		[
			"nuxt-fontawesome",
			{
				component: "fa", //customize component name
				imports: [
					{
						set: "@fortawesome/free-solid-svg-icons",
						icons: [
							"faArrowRight",
							"faTimesCircle",
							"faCheckCircle",
							"faExclamationTriangle",
							"faSignOutAlt",
							"faSearch",
							"faCheck",
							"faMinusCircle",
							"faPlus",
						],
					},
				],
			},
		],
	],

	modules: ["bootstrap-vue/nuxt", "@nuxtjs/axios"],

	build: {},

	axios: {
        https: false,
		baseUrl:
			"http://forecasttcc-env.eba-tsdp2mnj.sa-east-1.elasticbeanstalk.com/",
	},
};
