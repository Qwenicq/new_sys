<script setup>
const onClickLeft = () => history.back()
</script>

<template>
  <van-nav-bar left-arrow @click-left="onClickLeft" />

  <div class="main">
    <img src="@/assets/server.png" class="logo" />
    <h1>Server组</h1>
    <p>
      如果没有能力，我们岂敢称之为Windows。2012年，他们大二，他们的《通讯中心》《通讯中心-极速版》在Windows
      Phone
      Store上线，拿下了5W的下载量；2013年，他们大三，他们的《语音识别》在“汇博杯”拿下全国一等奖，Web版《西邮图书馆》《西邮成绩》获得了校园的一片掌声；2014年，他们大四，他们拿下了无数份万元Offer；2015年，你们大一，Windows组相信你们。
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
