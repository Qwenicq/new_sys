// import { useUserStore } from '@/stores'
import axios from 'axios'
// import router from '@/router'
// import { showToast } from 'vant'
import 'vant/es/toast/style'

const baseURL = '/api'

const instance = axios.create({
  baseURL,
  timeout: 100000,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
  }
})

export default instance
export { baseURL }
