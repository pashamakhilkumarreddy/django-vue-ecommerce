import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';

const PageNotFound = () => import('@/views/PageNotFound.vue');
const ProductDetails = () => import('@/views/ProductDetails.vue');

const routes = [
  {
    path: '/',
    alias: ['/home', '/index'],
    name: 'Home',
    component: Home,
  },
  {
    path: '/product/:categoryId/:productId',
    name: 'ProductDetails',
    component: ProductDetails,
  },
  {
    // path: '*',
    path: '/:catchAll(.*)',
    name: 'PageNotFound',
    component: PageNotFound,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
