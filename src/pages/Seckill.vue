<script setup>
import axios from 'axios'
import { ref } from 'vue'

const msg = ref('')

async function doSeckill(skuId) {
  msg.value = '请求中…'
  try {
    const { data } = await axios.get('/api/seckill', {
      params: { skuId, userId: Math.floor(Math.random() * 100000) }
    })
    msg.value = `商品 ${skuId} ：${data}`
  } catch (e) {
    msg.value = '请求失败：' + (e?.response?.data || e.message)
  }
}
</script>

<template>
  <div class="page">
    <!-- 顶部大图（可选） -->
    <div class="banner-wrap">
      <img class="banner" src="/seckill.png" alt="秒杀 Banner" />
    </div>

    <!-- 两个商品卡片 -->
    <div class="grid">
      <div class="card">
        <img class="thumb" src="/和氏璧.png" alt="商品1" />
        <div class="info">
          <h3>和氏璧</h3>
          <p class="price">原价：¥ 1888</p >
          <p class="price">现价：¥ 888</p >
          <button class="btn" @click="doSeckill(1001)">立即秒杀</button>
        </div>
      </div>

      <div class="card">
        <img class="thumb" src="/青囊书.png" alt="商品2" />
        <div class="info">
          <h3>青囊书</h3>
          <p class="price">原价：¥ 588</p >
          <p class="price">现价：¥ 288</p >
          <button class="btn" @click="doSeckill(1002)">立即秒杀</button>
        </div>
      </div>
    </div>

    <p class="result">{{ msg }}</p >
  </div>
</template>

<style scoped>
.page {
  padding: 24px;
  max-width: 1100px;
  margin: 0 auto;
}

.banner-wrap { margin-bottom: 20px; }
.banner {
  width: 100%;
  display: block;
  border-radius: 12px;
}

.grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px;
}
@media (max-width: 720px) {
  .grid { grid-template-columns: 1fr; }
}

.card {
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 6px 20px rgba(0,0,0,0.08);
  overflow: hidden;
  display: grid;
  grid-template-columns: 1fr 1fr;
}
@media (max-width: 640px) {
  .card { grid-template-columns: 1fr; }
}

.thumb {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.info {
  padding: 16px;
  display: grid;
  align-content: center;
  gap: 8px;
}

h3 { margin: 0; }
.price { color: #e53935; font-weight: 700; }

.btn {
  width: fit-content;
  padding: 10px 18px;
  background: #ffcc00;
  color: #111;
  border: none;
  border-radius: 8px;
  font-weight: 800;
  cursor: pointer;
  box-shadow: 0 8px 18px rgba(0,0,0,0.12);
}
.btn:hover { background: #ffb700; }

.result {
  margin-top: 16px;
  color: #333;
}
</style>