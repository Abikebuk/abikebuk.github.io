import Vue from 'vue';
import VueRouter from 'vue-router';
import Content from '@/components/Content.vue';
import Header from '../components/Header.vue';

Vue.use(VueRouter);

const routes = [
  { path: '/', redirect: '/:lang', component: Header },
  { path: '/:lang/:name', component: Content },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
