import { createApp } from "vue";
import App from "./App.vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import VueRouter from 'vue-router';

library.add(faArrowRight);



const Dashboard = { template: "<div>Dashboard</div>" };
const routes = [
    {
        path: "/",
        component: Dashboard,
    },
];

const router = VueRouter.createRouter({
    
    routes,
});



createApp(App)
    .component("font-awesome-icon", FontAwesomeIcon)
    .use(router)
    .mount("#app");
