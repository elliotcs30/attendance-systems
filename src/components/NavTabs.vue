<template>
  <ul class="nav nav-tabs mb-4">
    <li
      v-for="tab in tabs"
      :key="tab.id"
      class="nav-item"
    >
      <router-link
        :to="tab.path"
        class="nav-link"
      >
        {{ tab.title }}
      </router-link>
    </li>
  </ul>
</template>

<script>
import { v4 as uuidv4 } from 'uuid'
export default {
  data() {
    return {
      tabs: [
        {
          id: uuidv4(),
          title: '打卡首頁',
          path: '/attendance'
        },
        {
          id: uuidv4(),
          title: '打卡紀錄',
          path: '/attendances'
        },
        {
          id: uuidv4(),
          title: '員工資料',
          path: '/users'
        }
      ]
    }
  }
}
</script>
