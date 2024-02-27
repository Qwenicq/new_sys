<script setup>
import { useUserStore } from '@/stores'
// import { userGetInfoService } from '@/api/user'
// const res = userGetInfoService()
// console.log(res)
const userStore = useUserStore()
const userInfo = userStore.user
let state = ''
if (userInfo.State_3 === 'true') {
  state = '通过三面'
} else if (userInfo.State_2 === 'true') {
  state = '通过二面'
} else if (userInfo.State_1 === 'true') {
  state = '通过一面'
} else {
  state = '暂时未有结果'
}
</script>

<template>
  <div class="BGC">
    <div class="main">
      <h1>
        <img src="@/assets/coke.png" />
        <p>我的</p>
      </h1>
      <span>姓名：{{ userInfo.Name }}</span>
      <span>学号：{{ userInfo.Identity }}</span>
      <span>班级：{{ userInfo.Class }}</span>
      <span>电话：{{ userInfo.Phone }}</span>
      <span>方向：{{ userInfo.Direction }}</span>
      <span>面试状态：</span>
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
  position: absolute;
  left: 30%;
  top: 25%;
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
