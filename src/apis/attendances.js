import { apiHelper } from './../utils/helpers'
const getToken = () => localStorage.getItem('token')

export default {
  getAttendances ({ page }) {
    const searchParams = new URLSearchParams({ page })
    return apiHelper.get(`/attendances?${searchParams.toString()}`, {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  }
}