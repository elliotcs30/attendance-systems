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
    return { // component ???????????? function return ???????????????
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
        // ?????? account ??? password ?????????????????? Toast ??????
        // ?????? return ?????????????????????
        if (!this.account || !this.password || !this.email) {
          Toast.fire({
            icon: 'warning',
            title: '???????????????????????????????????????!'
          })
          return
        }
        if (this.password !== this.passwordCheck) {
          Toast.fire({
            icon: 'warning',
            title: '??????????????????????????????????????????!'
          })
          return
        }
        
        // ?????? authorizationAPI ??? signIn ??????
        // ?????????????????????????????? account ??? password
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

        // TODO: ?????? API ??????????????????
        const { data } = response

        if (data.status === 'error') {
          throw new Error(data.message)
        }
        
        // ??????????????????
        Toast.fire({
          icon: 'success',
          title: '????????????'
        })
        this.isProcessing = true
        
        // ????????????????????????????????????
        this.$router.push('/signin')
      } catch (error) {
        // ???????????????
        this.account = ''
        this.name = ''
        this.tel = ''
        this.email = ''
        this.password = ''
        this.passwordCheck = ''
        this.description = ''
        this.image = ''

        // ??????????????????
        Toast.fire({
          icon: 'error',
          title: error.message
        })

        // ???????????????????????????????????????????????????
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