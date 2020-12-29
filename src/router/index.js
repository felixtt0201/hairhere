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
    path: '/Dashboard',
    name: 'Dashboard',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../components/Dashboard.vue'),
    children: [
      {
        path: '',
        name: 'Reservation',
        component: () => import('../components/Reservation.vue'),
      },
      {
        path: 'designers',
        name: 'Designers',
        component: () => import('../components/Designers.vue'),
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
