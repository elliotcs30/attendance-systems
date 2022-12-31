<template>
  <div class="container py-5">
    <img src="../assets/titanlogo.png" alt="titan logo">
    <form 
      class="w-100" 
      @submit.prevent.stop="handleSubmit"
    >
      <div class="text-center mb-4">
        <h1 class="h3 mb-3 font-weight-normal">
          Sign Up
        </h1>
      </div>

      <div class="form-label-group mb-3">
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

      <div class="form-label-group mb-3">
        <label for="name">Name</label>
        <input 
          id="name"
          v-model="name"
          name="name"
          type="text"
          class="form-control"
          placeholder="Name"
          autocomplete="name"
          required
          autofocus
        >
      </div>

      <div class="form-field email-field">
          <label for="email">Email</label>
          <input
            id="email"
            v-model="email"
            name="email"
            type="email"
            class="form-control"
            placeholder="Email"
            autocomplete="email"
            required
          />
          <div class="alert-msg">
            <span class="msg">Email已重複註冊！</span>
          </div>
          <div class="alert-msg">
            <span class="msg">Email格式錯誤</span>
          </div>
        </div>

      <div class="form-label-group mb-3">
        <label for="password">密碼</label>
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

      <div class="form-label-group mb-3">
        <label for="password-check">密碼確認</label>
        <input 
          id="password-check"
          v-model="passwordCheck"
          name="password-check"
          type="password"
          class="form-control"
          placeholder="Check Password"
          autocomplete="password"
          required
          autofocus
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
          <router-link to="/signup">
            Sign Up
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
export default {
  data() {
    return { // component 需要使用 function return 來回傳資料
      account: '',
      name: '',
      email: '',
      password: '',
      passwordCheck: '',
    }
  },
  methods: {
    handleSubmit() {
      const data = JSON.stringify({
        account: this.account,
        name: this.name,
        email: this.email,
        password: this.password,
        passwordCheck: this.passwordCheck,
      })

      // TODO: 向後端驗證使用者登入資訊是否合法
      console.log('data', data)
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