<template>
  <div class="container py-5">
    <NavTabs />
    
    <h1 class="mt-5">
      最新打卡紀錄
    </h1>
    <hr>
    
    <div class="row">
      <!-- 打卡列表 AttendanceTable -->
      <div class="col-md-12">
        <!-- 最新打卡 NewestAttendances -->
        <div class="card">
          <div class="card-header">
            Attendance records
          </div>
          <div class="card-body">
            <table class="table table-striped">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Staff Name</th>
                  <th scope="col">State</th>
                  <th scopr="col">Stay Time</th>
                  <th scope="col">Work time</th>
                  <th scope="col">Leave time</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(attendance, index) in attendances" :key="attendance.id" :index="index++">
                  <th scope="row">{{ index }}</th>
                  <td>{{ attendance.name }}</td>
                  <td>{{ attendance.status }}</td>
                  <td> - 3hr </td>
                  <td>{{ attendance.createdAt }}</td>
                  <td>{{ attendance.updatedAt }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
    
    <!-- 分頁 AttendancePagination -->
    <!-- <AttendancesPagination 
      v-if="totalPage.length > 1" 
      :current-page="currentPage" 
      :total-page="totalPage"
      :category-id="categoryId" 
      :previous-page="previousPage" 
      :next-page="nextPage" 
    /> -->
  </div>
</template>

<script>
import NavTabs from './../components/NavTabs'
// import NewestAttendances from './../components/NewestAttendances'
// 透過 import 匯入呼叫 API 的方法
import attendancesAPI from './../apis/attendances'
import { Toast } from './../utils/helpers'

export default {
  name: 'App',
  setup() { },
  components: {
    NavTabs
  },
  data() {
    return {
      attendances: []
    }
  },
  created() {
    const { page = '', } = this.$route.query // categoryId = ''
    this.fetchAttendances({ queryPage: page, }) // queryCategoryId: categoryId
  },
  beforeRouteUpdate(to, from, next) {
    const { page = '', } = to.query // categoryId = ''
    this.fetchAttendances({ queryPage: page, }) // queryCategoryId: categoryId
    next()
  },
  methods: {
    async fetchAttendances({ queryPage }) { // queryPage, queryCategoryId
      try {
        const response = await attendancesAPI.getAttendances({
          page: queryPage,
          // categoryId: queryCategoryId
        })

        console.log('fetchAttendances', response.data.attendances )

        const {
          attendances,
          // categories,
          // categoryId,
          page,
          totalPage,
          prev,
          next
        } = response.data

        this.attendances = attendances
        // this.categories = categories
        // this.categoryId = categoryId
        this.currentPage = page
        this.totalPage = totalPage
        this.previousPage = prev
        this.nextPage = next
      } catch (error) {
        console.log('error', error)
        Toast.fire({
          icon: 'error',
          title: '無法取得餐廳資料，請稍後再試'
        })
      }
    }
  }
}
</script>