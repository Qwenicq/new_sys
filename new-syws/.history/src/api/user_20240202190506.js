import request from '@/utils/request'

// 注册用户
export const userRegisterService = (data) => {
  return request.post('/stu/createStu', data)
}

// 用户登录
export const userLoginService = ({ identity, password }) => {
  return request.get(
    `/stu/findStuByIdentityAndPwd?identity=${identity}&password=${password}`
  )
}

// 获取学生信息
export const userGetInfoService = ({ identity }) => {
  console.log(identity)
  return request.get(`/stu/getAStuByIdentity?identity=${identity}`)
}

// 获取全部信息
export const allUserInfo = () => {
  return request.get('/stu/getStuList')
}
