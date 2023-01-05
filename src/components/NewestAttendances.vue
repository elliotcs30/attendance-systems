<template>
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
            <th scope="col">Work time</th>
            <th scope="col">Leave time</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(attendance, index) in attendances"
          :key="attendance.id" :index="index++">
            <th scope="row">{{ index }}</th>
            <td>{{ attendance.staffName }}</td>
            <td>{{ attendance.status }}</td>
            <td>{{ attendance.create_time }}</td>
            <td>{{ attendance.update_time }}</td>
          </tr>
        </tbody>
      </table>
      
      
    </div>
  </div>
</template>

<script>
import { v4 as uuidv4 } from 'uuid'
export default {
  data() {
    return {
      attendances: [
        {
          id: uuidv4(),
          staffName: 'Elliot',
          status: 'Working',
          create_time: '2023/01/04  08:00:00',
          update_time: '2023/01/04  08:00:00'
        },
        {
          id: uuidv4(),
          staffName: 'Elliot',
          status: 'OFF',
          create_time: '-',
          update_time: '-'
        },
        {
          id: uuidv4(),
          staffName: 'Elliot',
          status: 'Work',
          create_time: '2023/01/02  08:00:00',
          update_time: '2023/01/02  17:00:00'
        },
        {
          id: uuidv4(),
          staffName: 'Elliot',
          status: 'Half',
          create_time: '2023/01/01 08:00:00',
          update_time: '2023/01/01 12:00:00'
        }
      ]
    }
  }
}
</script>

<style scoped>
small {
  font-size: 10px;
}
</style>
