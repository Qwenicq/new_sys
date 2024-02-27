<script setup>
import { changeDir, changeInfo } from '@/api/user'
import { useUserStore } from '@/stores'
import { ref } from 'vue'

const userStore = useUserStore()
const userInfo = userStore.user
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
  name: userInfo.Name,
  QQ: userInfo.QQ,
  Email: userInfo.Email,
  Class: userInfo.Class,
  Phone: userInfo.Phone,
  Direction: userInfo.Direction,
  password: '',
  repassword: ''
})

const onSubmit = async () => {}
</script>

<template>
  <div class="BGC">
    <div class="main">
      <h1>
        <img src="@/assets/coke.png" />
        <p>我的</p>
      </h1>
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
            v-model="formModel.QQ"
            type="number"
            name="QQ"
            label="QQ"
            placeholder="QQ"
            :rules="[{ required: true, message: '请填写QQ' }]"
          />
          <van-field
            v-model="formModel.Email"
            type="email"
            name="Email"
            label="Email"
            placeholder="Email"
            :rules="[{ required: true, message: '请填写Email' }]"
          />
          <van-field
            v-model="formModel.Class"
            type="text"
            name="班级"
            label="班级"
            placeholder="班级"
            :rules="[{ required: true, message: '请填写班级' }]"
          />
          <van-field
            v-model="formModel.Phone"
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
            v-model="formModel.Direction"
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
.BGC {
  font-family: 'STKaiti', '华文楷体', sans-serif;
  position: relative;
  background-size: cover;
  height: 100vh;
  background: #134e5e; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to top,
    #71b280,
    #247991
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to top,
    #71b280,
    #247991
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
.main {
  display: flex;
  flex-direction: column; /* 将子元素垂直排列 */
  align-items: center; /* 在交叉轴上居中，垂直居中 */
  text-align: center; /* 在主轴上居中，水平居中 */
}
h1 {
  display: flex;
  flex-direction: row; /* 将子元素垂直排列 */
  align-items: center; /* 在交叉轴上居中，垂直居中 */
  text-align: center; /* 在主轴上居中，水平居中 */
}

img {
  width: 20%;
}
</style>
