<script setup>
import router from '@/router'
import { useUserStore } from '@/stores'
import { ref } from 'vue'

const userStore = useUserStore()
const userInfo = userStore.user
const state = ref('')

const logoutFn = async () => {
  userStore.removeToken()
  router.push('/')
}

const changeInfoFn = () => {
  router.push('/setting')
}

if (userInfo.State_3 === 'true') {
  state.value = '通过三面'
} else if (userInfo.State_2 === 'true') {
  state.value = '通过二面'
} else if (userInfo.State_1 === 'true') {
  state.value = '通过一面'
} else {
  state.value = '暂无'
}

const viewportHeight = window.innerHeight // 获取视窗的高度
const pixelValue = 5 // 像素值
const vhValue = (pixelValue / viewportHeight) * 100 // 将像素转换为 vh
console.log(vhValue + 'vh') // 输出结果
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
      <span>面试状态：{{ state }}</span>
      <van-button type="primary" @click="logoutFn" class="btn"
        >退出登录</van-button
      >
      <van-button type="primary" @click="changeInfoFn" class="btn btn-r"
        >修改信息</van-button
      >
    </div>
  </div>
</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
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
  left: 50%; /* 将盒子的左侧边缘放置在父元素的水平中心位置 */
  top: 50%; /* 将盒子的顶部边缘放置在父元素的垂直中心位置 */
  transform: translate(-50%, -50%); /* 使用 transform 属性进行水平和垂直居中 */
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
  padding-left: 4.1469194312796205vh;
  width: 20%;
}
span {
  display: block;
  font-weight: 700;
  font-size: 2.962085308056872vh;
  margin-bottom: 0.5924170616113744vh;
}
.btn {
  width: 9.47867298578199vh;
}

.btn-r {
  margin-left: 1.7772511848341233vh;
}
</style>
