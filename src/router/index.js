import { createRouter, createWebHistory } from '@ionic/vue-router';
// import { RouteRecordRaw } from 'vue-router';
import HomePage from '@/pages/HomePage.vue';

const routes = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    name: 'Home',
    component: HomePage,
  },
  {
    path: '/detail',
    name: 'Detail',
    component: () => import('@/pages/DetailPage.vue'),
  },
  {
    path: '/web3',
    name: 'Web3',
    component: () => import('@/pages/Web3Page.vue'),
  },
  {
    path: '/:pathMatch(.*)*',
    name: '404',
    component: () => import('@/pages/Error404.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
