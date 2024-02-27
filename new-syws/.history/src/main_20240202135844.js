import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { userRegisterService } from '@/api/user'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

// 设置全局错误处理程序
app.config.errorHandler = (err, vm, info) => {
  console.error('全局错误捕获:', err, vm, info)
  // 根据需要进行错误处理
}

app.mount('#app')
