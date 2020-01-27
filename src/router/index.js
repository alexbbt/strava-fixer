import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/upload',
    name: 'upload',
    component: () => import(/* webpackChunkName: "upload" */ '../views/Upload.vue'),
  },
  {
    path: '/map',
    name: 'map',
    component: () => import(/* webpackChunkName: "map" */ '../views/Map.vue'),
  },
  {
    path: '/export',
    name: 'export',
    component: () => import(/* webpackChunkName: "export" */ '../views/Export.vue'),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
