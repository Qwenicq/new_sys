<script setup></script>

<template>
  <div class="Bg">
    <div class="main">
      <h1>登录</h1>
      <van-form @submit="onSubmit">
        <van-cell-group inset>
          <van-field
            v-model="username"
            name="学号"
            label="学号"
            placeholder="学号"
            :rules="[{ required: true, message: '请填写学号' }]"
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
.Bg {
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
}
.main {
  position: absolute;
  top: 25%;
  left: 10%;
}
</style>
