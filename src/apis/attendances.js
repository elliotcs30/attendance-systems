import { apiHelper } from './../utils/helpers'
const getToken = () => localStorage.getItem('token')

export default {
  getAttendances ({ page }) {
    const searchParams = new URLSearchParams({ page })
    return apiHelper.get(`/attendances?${searchParams.toString()}`, {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  },
  getAttendance ({ attendanceId }) {
    return apiHelper.get(`/attendances/${ attendanceId }`, {
      headers: { Authorization: `Bearer ${getToken()}`}
    })
  },
  addAttendance ({ formData }) {
    return apiHelper.post('/attendance', formData, {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  }
}