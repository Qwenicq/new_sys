<script setup>
const onClickLeft = () => history.back()
</script>

<template>
  <van-nav-bar left-text="返回" left-arrow @click-left="onClickLeft" />

  <div class="main">
    <img src="@/assets/bigAndroid.png" class="logo" />
    <h1>Android组</h1>
    <p>
      利用Android系统的开放性，Android开发组进行了各种各样的移动应用开发，是实验室中成果最多、规模最大的开发组。Android开发组多次参加多种大赛，并获得了不错的成绩！应用《酷步》，曾参加全国级大赛并获奖，《西邮图书借阅系统》率先发布，《iXiyou》整合了多种与西邮校园相关的功能，方便了西邮学生。Android开发组已走出了多位优秀的学长、学姐，并就职于国内知名企业。
    </p>
  </div>
</template>

<style scoped>
.main {
  font-family: 'Brush Script MT', cursive;
}
.logo {
  width: 100%;
}
h1 {
  text-align: center;
}
p {
  font-size: 18px;
}
</style>
