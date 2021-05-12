import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'dataView',
    component: () => import(/* webpackChunkName: "dataView" */ '../views/DataView/index.vue'),
  },
  {
    path: '/listpage',
    name: 'listPage',
    component: () => import(/* webpackChunkName: "listPage" */ '../views/ListPage/index.vue'),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
