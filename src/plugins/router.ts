import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '', redirect: '/aircrafts' },
    {
      path: '/aircrafts',
      name: 'Aircraft',
      component: () => import('../modules/aircrafts/components/Aircraft.vue'),
    },
    {
      path: '/settings',
      name: 'Settings',
      component: () => import('../modules/aircrafts/components/Aircraft.vue'),
    },
    {
      path: '/logout',
      name: 'Lougout',
      component: () => import('../modules/aircrafts/components/Aircraft.vue'),
    },
  ],
})

export default router
