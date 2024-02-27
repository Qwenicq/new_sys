import request from '@/utils/request'

// 注册用户
export const userRegisterService = (data) => {
  request.post('/api/stu/createStu', data)
}

// 用户登录
export const userLoginService = ({ identity, password }) => {
  request.post('/api/stu/findStuByIdentityAndPwo', { identity, password })
}

// 获取学生信息
export const userGetInfoService = ({ identity }) => {
  request.get('/api/stu/getAStuByIdentity', { identity })
}

// 获取全部信息
export const allUserInfo = () => {
  request.get('/api/stu/getStuList')
}
