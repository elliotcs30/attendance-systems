<template>
  <div class="container py-5">
    <img src="../assets/titanlogo.png" alt="titan logo">
    <form 
      class="w-100" 
      @submit.stop.prevent="handleSubmit"
    >
      <div class="text-center mb-4">
        <h1 class="h3 mb-3 font-weight-normal">
          Sign Up
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
          autocomplete="account"
          required
          autofocus
        >
      </div>

      <div class="form-label-group mb-2">
        <label for="name">Name</label>
        <input
          id="name"
          v-model="name"
          name="name"
          type="text"
          class="form-control"
          placeholder="name"
          autocomplete="username"
          required
          autofocus
          >
      </div>

      <div class="form-label-group mb-2">
        <label for="tel">Tel</label>
        <input
          id="tel"
          v-model="tel"
          name="tel"
          type="tel"
          class="form-control"
          placeholder="Tel"
          autocomplete="tel" 
          required
        >
      </div>

      <div class="form-label-group mb-2">
        <label for="email">Email</label>
        <input
          id="email"
          v-model="email"
          name="email"
          type="email"
          class="form-control"
          placeholder="email"
          autocomplete="email"
          required
        >
      </div>

      <div class="form-label-group mb-3">
        <label for="password">Password</label>
        <input
          id="password"
          v-model="password"
          name="password"
          type="password"
          class="form-control"
          placeholder="Password"
          autocomplete="new-password"
          required
        >
      </div>

      <div class="form-label-group mb-3">
        <label for="password-check">Password Check</label>
        <input
          id="password-check"
          v-model="passwordCheck"
          name="passwordCheck"
          type="password"
          class="form-control"
          placeholder="Password"
          autocomplete="new-password"
          required>
      </div>

      <div class="form-label-group mb-2">
        <label for="description">Description</label>
        <input 
          id="description" 
          v-model="description" 
          name="description" 
          type="text" 
          class="form-control" 
          placeholder="Description"
          autocomplete="description" 
          required
        >
      </div>

      <div class="form-label-group mb-2">
        <label for="image">Image</label>
        <input
          id="image" 
          v-model="image" 
          name="image" 
          type="text" 
          class="form-control"
          placeholder="Image" 
          autocomplete="image" 
          required
        >
      </div>

      <button 
        class="btn btn-lg btn-primary btn-block mb-3"
        type="submit"
      >
        Submit
      </button>

      <div class="text-center mb-3">
        <p>
          <router-link to="/signin">
            Cancel
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
  data() {
    return { // component 需要使用 function return 來回傳資料
      account: '',
      name: '',
      tel: '',
      email: '',
      password: '',
      passwordCheck: '',
      description: '',
      image: '',
      isProcessing: false
    }
  },
  methods: {
    async handleSubmit() {
      try {
        // 如果 account 或 password 為空，則使用 Toast 提示
        // 然後 return 不繼續往後執行
        if (!this.account || !this.password || !this.email) {
          Toast.fire({
            icon: 'warning',
            title: '請填入 account、password 和 email'
          })
          return
        }
        this.isProcessing = true

        // 使用 authorizationAPI 的 signIn 方法
        // 並且帶入使用者填寫的 account 和 password
        const response = await authorizationAPI.signUp({
          account: this.account,
          name: this.name,
          tel: this.tel,
          email: this.email,
          password: this.password,
          passwordCheck: this.passwordCheck,
          description: this.description,
          is_admin: 0,
          image: this.image
        })

        // TODO: 取得 API 請求後的資料
        const { data } = response

        if (data.status !== 'success') {
          throw new Error(data.message)
        }

        // 顯示成功提示
        Toast.fire({
          icon: 'success',
          title: '註冊成功'
        })
        
        // 成功登入後轉址到打卡首頁
        this.$router.push('/signin')
      } catch (error) {
        // 將欄位清空
        this.account = ''
        this.name = ''
        this.tel = ''
        this.email = ''
        this.password = ''
        this.passwordCheck = ''
        this.description = ''
        this.image = ''

        // 顯示錯誤提示
        Toast.fire({
          icon: 'warning',
          title: '請確認account、password 和 email 欄位是否有填寫！'
        })

        // 因為註冊失敗，所以要把按鈕狀態還原
        this.isProcessing = false
      }
    }
  }
}
</script>

<style>
h3 {
  margin-top: 0;
  margin-bottom: 0;
  font-size: 18px;
  font-weight: bold;
  color: #434343;
}
</style>