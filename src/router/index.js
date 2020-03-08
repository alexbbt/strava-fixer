import Vue from 'vue';
import VueRouter from 'vue-router';
import HomePage from '../views/HomePage';

import store from '../store';
import { GET_EDITABLE_FILE } from '../store/getters';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage,
  },
  {
    path: '/upload',
    name: 'upload',
    component: () => import(/* webpackChunkName: "upload" */ '../views/UploadPage'),
  },
  {
    path: '/map',
    name: 'map',
    component: () => import(/* webpackChunkName: "map" */ '../views/MapPage'),
    beforeEnter: (to, from, next) => {
      if (store.getters[GET_EDITABLE_FILE]) {
        next();
      } else {
        next('/upload');
      }
    },
  },
  {
    path: '/export',
    name: 'export',
    component: () => import(/* webpackChunkName: "export" */ '../views/ExportPage'),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
