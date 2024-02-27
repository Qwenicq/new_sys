<script setup>
import { ref } from 'vue'
const columns = [
  { text: '未定向', value: 'null' },
  { text: 'Web', value: 'Web' },
  { text: 'Ios', value: 'Ios' },
  { text: 'Android', value: 'Android' },
  { text: 'Server', value: 'Server' }
]
const fieldValue = ref('')
const showPicker = ref(false)

const onConfirm = ({ selectedOptions }) => {
  showPicker.value = false
  fieldValue.value = selectedOptions[0].text
}
</script>

<template>
  <div class="BGC">
    <div class="main">
      <h1>我的</h1>
      <span>姓名：李四</span>
      <span>学号：26222222</span>
      <van-field
        v-model="fieldValue"
        is-link
        readonly
        label="方向"
        placeholder="选择方向"
        @click="showPicker = true"
      />
      <van-popup v-model:show="showPicker" round position="bottom">
        <van-picker
          :columns="columns"
          @cancel="showPicker = false"
          @confirm="onConfirm"
        />
      </van-popup>
    </div>
  </div>
</template>

<style scoped>
.BGC {
  font-family: 'STKaiti', '华文楷体', sans-serif;
  position: relative;
  background-size: cover;
  height: 100vh;
  background: #5f2c82; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to bottom,
    #49a09d,
    #5f2c82
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to bottom,
    #49a09d,
    #5f2c82
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
.main {
  position: absolute;
}
span {
  display: block;
  font-weight: 700;
  font-size: 25px;
  margin-bottom: 5px;
}
.van-field {
  background-color: rgba(0, 0, 0, 0);
  font-size: 25px;
  --van-picker-title-font-size: 20px;
  --van-picker-title-line-height: 10px;
}
</style>
