<script setup></script>

<template>
  <div class="BGC">
    <div class="main">
      <h1><img src="@/assets/coke.png" />我的</h1>
      <span>姓名：李四</span>
      <span>学号：26222222</span>
      <span>方向：Web</span>
    </div>
  </div>
</template>

<style scoped>
.BGC {
  font-family: 'STKaiti', '华文楷体', sans-serif;
  position: relative;
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
.main {
  position: absolute;
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
