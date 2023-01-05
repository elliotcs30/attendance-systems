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
          title: '首頁',
          path: '/attendances'
        },
        {
          id: uuidv4(),
          title: '最新打卡動態',
          path: '/attendances/feeds'
        },
        {
          id: uuidv4(),
          title: 'TOP 10 打卡記錄',
          path: '//attendances/top'
        },
        {
          id: uuidv4(),
          title: '最佳員工',
          path: '/users/top'
        }
      ]
    }
  }
}
</script>
