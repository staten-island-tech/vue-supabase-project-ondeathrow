import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/character',
      name: 'profile',
      component: () => import('../views/ProfileView.vue')
    },
     {
      path: '/character/:name',
      name: 'data',
      component: () => import('../views/CharacterData.vue')
    }, {
      path: '/warp',
      name: 'warp',
      component: () => import('../views/HSRPulling.vue')
    },
    {
      path: '/Relics',
      name: 'relics',
      component: () => import('../views/RelicFarming.vue')
    },
  ]
})

export default router
