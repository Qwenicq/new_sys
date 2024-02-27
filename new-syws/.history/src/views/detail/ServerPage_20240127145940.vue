<script setup>
const onClickLeft = () => history.back()
</script>

<template>
  <van-nav-bar left-arrow @click-left="onClickLeft" />

  <div class="main">
    <img src="@/assets/server.png" class="logo" />
    <h1>Server组</h1>
    <p>如果没有能力，我们岂敢称之为Server。</p>
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
