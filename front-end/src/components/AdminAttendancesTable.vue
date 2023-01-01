<template>
  <table class="table">
    <thead class="thead-dark">
      <tr>
        <th scope="col">
          #
        </th>
        <th scope="col">
          Category
        </th>
        <th scope="col">
          Name
        </th>
        <th
          scope="col"
          width="300"
        >
          操作
        </th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="attendance in attendances"
        :key="attendance.id"
      >
        <th scope="row">
          {{ attendance.id }}
        </th>
        <td>
          {{ attendance.Category ? attendance.Category.name : '未分類' }}
        </td>
        <td>
          {{ attendance.name }}
        </td>
        <td class="d-flex justify-content-between">
          <router-link
            :to="{ name: 'admin-attendance', params: { id: attendance.id }}"
            class="btn btn-link"
          >
            Show
        </router-link>

          <a
            href="#"
            class="btn btn-link"
          >
            Edit
          </a>

          <a
            href="#"
            class="btn btn-link"
          >
            Delete
          </a>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
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
  data () {
    return {
      attendances: []
    }
  },
  created () {
    this.fetchAttendances()
  },
  methods: {
    fetchAttendances () {
      this.attendances = dummyData.attendances
    }
  }
}
</script>