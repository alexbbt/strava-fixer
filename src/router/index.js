import Vue from 'vue';
import VueRouter from 'vue-router';
import HomePage from '../views/HomePage.vue';

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
    component: () => import(/* webpackChunkName: "upload" */ '../views/UploadPage.vue'),
  },
  {
    path: '/map',
    name: 'map',
    component: () => import(/* webpackChunkName: "map" */ '../views/MapPage.vue'),
  },
  {
    path: '/export',
    name: 'export',
    component: () => import(/* webpackChunkName: "export" */ '../views/ExportPage.vue'),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
