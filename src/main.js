import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
// import moment from 'moment';
import App from './App.vue';
import router from './router';
import store from './store';
import 'bootstrap';

// Vue.prototype.$moment = moment;
Vue.config.productionTip = false;
Vue.use(VueAxios, axios);
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
