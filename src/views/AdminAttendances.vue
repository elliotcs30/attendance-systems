<template>
  <div class="container py-5 mt-3">
    <!-- 後台 Admin Navber -->
    <Admin-Navbar />

    <a
      href="#"
      class="btn btn-primary mb-4"
    >
      New Attendance record
    </a>

    <!-- 後台考勤列表 Admin attendances table -->
    <Admin-Attendances-Table />
  </div>
</template>

<script>
import AdminNav from './../components/AdminNav.vue'
import AdminAttendancesTable from './../components/AdminAttendancesTable.vue'

export default {
  components: {
    "Admin-Navbar": AdminNav,
    "Admin-Attendances-Table": AdminAttendancesTable
  }
}
</script>