import type {Router, RouteRecordRaw} from 'vue-router';
import {createRouter, createWebHashHistory} from 'vue-router';

const routes: Array<RouteRecordRaw> =  [
  {
    path: '/products/:id',
    component: () => import('./views/ProductDetails.vue'),
  },
]

const router: Router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;