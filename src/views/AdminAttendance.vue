<template>
  <div class="container py-5 mt-3">
    <div class="row">
      <div class="col-md-12">
        <h1>{{ attendance.name }}</h1>
        <span class="badge badge-secondary mt-1 mb-3">
          {{ attendance.categoryName }}
        </span>
      </div>
      <div class="col-md-4">
        <img 
          class="img-responsive center-block"
          :src="attendance.image || emptyImage"
          alt="staff image"
          style="width: 250px; margin-bottom: 25px;" >
      </div>

      <div class="well">
        <ul class="list-unstyled">
          <li>
            <strong>Description:</strong>
            {{ attendance.description }}
          </li>
          <li>
            <strong>Email:</strong>
            {{ attendance.email }}
          </li>
          <li>
            <strong>Tel:</strong>
            {{ attendance.tel }}
          </li>
        </ul>
      </div>

      <div class="col-md-8">
        <p>{{ attendance.description }}</p>
      </div>
    </div>
    <hr>
    <button
      type="button"
      class="btn btn-link"
      @click="$router.back()"
    >
      回上一頁
    </button>
  </div>
</template>

<script>
import { emptyImageFilter } from './../utils/mixins'
const dummyData = {
  attendance: {
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
  }
}

export default {
  name: 'AdminAttendance',
  mixins: [emptyImageFilter],
  data () {
    return {
      attendance: {
        id: -1,
        name: '',
        tel: '',
        email: '',
        image: '',
        description: '',
        categoryName: '',
      }
    }
  },
  mounted () {
    const { id: attendanceId } = this.$route.params
    this.fetchAttendance(attendanceId)
  },
  methods: {
    fetchAttendance () {
      const { attendance } = dummyData
      this.attendance = {
        ...this.attendance,
        id: attendance.id,
        name: attendance.name,
        tel: attendance.tel,
        email: attendance.email,
        image: attendance.image,
        description: attendance.description,
        categoryName: attendance.Category.name
      }
    }
  }
}
</script>