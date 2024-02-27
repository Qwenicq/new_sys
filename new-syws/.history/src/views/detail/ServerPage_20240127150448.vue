<script setup>
const onClickLeft = () => history.back()
</script>

<template>
  <van-nav-bar left-arrow @click-left="onClickLeft" />

  <div class="main">
    <img src="@/assets/server.png" class="logo" />
    <h1>Server组</h1>
    <div class="text">
      <p>如果没有能力，我们岂敢称之为Server。</p>
      <p>
        后端开发,
        无疑是一个极为关键的领域，涉及到我们每日互联网生活的每个细节。每当你在网上浏览、搜索或进行购物等活动时，
        背后都有大量的后端技术作为支撑。而随着技术的日益进步，人们对于高效、稳定和安全的网络服务的需求也越来越高。
      </p>
    </div>
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
  color: #503a3ad3;
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
.text {
  width: 40vh;
  margin-left: 20;
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
