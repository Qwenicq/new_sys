<script setup>
import { userRegisterService, allUserInfo } from '@/api/user'
import { ref } from 'vue'
const showPicker = ref(false)
const columns = [
  { text: '未定向', value: 'null' },
  { text: 'Web', value: 'Web' },
  { text: 'Server', value: 'Server' },
  { text: 'Ios', value: 'Ios' },
  { text: 'Android', value: 'Android' }
]
// 提交表单
const formModel = ref({
  name: '',
  identity: '',
  QQ: '',
  email: '',
  class: '',
  phone: '',
  direction: '',
  password: '',
  repassword: ''
})

const onConfirm = ({ selectedOptions }) => {
  formModel.value.direction = selectedOptions[0]?.text
  showPicker.value = false
}

const onSubmit = async () => {
  console.log(formModel.value)
  const res = await userRegisterService(formModel.value)
  console.log(res)
}
</script>

<template>
  <div class="bg">
    <div class="main">
      <h1>注册</h1>
      <van-form @submit="onSubmit">
        <van-cell-group inset>
          <van-field
            v-model="formModel.name"
            name="姓名"
            label="姓名"
            placeholder="姓名"
            :rules="[{ required: true, message: '请填写姓名' }]"
          />

          <van-field
            v-model="formModel.identity"
            type="number"
            name="学号"
            label="学号"
            placeholder="学号"
            :rules="[
              { required: true, message: '请填写学号' },
              {
                pattern: /^\S{8}$/,
                message: '请填写正确的学号',
                trigger: 'onChange'
              }
            ]"
          />
          <van-field
            v-model="formModel.QQ"
            type="number"
            name="QQ"
            label="QQ"
            placeholder="QQ"
            :rules="[{ required: true, message: '请填写QQ' }]"
          />
          <van-field
            v-model="formModel.email"
            type="email"
            name="Email"
            label="Email"
            placeholder="Email"
            :rules="[{ required: true, message: '请填写Email' }]"
          />
          <van-field
            v-model="formModel.class"
            type="text"
            name="班级"
            label="班级"
            placeholder="班级"
            :rules="[{ required: true, message: '请填写班级' }]"
          />
          <van-field
            v-model="formModel.phone"
            type="number"
            name="电话"
            label="电话"
            placeholder="电话"
            :rules="[
              { required: true, message: '请填写电话' },
              {
                pattern: /^\S{11}$/,
                message: '请填写正确的电话号码',
                trigger: 'onChange'
              }
            ]"
          />
          <van-field
            v-model="formModel.direction"
            is-link
            readonly
            name="picker"
            label="选择方向"
            placeholder="点击选择方向"
            @click="showPicker = true"
          />
          <van-popup v-model:show="showPicker" position="bottom">
            <van-picker
              :columns="columns"
              @confirm="onConfirm"
              @cancel="showPicker = false"
            />
          </van-popup>
          <van-field
            v-model="formModel.password"
            type="password"
            name="密码"
            label="密码"
            placeholder="密码"
            :rules="[
              { required: true, message: '请填写密码' },
              {
                pattern: /^\S{6,15}$/,
                message: '密码必须是 6-15位 的非空字符',
                trigger: 'onChange'
              }
            ]"
          />
          <van-field
            v-model="formModel.repassword"
            type="password"
            name="确认密码"
            label="确认密码"
            placeholder="确认密码"
            :rules="[{ required: true, message: '请填写密码' }]"
          />
        </van-cell-group>
        <a href="/login" class="loa">已有帐号</a>
        <div style="margin: 16px">
          <van-button round block type="primary" native-type="submit">
            提交
          </van-button>
        </div>
      </van-form>
    </div>
  </div>
</template>

<style scoped>
.bg {
  font-family: 'STKaiti', '华文楷体', sans-serif;
  height: 100vh;
  background: #3d7eaa; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to bottom,
    #ffe47a,
    #3d7eaa
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to bottom,
    #ffe47a,
    #3d7eaa
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
.main {
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
}

.loa {
  display: block;
  margin-top: 5px;
  text-align: right;
  font-size: 15px;
  color: #0000009d;
}
</style>
