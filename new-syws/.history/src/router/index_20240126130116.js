import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/login', component: () => import('@/views/login/LoginPage.vue') },
    {
      path: '/', component: () => import('@/views/layout/LayoutPage.vue'),
      redirect: '/index/content',
      children: [
        {}
      ]
    },
    
  ]
})

export default router