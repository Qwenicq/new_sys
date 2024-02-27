<script setup></script>

<template>
  <router-view></router-view>
  <van-tabbar v-model="active">
    <van-tabbar-item icon="home-o">主页</van-tabbar-item>
    <van-tabbar-item icon="contact">标签</van-tabbar-item>
  </van-tabbar>
</template>
