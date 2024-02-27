<script setup>
import router from '@/router'
import { useUserStore } from '@/stores'
import { ref } from 'vue'

const userStore = useUserStore()
const userInfo = userStore.user
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
            v-model="username"
            name="用户名"
            label="用户名"
            placeholder=
            :rules="[{ required: true, message: '请填写用户名' }]"
          />
          <van-field
            v-model="password"
            type="password"
            name="密码"
            label="密码"
            placeholder="密码"
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
p {
  display: inline-block;
}
img {
  width: 20%;
}
span {
  display: block;
  font-weight: 700;
  font-size: 25px;
  margin-bottom: 5px;
}
</style>
