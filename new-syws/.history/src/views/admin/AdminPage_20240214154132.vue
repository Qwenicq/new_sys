<script setup>
import { allUserInfo } from '@/api/user'
const hu = async () => {
  const res = await allUserInfo()
  const user = res.data.data
  console.log(user)
}
hu()
</script>

<template>
  <table border="1" width="100%" align="center">
    <thead>
      <tr>
        <th>编号</th>
        <th>姓名</th>
        <th>学号</th>
        <th>Email</th>
        <th>电话</th>
        <th>QQ</th>
        <th>方向</th>
        <th>面试状态</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in user">
        <td>{{ item.ID }}</td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped></style>
