<script setup>
import { ref } from 'vue'
import axios from 'axios'

// 用来显示秒杀结果
const result = ref('')

// 点击按钮时调用后端接口
const doSeckill = async () => {
  try {
    const res = await axios.get('/api/seckill', {
      params: {
        skuId: 1001, // 商品 ID
        userId: Math.floor(Math.random() * 10000) // 模拟不同用户 ID
      }
    })
    result.value = res.data
  } catch (e) {
    result.value = '请求失败: ' + e
  }
}
</script>

<template>
  <nav style="display:flex;gap:12px;padding:12px;border-bottom:1px solid #eee">
    <router-link to="/">首页</router-link>
    <router-link to="/seckill">秒杀</router-link>
  </nav>
  <router-view />
</template>

<style>
button {
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
}
</style>