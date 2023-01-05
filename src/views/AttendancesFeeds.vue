<template>
  <div class="container py-5">
    <NavTabs />

    <h1 class="mt-5">
      最新打卡紀錄
    </h1>
    <hr>
    <div class="row">
      <div class="col-md-12">
        <!-- 最新打卡 NewestAttendances -->
        <NewestAttendances />
      </div>
    </div>
  </div>
</template>

<script>
import NavTabs from './../components/NavTabs'
import NewestAttendances from './../components/NewestAttendances'

export default {
  name: 'App',
  setup() { },
  components: {
    NavTabs,
    NewestAttendances
  }
}
</script>