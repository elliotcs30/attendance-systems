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
      v-if="attendance.isLeaveWork"
      type="button"
      class="btn btn-danger btn-border favorite mr-2"
      @click.stop.prevent="leaveWork()">
      下班卡打
    </button>
    <button
      v-else
      type="button"
      class="btn btn-warning"
      style="margin-top: 20px;"
      @click.stop.prevent="addAttendance()"
    >
      上班卡打
    </button>

  </div>
</template>

<script>
import NavTabs from './../components/NavTabs'
import { computed, ref, onMounted, watch } from 'vue'
import { useGeolocation } from './../useGeolocation'
import { Loader } from '@googlemaps/js-api-loader'
const GOOGLE_MAPS_API_KEY = process.env.VUE_APP_Google_Maps_API_Key
import attendancesAPI from './../apis/attendances'
import { mapState } from 'vuex'
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
      attendance: {
        account: '',
        name: '',
        created_at: '',
        updated_at: '',
        isProcessing: false
      },
    }
  },
  computed: {
    ...mapState(['currentUser'])
  },
  methods: {
    // 改用 async/await 語法
    async addAttendance() {
      try {
        // 抓取當前的使用者
        const formData = JSON.parse(localStorage.getItem('userInfo'))

        // 使用撰寫好的 addAttendance 方法去呼叫 API，並取得回傳內容
        const { data } = await attendancesAPI.addAttendance({ formData })

        // 若請求過程有錯，則進到錯誤處理
        if (data.status === 'error') {
          throw new Error(data.message)
        }

        Toast.fire({
          icon: 'success',
          title: '打卡成功，祝你有美好的一天'
        })
      } catch (error) {
        // 請求失敗的話則跳出錯誤提示
        Toast.fire({
          icon: 'error',
          title: '無法打卡，請稍後再試'
        })
      }
    }
  },
  beforeRouteUpdate (to, from, next) {
    const { id: AttendanceId } = to.params
    this.fetchAttendance( AttendanceId )
    next()
  }
}
</script>