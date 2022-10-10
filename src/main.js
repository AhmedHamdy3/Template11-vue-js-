import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "@/components/Global/style.scss";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "bootstrap/dist/css/bootstrap.css";
import "jquery/dist/jquery.min.js";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faMoon,
  faBars,
  faGlobe,
  faCheck,
  faAngleLeft,
  faAngleRight,
  faQuoteLeft,
  faQuoteRight,
  faMapMarkerAlt,
  faEnvelope,
  faPhoneAlt,
  faEye,
  faDesktop,
  faInfinity,
  faTachometerAlt,
  faPaperclip,
  faPencilRuler,
  faSignal,
  faUser,
  faNewspaper,
  faDatabase,
  faBolt,
  faBookReader,
  faComment,
  faHeart,
  faShareAlt,
  faClock,
  faSun,
  faFolder,
  faImage,
  faAddressCard,
  faTools,
  faCoins,
  faBlog,
  faCheckCircle,
  faVolumeUp,
  faTimes,
  faChessKnight,
  faRocket,
  faShoppingBag,
  faClipboard,
  faExclamationTriangle,
} from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
library.add(
  faMoon,
  faBars,
  faGithub,
  faGlobe,
  faCheck,
  faAngleLeft,
  faAngleRight,
  faQuoteLeft,
  faQuoteRight,
  faMapMarkerAlt,
  faEnvelope,
  faPhoneAlt,
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
  faEye,
  faDesktop,
  faInfinity,
  faTachometerAlt,
  faPaperclip,
  faPencilRuler,
  faSignal,
  faUser,
  faNewspaper,
  faDatabase,
  faBolt,
  faBookReader,
  faComment,
  faHeart,
  faShareAlt,
  faClock,
  faSun,
  faFolder,
  faImage,
  faAddressCard,
  faTools,
  faCoins,
  faBlog,
  faCheckCircle,
  faVolumeUp,
  faTimes,
  faChessKnight,
  faRocket,
  faShoppingBag,
  faClipboard,
  faExclamationTriangle
);

Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
