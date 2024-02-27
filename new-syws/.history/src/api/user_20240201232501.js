import { request } from '@/utils/request'

// 注册用户
export const userRegisterService = (data) => {
  request.post('/stu/registerStu', data)
}

// 用户登录
export const userLoginService = ({ identity, password }) => {
  request.post('/stu/findStuByIdentityAndPwo', { identity, password })
}
