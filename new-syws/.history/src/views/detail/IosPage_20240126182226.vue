<script setup>
const onClickLeft = () => history.back()
</script>

<template>
  <van-nav-bar left-arrow @click-left="onClickLeft" />

  <div class="main">
    <img src="@/assets/apple.png" class="logo" />
    <h1>iOS组</h1>
    <p>
      iOS组配备了 15 台 Mac mini 和 7 台
      iMac。是目前实验室设备配置最好，规模最大的开发组。
    </p>
    <p>
      组成员们利用实验室设备和iOS平台的种种优势，积极进取，共同奋斗。先后开发了
      《iXiyou》、《西邮图书馆》、《快递查询》、《生活百事通》、
      《微博客户端》、《天气查询系统》等移动应用,并在不断的完善、优化。
    </p>
  </div>
</template>

<style scoped>
.main {
  position: relative;
  background: #e6dada; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to top,
    #274046,
    #e6dada
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to top,
    #274046,
    #e6dada
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  font-family: 'STKaiti', '华文楷体', sans-serif;
  text-align: justify;
  line-height: 1.6;
  color: #2c000056;
  height: 100vh;
}
.logo {
  position: relative;
  left: 25%;
  width: 50%;
}
h1 {
  text-align: center;
}
p {
  text-indent: 2em;
  font-size: 20px;
  font-weight: 800;
  text-align: left;
}
.van-nav-bar {
  --van-nav-bar-arrow-size: 25px;
  --van-nav-bar-height: 40px;
  --van-nav-bar-background: #e6dada;
}
</style>
