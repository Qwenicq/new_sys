<script setup>
import { ref } from 'vue'
const formModel = ref({
  identity: '',
  password: ''
})
const onSubmit = () => {}
</script>

<template>
  <div class="Bg">
    <div class="main">
      <h1>登录</h1>
      <van-form @submit="onSubmit">
        <van-cell-group inset>
          <van-field
            v-model="formModel.identity"
            name="学号"
            label="学号"
            placeholder="学号"
            :rules="[{ required: true, message: '请填写学号' }]"
          />
          <van-field
            v-model="formModel.password"
            type="password"
            name="密码"
            label="密码"
            placeholder="密码"
            :rules="[{ required: true, message: '请填写密码' }]"
          />
        </van-cell-group>
        <a href="/register" class="rea">立即注册</a>
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
.Bg {
  font-family: 'STKaiti', '华文楷体', sans-serif;
  position: relative;
  height: 100vh;
  background: #ec6f66; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #f3a183,
    #ec6f66
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #f3a183,
    #ec6f66
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}

h1 {
  text-align: center;
  color: #0c0a02;
}
.main {
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
}
.rea {
  display: block;
  margin-top: 5px;
  text-align: right;
  font-size: 15px;
  color: #0000009d;
}
</style>
