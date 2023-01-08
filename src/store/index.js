import { createStore } from 'vuex'

export default createStore({
  state: {
    // 在 data 屬性定義的資料，只有該元件可以使用
    // 在 state 屬性中的資料，每個 Vue 元件都可以使用
    // state 是專門放資料的，如果想要更新 state 裡的資料，要呼叫 mutations 裡的函式
    currentUser: {
      id: -1,
      name: '',
      email: '',
      image: '',
      isAdmin: false
    },
    isAuthenticated: false
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
      // 將使用者的登入狀態改為 true
      state.isAuthenticated = true
    }
  },
  actions: {
    // 設定其他的非同步函式，例如發送 API 請求等等
  },
  modules: {
  }
})
