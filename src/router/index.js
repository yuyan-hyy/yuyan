import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import Seckill from '../pages/Seckill.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: Home },
        { path: '/seckill', component: Seckill }
    ]
})

export default router