import axios from 'axios'
import Swal from 'sweetalert2'

const baseURL = 'https://titan-elliot-as1120109.herokuapp.com/api'
// const baseURL = 'http://localhost:3000/api'

export const apiHelper = axios.create({
  baseURL
})

export const Toast = Swal.mixin({
  toast: true,
  position: 'top-end', // 顯示在右上角
  showConfirmButton: false,
  timer: 3000 // 顯示在右上角多久的時間
})