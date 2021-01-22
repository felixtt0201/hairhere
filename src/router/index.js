import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      {
        path: '/',
        name: 'FontIndex',
        component: () => import('../components/fontitem/FontIndex.vue'),
      },
      {
        path: 'designerTotal',
        name: 'DesignerTotal',
        component: () => import('../components/fontitem/DesignerTotal.vue'),
      },
      {
        path: 'designerSingle/:id',
        name: 'DesignerSingle',
        component: () => import('../components/fontitem/DesignerSingle.vue'),
      },
      {
        // 單一設計師 單一作品詳細
        path: 'DesignerSingleWork/:workId',
        name: 'DesignerSingleWork',
        component: () =>
          // eslint-disable-next-line implicit-arrow-linebreak
          import('../components/fontitem/DesignerSingleWork.vue'),
      },
      {
        path: 'reservationF/:listId',
        name: 'Reservation',
        component: () => import('../components/fontitem/Reservation.vue'),
      },
      {
        path: 'confirm/:orderId',
        name: 'Confirm',
        component: () => import('../components/fontitem/Confirm.vue'),
      },
      {
        path: 'orderCompleted',
        name: 'OrderCompleted',
        component: () => import('../components/fontitem/OrderCompleted.vue'),
      },
      {
        path: 'works',
        name: 'Works',
        component: () => import('../components/fontitem/Works.vue'),
      },
      {
        path: 'searchList',
        name: 'SearchList',
        component: () => import('../components/fontitem/SearchList.vue'),
      },
    ],
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
    meta: { requiresAuth: true },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../components/Dashboard.vue'),

    children: [
      {
        path: 'designers',
        name: 'Designers',
        meta: { requiresAuth: true },
        component: () => import('../components/Designers.vue'),
      },
      {
        path: 'information', // 店家資訊
        name: 'Information',
        meta: { requiresAuth: true },
        component: () => import('../components/Information.vue'),
        children: [
          {
            path: 'storeInformation',
            name: 'StoreInformation',
            meta: { requiresAuth: true },
            component: () => import('../components/forms/StoreInformation.vue'),
          },
          {
            path: 'serviceinfo',
            name: 'ServiceInfo',
            meta: { requiresAuth: true },
            component: () => import('../components/forms/ServiceInfo.vue'),
          },
        ],
      },
      {
        path: 'portfolio', // 作品集
        name: 'Portfolio',
        meta: { requiresAuth: true },
        component: () => import('../components/Portfolio.vue'),
      },
      {
        path: 'checkout', // 結帳管理
        name: 'Checkout',
        meta: { requiresAuth: true },
        component: () => import('../components/Checkout.vue'),
      },
      {
        path: 'forms', // 表單管理
        name: 'Forms',
        meta: { requiresAuth: true },
        component: () => import('../components/Forms.vue'),
        children: [
          {
            path: 'reservationback',
            name: 'ReservationBack',
            component: () => import('../components/forms/ReservationBack.vue'),
          },
          {
            path: 'vaction',
            name: 'Vaction',
            meta: { requiresAuth: true },
            component: () => import('../components/forms/Vaction.vue'),
          },
          {
            path: 'performance',
            name: 'Performance',
            meta: { requiresAuth: true },
            component: () => import('../components/forms/Performance.vue'),
          },
          {
            path: 'historicalOrders',
            name: 'HistoricalOrders',
            meta: { requiresAuth: true },
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
