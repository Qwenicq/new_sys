import request from '@/utils/request'

// 注册用户
export const userRegisterService = (data) => {
  request.post('/stu/createStu', data)
}

// 用户登录
export const userLoginService = ({ identity, password }) => {
  request.post('/stu/findStuByIdentityAndPwo', { identity, password })
}

// 获取学生信息
export const userGetInfoService = ({ identity }) => {
  request.get('/stu/getAStuByIdentity', { identity })
}
