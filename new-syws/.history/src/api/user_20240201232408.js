import { request } from '@/utils/request'

export const userRegisterService = (data) => {
    request.post('/stu/registerStu',data)
} 

export const userLoginService = ({ identity, password }) => {
    request.post('/stu/',{identity,password})
}