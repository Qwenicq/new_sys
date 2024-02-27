import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// 引入样式
import 'vue-easytable/libs/theme-default/index.css'
// 引入组件库
import VueEasytable from 'vue-easytable'

Vue.use(VueEasytable)

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
