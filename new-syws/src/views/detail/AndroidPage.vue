<script setup>
const onClickLeft = () => history.back()
</script>

<template>
  <van-nav-bar left-arrow @click-left="onClickLeft" />

  <div class="main">
    <img src="@/assets/bigAndroid.png" class="logo" />
    <h1>Android组</h1>
    <p>
      利用Android系统的开放性，Android开发组进行了各种各样的移动应用开发，是实验室中成果最多、规模最大的开发组。
    </p>
    <p>
      Android开发组多次参加多种大赛，并获得了不错的成绩！应用《酷步》，曾参加全国级大赛并获奖，《西邮图书借阅系统》率先发布，《iXiyou》整合了多种与西邮校园相关的功能，方便了西邮学生。
    </p>
    <p>Android开发组已走出了多位优秀的学长、学姐，并就职于国内知名企业。</p>
  </div>
</template>

<style scoped>
.main {
  background: #c9ffbf; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to top,
    #ffafbd,
    #c9ffbf
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to top,
    #ffafbd,
    #c9ffbf
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  font-family: 'STKaiti', '华文楷体', sans-serif;
  text-align: justify;
  line-height: 1.6;
  height: 100vh;
}
.logo {
  width: 100%;
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
  --van-nav-bar-background: #c9ffbf;
  --van-nav-bar-arrow-size: 25px;
  --van-nav-bar-height: 40px;
}
</style>
