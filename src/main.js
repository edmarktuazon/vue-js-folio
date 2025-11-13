import { createApp } from "vue";
import "../src/style.css";
import App from "./App.vue";
import router from "./router";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { MotionPlugin } from "@vueuse/motion";

// Solid icons
import {
  faCode,
  faFile,
  faPaperPlane,
  faGlobe,
  faServer,
  faCloud,
  faArrowUpRightFromSquare,
  faDatabase,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

// Brand icons
import {
  faHtml5,
  faCss3Alt,
  faBootstrap,
  faJs,
  faVuejs,
  faGitAlt,
  faGithub,
  faPhp,
} from "@fortawesome/free-brands-svg-icons";

// solid icons
library.add(faFile);
library.add(faPaperPlane);
library.add(faCode);
library.add(faGlobe);
library.add(faServer);
library.add(faCloud);
library.add(faArrowUpRightFromSquare);
library.add(faDatabase);
library.add(faChevronRight);

// brand icons
library.add(faHtml5);
library.add(faCss3Alt);
library.add(faBootstrap);
library.add(faJs);
library.add(faVuejs);
library.add(faGitAlt);
library.add(faGithub);
library.add(faPhp);

const app = createApp(App);

app.component("font-awesome-icon", FontAwesomeIcon);
app.use(router);
app.use(MotionPlugin);

app.mount("#app");
