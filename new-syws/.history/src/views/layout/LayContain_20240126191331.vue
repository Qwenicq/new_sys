<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
const changeChanel = (name) => {
  router.push('/' + name)
}
</script>

<template>
  <div class="BGC">
    <div class="btnAll">
      <div class="partbtn" @click="changeChanel('android')">
        <img src="@/assets/android.png" />
        <p>Android</p>
      </div>
      <div class="partbtn" @click="changeChanel('web')">
        <img src="@/assets/vue.png" />
        <p>Web(前端)</p>
      </div>
      <div class="partbtn" @click="changeChanel('ios')">
        <img src="@/assets/ios.png" />
        <p>ios</p>
      </div>
      <div class="partbtn" @click="changeChanel('server')">
        <img src="@/assets/go-gopher.png" />
        <p>Server(后端)</p>
      </div>
      <div class="partbtn" @click="changeChanel('lab')">
        <img src="@/assets/3G.webp" />
        <p>3G实验室</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.BGC {
  background-size: cover;
  height: 100vh;
  background: #5f2c82; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to bottom,
    #49a09d,
    #5f2c82
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to bottom,
    #49a09d,
    #5f2c82
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
.btnAll {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 80vh; /* 设置高度，确保整个视口可见 */
  gap: 30px; /* 项目之间的间隔 */
}
.partbtn {
  margin-bottom: 10px;
  background: linear-gradient(to right, #70e1f5, #ffd194);
  display: flex;
  flex-direction: row; /* 将子元素垂直排列 */
  align-items: center; /* 在交叉轴上居中，垂直居中 */
  text-align: center; /* 在主轴上居中，水平居中 */
  width: 200px;
  border: 20px solid rgba(0, 0, 0, 0);
  border-radius: 20px;
}
p {
  margin: 0;
  display: inline-block;
  height: 50px;
  font-size: 20px;
  line-height: 50px;
  font-weight: 700;
}
img {
  width: 40px;
  height: 40px;
  margin-left: 35px;
}
</style>
