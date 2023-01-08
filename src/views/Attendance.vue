<template>
  <div class="container py-5">
    <!-- 使用 NavTabs 元件 -->
    <NavTabs />

    <h1 class="mt-5">
      首頁 - 出勤打卡頁面
    </h1>

    <div class="d-flex text-center" style="height: 20vh">
      <div class="m-auto">
        <h4>Your Position</h4>
        Latitude: {{ currPos.lat.toFixed(2) }}, Longitude:
        {{ currPos.lng.toFixed(2) }}
      </div>
      <div class="m-auto">
        <h4>Distance</h4>
        {{ distance.toFixed(2) }} miles
      </div>
      <div class="m-auto">
        <h4>Company Position</h4>
        <span v-if="otherPos">
          Latitude: {{ otherPos.lat.toFixed(2) }}, Longitude:
          {{ otherPos.lng.toFixed(2) }}
        </span>
        <span v-else>Click the map to select a position</span>
      </div>
    </div>
    <div ref="mapDiv" style="width: 100%; height: 50vh;" />
    
    <button 
      type="button"
      class="btn btn-warning"
      style="margin-top: 20px;"
      v-on:click="addAttendanceRecord()"
    >
      上班打卡
    </button>

  </div>
</template>

<script>
import NavTabs from './../components/NavTabs'
import { computed, ref, onMounted, watch } from 'vue'
import { useGeolocation } from './../useGeolocation'
import { Loader } from '@googlemaps/js-api-loader'
const GOOGLE_MAPS_API_KEY = process.env.VUE_APP_Google_Maps_API_Key
import authorizationAPI from './../apis/authorization'
import { Toast } from './../utils/helpers'

export default {
  name: 'App',
  setup() {
    const { coords } = useGeolocation()
    const currPos = computed(() => ({
      lat: 25.056472 || coords.value.latitude, // 假設當前位址在公司附近
      lng: 121.610744 || coords.value.longitude
    }))
    const otherPos = ref(null)
    otherPos.value = { lat: 25.058515, lng: 121.611872 }
    const loader = new Loader({ apiKey: GOOGLE_MAPS_API_KEY })
    const mapDiv = ref(null)
    let map = ref(null)
    onMounted(async () => {
      await loader.load()
      map.value = new window.google.maps.Map(mapDiv.value, {
        center: otherPos.value,
        zoom: 7
      })
    })
    
    let line = null
    watch([map, currPos, otherPos], () => {
      if (line) line.setMap(null)
      if (map.value && otherPos.value != null)
        line = new window.google.maps.Polyline({
          path: [currPos.value, otherPos.value],
          map: map.value
        })
    })
    const haversineDistance = (pos1, pos2) => {
      const R = 3958.8 // Radius of the Earth in miles
      const rlat1 = pos1.lat * (Math.PI / 180) // Convert degrees to radians
      const rlat2 = pos2.lat * (Math.PI / 180) // Convert degrees to radians
      const difflat = rlat2 - rlat1 // Radian difference (latitudes)
      const difflon = (pos2.lng - pos1.lng) * (Math.PI / 180) // Radian difference (longitudes)
      const d =
        2 *
        R *
        Math.asin(
          Math.sqrt(
            Math.sin(difflat / 2) * Math.sin(difflat / 2) +
            Math.cos(rlat1) *
            Math.cos(rlat2) *
            Math.sin(difflon / 2) *
            Math.sin(difflon / 2)
          )
        )
      return d
    }
    const distance = computed(() =>
      otherPos.value === null
        ? 0
        : haversineDistance(currPos.value, otherPos.value)
    )
    return { currPos, otherPos, distance, mapDiv }
  },
  components: {
    NavTabs
  },
  data() {
    return { // component 需要使用 function return 來回傳資料
      account: '',
      name: '',
      work_hours: '',
      created_at: '', 
      updated_at: '',
      isProcessing: false
    }
  },

  methods: {
    async addAttendanceRecord() {
      try {
        // 使用 authorizationAPI 的 signIn 方法
        // 並且帶入使用者填寫的 account 和 password
        const response = await authorizationAPI.Attendance({
          account: this.account,
          name: this.name,
        })

        // TODO: 取得 API 請求後的資料
        const { data } = response

        if (data.status !== 'success') {
          throw new Error(data.message)
        }

        // 顯示成功提示
        Toast.fire({
          icon: 'success',
          title: '打卡成功'
        })

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