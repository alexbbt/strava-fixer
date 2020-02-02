import Vue from 'vue';
import VueRouter from 'vue-router';
import HomePage from '../views/HomePage';

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
