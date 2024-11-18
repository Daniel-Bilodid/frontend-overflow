import { createApp } from "vue";
import "./style.scss";
import App from "./App.vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faSun } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons/faMagnifyingGlass";
library.add(faSun, faUser, faMagnifyingGlass);

createApp(App).component("font-awesome-icon", FontAwesomeIcon).mount("#app");
