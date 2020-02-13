import Vue from 'vue';
import axios from 'axios';
import App from './App.vue';
import router from './router';

import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';

Vue.config.productionTip = false;
Vue.prototype.$http = axios;

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
