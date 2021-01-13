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
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
import axios from 'axios';
import qs from 'qs';
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
Vue.prototype.$qs = qs;
Vue.component('Loading', Loading);

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

// beforeEach
// router.beforeEach((to, from, next) => {
//   console.log('to', to, 'from', from, 'next', next, document.cookie);
//   const mycookie = document.cookie.split('=')[1];
//   if (to.meta.requiresAuth) {
//     const api = 'https://salon.rocket-coding.com/POST/Login/Store';
//     axios.post(api).then((res) => {
//       if (res.data.token === mycookie) {
//         next();
//       } else {
//         next({ path: '/Login' });
//       }
//     });
//   }
// });
