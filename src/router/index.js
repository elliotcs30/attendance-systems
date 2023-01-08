import { createRouter, createWebHashHistory } from 'vue-router'

// 若每個使用者都會進入的頁面，一開始就載入該頁面
import NotFound from '../views/NotFound.vue'
import SignIn from '../views/SignIn.vue'
import Attendances from '../views/Attendances.vue'
import store from './../store'

const routes = [
  {
    path: '/',
    name: 'root',
    redirect: '/signin'
  },
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
    path: '/users',
    name: 'users',
    component: () => import('../views/Users.vue')
  },
  {
    path: '/attendances',
    name: 'attendances',
    component: Attendances
  },
  {
    path: '/attendance',
    name: 'attendance',
    component: () => import('../views/Attendance.vue')
  },
  {
    path: '/admin/signin',
    name: 'admin-sign-in',
    component: () => import('../views/AdminSignIn.vue')
  },
  {
    path: '/admin',
    exact: true,
    redirect: '/admin/attendances'
  },
  {
    path: '/admin/attendances',
    name: 'admin-attendances',
    component: () => import('../views/AdminAttendances.vue')
  },
  {
    path: '/admin/attendances/:id',
    name: 'admin-attendance',
    component: () => import('../views/AdminAttendance.vue')
  },
  {
    path: '/:catchAll(.*)', // 所有的路由都無法匹配，就會返回 Not Found 這個頁面
    name: 'not-found',      // Vue 元件的名稱
    component: NotFound     // 透過 name 屬性來指派路由
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  linkExactActiveClass: 'active', // 當前選擇的頁籤
  routes
})

// to: 使用者要去哪個路由, from: 使用者來自哪個路由
router.beforeEach((to, from, next) => {
  // 使用 dispatch(分發、指派) call Vuex 內的 actions
  // 路由收到 request 之後, 指派其他元件執行特定工作
  store.dispatch('fetchCurrentUser')
  next()
})

export default router
