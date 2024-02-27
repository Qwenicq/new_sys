<script setup>
import { allUserInfo } from '@/api/user'
import { ref, onMounted } from 'vue' // Assuming you're using Vue 3

const user = ref([])
// const currentPage = ref(1)
onMounted(async () => {
  const res = await allUserInfo()
  user.value = res.data.data
  console.log(user)
})
</script>

<template>
  <table width="100%" align="center" class="info">
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
        <td>{{ item.Identity }}</td>
        <td>{{ item.Email }}</td>
        <td>{{ item.Phone }}</td>
        <td>{{ item.QQ }}</td>
        <td>{{ item.Direction }}</td>
        <td>{{ item.interviewStatus }}</td>
      </tr>
    </tbody>
  </table>
  <!-- <van-pagination v-model="currentPage" :page-count="12" mode="simple" /> -->
</template>

<style scoped>
.info {
  border: 1px solid black;
}
</style>
