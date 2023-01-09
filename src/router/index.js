import { createRouter, createWebHashHistory } from 'vue-router'

// 若每個使用者都會進入的頁面，一開始就載入該頁面
import NotFound from '../views/NotFound.vue'
import SignIn from '../views/SignIn.vue'
import Attendances from '../views/Attendances.vue'
import store from './../store'

// 驗證使用者有無 isAdmin 的權限
const authorizeIsAdmin = (to, from, next) => {
  const currentUser = store.state.currentUser
  if (currentUser && !currentUser.isAdmin) {
    next('/404')
    return
  }
  next()
}

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
    component: () => import('../views/AdminSignIn.vue'),
    beforeEnter: authorizeIsAdmin
  },
  {
    path: '/admin',
    exact: true,
    redirect: '/admin/attendances',
    beforeEnter: authorizeIsAdmin
  },
  {
    path: '/admin/attendances',
    name: 'admin-attendances',
    component: () => import('../views/AdminAttendances.vue'),
    beforeEnter: authorizeIsAdmin
  },
  {
    path: '/admin/attendances/:id',
    name: 'admin-attendance',
    component: () => import('../views/AdminAttendance.vue'),
    beforeEnter: authorizeIsAdmin
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
router.beforeEach(async (to, from, next) => {
  // 從 localStorage 取出 token
  const tokenInLocalStorage = localStorage.getItem('token')
  const tokenInStore = store.state.token
  let isAuthenticated = store.state.isAuthenticated // 預設是尚未驗證

  // 比較 localStorage 和 store 中的 token 是否一樣
  // 如果有 token 的話才驗證
  // 使用 dispatch(分發、指派) call Vuex 內的 actions
  // 路由收到 request 之後, 指派其他元件執行特定工作
  if (tokenInLocalStorage && tokenInLocalStorage !== tokenInStore) {
    isAuthenticated = await store.dispatch('fetchCurrentUser')
  }

  // 對於不需要驗證 token 的頁面
  const pathsWithoutAuthentication = ['sign-up', 'sign-in']

  // 如果驗證失敗: token 無效則轉址到登入頁
  if (!isAuthenticated && !pathsWithoutAuthentication.includes(to.name)) {
    next('/signin')
    return
  }

  // 如果驗證成功: token 有效則轉址到打卡首頁
  if (isAuthenticated && pathsWithoutAuthentication.includes(to.name)) {
    next('/attendance')
    return
  }
  
  next()
})

export default router
