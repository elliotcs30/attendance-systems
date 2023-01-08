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
        <NewestAttendances />
      </div>
    </div>
    
    <!-- 分頁 AttendancePagination -->
  </div>
</template>

<script>
import NavTabs from './../components/NavTabs'
import NewestAttendances from './../components/NewestAttendances'

const dummyData = {
  "attendances": [
    {
      "id": 1,
      "name": "Elliot",
      "tel": "0958-898-555",
      "email": "elliotcs30@gmail.com",
      "description": "Never Stop Developing",
      "image": "https://reurl.cc/Yd58b4",
      "createdAt": "2023-01-01T00:00:00",
      "updatedAt": "2023-01-01T00:00:00",
      "CategoryId": 1,
      "Category": {
        "id": 1,
        "name": "Staff",
        "createdAt": "2023-01-01T00:00:00",
        "updatedAt": "2023-01-01T00:00:00",
      }
    },
    {
      "id": 2,
      "name": "AAACCC",
      "tel": "0911-123-123",
      "email": "AAACCC123@gmail.com",
      "description": "Never Stop Teching",
      "image": "https://reurl.cc/LXxNz9",
      "createdAt": "2023-01-01T00:00:00",
      "updatedAt": "2023-01-01T00:00:00",
      "CategoryId": 2,
      "Category": {
        "id": 2,
        "name": "Leader",
        "createdAt": "2023-01-01T00:00:00",
        "updatedAt": "2023-01-01T00:00:00",
      }
    },
  ]
}


export default {
  name: 'App',
  setup() { },
  components: {
    NavTabs,
    NewestAttendances
  },
  data() {
    return {
      attendances: []
    }
  },
  created() {
    this.fetchFeeds()
  },
  methods: {
    
    fetchFeeds() {
      this.attendances = dummyData.attendances
    }
  }
}
</script>