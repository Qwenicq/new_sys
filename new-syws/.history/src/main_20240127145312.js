import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { Locale } from 'vant'
// 引入英文语言包
import enUS from 'vant/es/locale/lang/en-US'

Locale.use('en-US', enUS)

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
