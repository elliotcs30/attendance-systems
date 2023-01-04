import { apiHelper } from './../utils/helpers'

export default {
  // 帶入需要的參數
  signIn ({ account, password }) {
    // return 一個 Promise
    return apiHelper.post('/signin', {
      account,
      password
    })
  }
}