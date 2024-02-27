<script setup>
const onClickLeft = () => history.back()
</script>

<template>
  <van-nav-bar left-arrow @click-left="onClickLeft" />

  <div class="main">
    <img src="@/assets/3G.webp" class="logo" />
    <h1>移动应用开发实验室</h1>
    <p>
      西安邮电大学移动应用开发实验室，亦称西安邮电大学3G手机应用开发实验室，创建于2011年，隶属于西安邮电大学计算机学院，专注于目前主流的三大移动平台的应用开发和Web开发，并以服务在校学生、丰富在校学生移动应用为目标，自行设计和开发了多款手机客户端软件以及PC、移动Web服务。实验室针对不同平台和成员兴趣，相应地划分为4个开发小组，包括苹果iOS、谷歌Android、微软Windows（Windows
      8 Metro及Windows
      Phone）和Web小组。实验室以自主学习与共同交流并行的自发式学习方式为主，培养成员的学习兴趣及自主学习能力，努力为每位成员创造最佳的学习环境和学习氛围，为打造一批移动应用开发能手而不断努力！
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
