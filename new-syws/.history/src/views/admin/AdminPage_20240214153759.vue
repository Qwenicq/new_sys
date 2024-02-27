<script setup>
import { allUserInfo } from '@/api/user'
const user = []
const hu = async () => {
  const {
    data: { data }
  } = await allUserInfo()
  this.user = data
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
      <tr>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped></style>
