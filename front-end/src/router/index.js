import { createRouter, createWebHashHistory } from 'vue-router'
import NotFound from '../views/NotFound.vue'
import SignIn from '../views/SignIn.vue'
import SignUp from '../views/SignUp.vue'

const routes = [
  {
    path: '/signin',
    name: 'sign-in',
    component: SignIn
  },
  {
    path: '/signup',
    name: 'sign-up',
    component: SignUp
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
