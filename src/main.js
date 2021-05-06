import Vue from 'vue';

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
// Import Vue Observer
import VueObserveVisibility from 'vue-observe-visibility';

import App from './App.vue';

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);
Vue.use(VueObserveVisibility);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');
