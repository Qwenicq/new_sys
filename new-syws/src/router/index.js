import { createRouter, createWebHistory } from 'vue-router'
import { useUserStore } from '@/stores'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/login', component: () => import('@/views/login/LoginPage.vue') },
    {
      path: '/register',
      component: () => import('@/views/register/RegisterPage.vue')
    },
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
          component: () => import('@/views/user/UserPage.vue'),
          meta: { requiresAuth: true }
        }
      ]
    },
    {
      path: '/android',
      component: () => import('@/views/detail/AndroidPage.vue')
    },
    { path: '/ios', component: () => import('@/views/detail/IosPage.vue') },
    { path: '/lab', component: () => import('@/views/detail/LabPage.vue') },
    {
      path: '/server',
      component: () => import('@/views/detail/ServerPage.vue')
    },
    { path: '/web', component: () => import('@/views/detail/WebPage.vue') },
    {
      path: '/setting',
      // meta: { requiresAuth: true },
      component: () => import('@/views/user/UserSetting.vue')
    },
    { path: '/admin', component: () => import('@/views/admin/AdminPage.vue') }
  ]
})

router.beforeEach((to) => {
  // 如果没有token, 且访问的是非登录页，拦截到登录，其他情况正常放行
  const useStore = useUserStore()
  if (!useStore.token && to.meta.requiresAuth) return '/login'
})

export default router
