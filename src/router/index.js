import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
// import dashboardProducts from '../components/dashboard/dashboardProducts.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/About.vue'),
  },
  {
    path: '/Login',
    name: 'login',
    component: () => import('../components/Login.vue'),
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../components/forms/Register.vue'),
  },
  {
    path: '/Dashboard',
    name: 'Dashboard',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../components/Dashboard.vue'),
    children: [
      {
        path: '/',
        name: 'Reservation',
        component: () => import('../components/forms/Reservation.vue'),
      },
      {
        path: 'designers',
        name: 'Designers',
        component: () => import('../components/Designers.vue'),
      },
      {
        path: 'information', // 店家資訊
        name: 'Information',
        component: () => import('../components/Information.vue'),
        children: [
          {
            path: '',
            name: 'StoreInformation',
            component: () => import('../components/forms/StoreInformation.vue'),
          },
          {
            path: 'serviceinfo',
            name: 'ServiceInfo',
            component: () => import('../components/forms/ServiceInfo.vue'),
          },
        ],
      },
      {
        path: 'portfolio', // 作品集
        name: 'Portfolio',
        component: () => import('../components/Portfolio.vue'),
      },
      {
        path: 'checkout', // 結帳管理
        name: 'Checkout',
        component: () => import('../components/Checkout.vue'),
      },
      {
        path: 'forms', // 表單管理
        name: 'Forms',
        component: () => import('../components/Forms.vue'),
        children: [
          {
            path: 'reservation',
            name: 'Reservation',
            component: () => import('../components/forms/Reservation.vue'),
          },
          {
            path: 'vaction',
            name: 'Vaction',
            component: () => import('../components/forms/Vaction.vue'),
          },
          {
            path: 'performance',
            name: 'Performance',
            component: () => import('../components/forms/Performance.vue'),
          },
          {
            path: 'historicalOrders',
            name: 'HistoricalOrders',
            component: () => import('../components/forms/HistoricalOrders.vue'),
          },
        ],
      },
    ],
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
