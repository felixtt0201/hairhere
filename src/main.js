import Vue from 'vue';
import VueSweetalert2 from 'vue-sweetalert2';
import {
  ValidationObserver,
  ValidationProvider,
  extend,
  localize,
  configure,
} from 'vee-validate';
import TW from 'vee-validate/dist/locale/zh_TW.json';
import * as rules from 'vee-validate/dist/rules';

import axios from 'axios';
import VueAxios from 'vue-axios';
import App from './App.vue';
import router from './router';
import store from './store';
import 'bootstrap';

Object.keys(rules).forEach((rule) => {
  extend(rule, rules[rule]);
});

localize('zh_TW', TW);

Vue.component('ValidationObserver', ValidationObserver);
Vue.component('ValidationProvider', ValidationProvider);

configure({
  classes: {
    valid: 'is-valid',
    invalid: 'is-invalid',
  },
});

Vue.config.productionTip = false;
Vue.use(VueAxios, axios);
Vue.use(VueSweetalert2);
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
