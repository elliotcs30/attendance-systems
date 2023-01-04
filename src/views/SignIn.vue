<template>
  <div class="container py-5">
    <img src="../assets/titanlogo.png" alt="titan logo">
    <form 
      class="w-100" 
      @submit.prevent.stop="handleSubmit"
    >
      <div class="text-center mb-4">
        <h1 class="h3 mb-3 font-weight-normal">
          Sign In
        </h1>
      </div>

      <div class="form-label-group mb-2">
        <label for="account">Account</label>
        <input 
          id="account"
          v-model="account"
          name="account"
          type="text"
          class="form-control"
          placeholder="Account"
          autocomplete="username"
          required
          autofocus
        >
      </div>

      <div class="form-label-group mb-3">
        <label for="passwaor">Password</label>
        <input 
          id="password"
          v-model="password"
          name="password"
          type="password"
          class="form-control"
          placeholder="Password"
          autocomplete="current-password"
          required
        >
      </div>

      <button
        class="btn btn-lg btn-primary btn-block mb-3"
        type="submit"
        :disabled="isProcessing"
      >
        Submit
      </button>

      <div class="text-center mb-3">
        <p>
          <router-link to="/signup">
            Sign Up
          </router-link>
          ．
          <router-link to="/admin/signin">
            Admin Sign In
          </router-link>
        </p>
      </div>

      <p class="mt-5 mb-3 text-muted text-center">
        &copy; 2022-2023
      </p>
    </form>
  </div>
</template>

<script>
import authorizationAPI from './../apis/authorization'
import { Toast } from './../utils/helpers'

export default {
  data () {
    return { // component 需要使用 function return 來回傳資料
      account: '',
      password: '',
      isProcessing: false
    }
  },
  methods: {
    async handleSubmit () {
      try {
        // 如果 account 或 password 為空，則使用 Toast 提示
        // 然後 return 不繼續往後執行
        if (!this.account || !this.password) {
          Toast.fire({
            icon: 'warning',
            title: '請填入 account 和 password'
          })
          return
        }
        this.isProcessing = true

        // 使用 authorizationAPI 的 signIn 方法
        // 並且帶入使用者填寫的 account 和 password
        const response = await authorizationAPI.signIn({
          account: this.account,
          password: this.password
        })

        // TODO: 取得 API 請求後的資料
        const { data } = response

        if (data.status !== 'success' || data.token === undefined) {
          throw new Error(data.message)
        }

        // 將 token 存放在 localStorage 內
        localStorage.setItem('token', data.token)

        // 成功登入後轉址到打卡首頁
        this.$router.push('/attendances')
      } catch (error) {
        // 將帳號、密碼欄位清空，增加惡意人士破解難度
        this.account = ''
        this.password = ''

        // 顯示錯誤提示
        Toast.fire({
          icon: 'warning',
          title: '請確認您輸入的帳號或密碼'
        })

        // 因為登入失敗，所以要把按鈕狀態還原
        this.isProcessing = false
      }
    }
  }
}
</script>