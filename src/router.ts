import type {Router, RouteRecordRaw} from 'vue-router';
import {createRouter, createWebHistory} from 'vue-router';


const routes: Array<RouteRecordRaw> =  [
  {
    path: '/products/:id',
    component: () => import('./views/ProductDetails.vue'),
  },
]

const router: Router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;