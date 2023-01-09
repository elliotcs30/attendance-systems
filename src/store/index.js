import { createStore } from 'vuex'
import usersAPI from './../apis/users'

export default createStore({
  state: {
    // 在 data 屬性定義的資料，只有該元件可以使用
    // 在 state 屬性中的資料，每個 Vue 元件都可以使用
    // state 是專門放資料的，如果想要更新 state 裡的資料，要呼叫 mutations 裡的函式
    currentUser: {
      id: -1,
      account: '',
      name: '',
      email: '',
      image: '',
      isAdmin: false
    },
    isAuthenticated: false,
    token: ''
  },
  getters: {
  },
  mutations: {
    // 想要修改 state 的資料時，會在 mutations 裡設定函式
    setCurrentUser (state, currentUser) {
      state.currentUser = {
        ...state.currentUser,
        // 將 API 取得的 currentUser 覆蓋掉 Vuex state 中的 curretUser
        ...currentUser
      }
      // 將使用者驗證用的 token 儲存在 state 中
      state.token = localStorage.getItem('token')
      // 將使用者的登入狀態改為 true
      state.isAuthenticated = true
    },
    revokeAuthentication (state) {
      state.currentUser = {}
      state.isAuthenticated = false
      // 登出時一併將 state 內的 token 移除
      state.token = ''
      localStorage.removeItem('token')
    }
  },
  actions: {
    // 設定其他的非同步函式，例如發送 API 請求等等
    // 在 actions 中可以透過參數的方式取得 commit 的方法
    async fetchCurrentUser ({ commit }) {
      try {
        // call usersAPI.getCurrentUser() 方法, 並將 response 顯示出來
        const { data } = await usersAPI.getCurrentUser()
        const { id, account, name, email, description, image, isAdmin } = data

        commit('setCurrentUser', {
          id,
          account,
          name,
          email,
          description,
          image,
          isAdmin
        })
        return true // token 是有效的情況下回傳 true
      } catch (err) { 
        console.error('can not fetch user information')
        // 驗證失敗的話一併觸發登出的行為，以清除 state 中的 token
        commit('revokeAuthentication')
        return false
      }
    }
  },
  modules: {
  }
})
