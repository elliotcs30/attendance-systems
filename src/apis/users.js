import { apiHelper } from './../utils/helpers'
const getToken = () => localStorage.getItem('token')

export default {
  getCurrentUser () {
    return apiHelper.get(`/get_current_user`, {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  },
  get ({ userId }) { // 當知道使用者 id 時，可以透過這道 API 獲取完整的 user profile
    return apiHelper.get(`/users/${userId}`, {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  },
  getTopUsers () { // 需要驗證該 token 是否有效，並取得登入者的資訊，不需要完整的 user profile 時，則可以使用這道 API
    return apiHelper.get('/users/top', {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  }
}