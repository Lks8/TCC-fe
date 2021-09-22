import axios from "axios";

const api = axios.create({
	baseURL:
		"http://forecasttcc-env.eba-tsdp2mnj.sa-east-1.elasticbeanstalk.com/api/Forecast",
});

export default api; 
// const token = "tccforecastfront8081#requisition";

// const token = "carasoqueropassar";

// api.interceptors.request.use(
// 	(config) => {
// 		config.headers.Authorization = `Bearer ${token}`;

// 		return config;
// 	},
// 	(error) => {
// 		return Promise.reject(error);
// 	}
// );





