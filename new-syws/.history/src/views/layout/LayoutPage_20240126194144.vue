<script setup>
</script>

<template>
  <router-view></router-view>
  <van-tabbar v-model="active">
    <van-tabbar-item to="/index/content" icon="home-o">主页</van-tabbar-item>
    <van-tabbar-item to="/index/user" icon="contact">我的</van-tabbar-item>
  </van-tabbar>
</template>

<style scoped>
.van-tabbar {
  --van-tabbar-background: #5f2c82;
}
.van-tabbar-item {
  --van-tabbar-item-active-background: #5f2c82;
  --van-tabbar-item-active-color: #fff;
}
</style>
