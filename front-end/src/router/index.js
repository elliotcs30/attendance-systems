import { createRouter, createWebHashHistory } from 'vue-router'

// 若每個使用者都會進入的頁面，一開始就載入該頁面
import NotFound from '../views/NotFound.vue'
import SignIn from '../views/SignIn.vue'


const routes = [
  {
    path: '/signin',
    name: 'sign-in',
    component: SignIn
  },
  {
    path: '/signup',
    name: 'sign-up',
    component: () => import('../views/SignUp.vue') // 動態載入: 若每個使用者不一定會進入的頁面，可以設為動態載入
  },
  {
    path: '/:catchAll(.*)', // 所有的路由都無法匹配，就會返回 Not Found 這個頁面
    name: 'not-found',      // Vue 元件的名稱
    component: NotFound     // 透過 name 屬性來指派路由
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
