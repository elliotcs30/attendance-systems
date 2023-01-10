<template>
  <div class="container py-5">
    <img src="../assets/titanlogo.png" alt="titan logo">
    <form class="w-100" @submit.prevent.stop="handleSubmit">
      <div class="text-center mb-4">
        <h1 class="h3 mb-3 font-weight-normal">
          Sign In
        </h1>
      </div>

      <div class="form-label-group mb-2">
        <label for="account">Account</label>
        <input id="account" v-model="account" name="account" type="text" class="form-control" placeholder="Account"
          autocomplete="username" required autofocus>
      </div>

      <div class="form-label-group mb-3">
        <label for="passwaor">Password</label>
        <input id="password" v-model="password" name="password" type="password" class="form-control"
          placeholder="Password" autocomplete="current-password" required>
      </div>

      <button class="btn btn-lg btn-primary btn-block mb-3" type="submit">
        Submit
      </button>

      <div class="text-center mb-3">
        <p>
          <router-link to="/signup">
            Sign Up
          </router-link>
          ．
          <router-link to="/signin">
            Sign In
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
      password: ''
    }
  },
  methods: {
    handleSubmit() {
      const data = JSON.stringify({
        account: this.account,
        password: this.password
      })

      // TODO: 向後端驗證使用者登入資訊是否合法
      console.log('data', data)
    }
  }
}
</script>