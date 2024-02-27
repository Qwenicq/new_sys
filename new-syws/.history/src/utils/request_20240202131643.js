import { useUserStore } from '@/stores'
import axios from 'axios'
import router from '@/router'
import { showToast } from 'vant'
import 'vant/es/toast/style'

const baseURL = '/api'

const instance = axios.create({
  baseURL,
  timeout: 100000
})

instance.interceptors.request.use(
  (config) => {
    const userStore = useUserStore()
    if (userStore.token) {
      config.headers.Authorization = userStore.token
    }
    return Promise.resolve(config) // 返回 Promise 对象
  },
  (err) => Promise.reject(err)
)

instance.interceptors.response.use(
  (res) => {
    if (res.data.code === 0) {
      return res
    }
    showToast('服务异常')
    return Promise.reject('服务异常') // 返回 Promise 对象
  },
  (err) => {
    showToast('服务异常')
    console.log(err)
    if (err.response?.status === 401) {
      router.push('/login')
    }
    return Promise.reject(err)
  }
)

export default instance
export { baseURL }
