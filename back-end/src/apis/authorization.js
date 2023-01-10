import { apiHelper } from './../utils/helpers'

export default {
  // 帶入需要的參數
  signIn ({ account, password }) {
    // return 一個 Promise
    return apiHelper.post('/signin', {
      account,
      password
    })
  },
  signUp ({ account, name, tel, email, password, passwordCheck, is_admin, description, image }) {
    // return 一個 Promise
    return apiHelper.post('/signup', {
      account,
      name,
      tel,
      email,
      password,
      passwordCheck,
      is_admin,
      description,
      image
    })
  },

}