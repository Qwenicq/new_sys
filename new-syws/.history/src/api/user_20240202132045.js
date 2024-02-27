import request from '@/utils/request'

// 注册用户
export const userRegisterService = (data) => {
  request.post('/stu/createStu', { params: data })
}

// 用户登录
export const userLoginService = ({ identity, password }) => {
  request.post('/stu/findStuByIdentityAndPwo', { identity, password })
}

// 获取学生信息
export const userGetInfoService = ({ identity }) => {
  request.get('/stu/getAStuByIdentity', { identity })
}

// 获取全部信息
export const allUserInfo = () => {
  request.get('/stu/getStuList')
}