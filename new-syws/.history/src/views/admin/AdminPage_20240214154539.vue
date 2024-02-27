<script setup>
import { allUserInfo } from '@/api/user'
import { ref, onMounted } from 'vue' // Assuming you're using Vue 3

const user = ref([])

onMounted(async () => {
  const res = await allUserInfo()
  user.value = res.data.data
})
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
      <tr v-for="item in user" :key="item.ID">
        <td>{{ item.ID }}</td>
        <td>{{ item.Name }}</td>
        <td>{{ item.studentId }}</td>
        <td>{{ item.email }}</td>
        <td>{{ item.phone }}</td>
        <td>{{ item.qq }}</td>
        <td>{{ item.direction }}</td>
        <td>{{ item.interviewStatus }}</td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped></style>
