import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/login', component: () => import('@/views/login/LoginPage.vue') },
    {
      path: '/',
      component: () => import('@/views/layout/LayoutPage.vue'),
      redirect: '/index/content',
      children: [
        {
          path: '/index/content',
          component: () => import('@/views/layout/LayContain.vue')
        },
        {
          path: '/index/user',
          component: () => import('@/views/user/UserPage.vue')
        }
      ]
    },
    {
      path: '/android',
      component: () => import('@/views/detail/AndroidPage.vue')
    },
    { path: '/ios', component: () => import('@/views/detail/IosPage.vue') },
    { path: '/lab', component: () => import('@/views/detail/LabPage.vue') },
    { path: '/server', component: () => import('@/views/detail/Server.vue') },
    { path: '/web', component: () => import('@/views/detail/WebPage.vue') }
  ]
})

export default router
