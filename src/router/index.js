import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'dataView',
    component: () => import(/* webpackChunkName: "dataView" */ '../views/DataView/index.vue'),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
