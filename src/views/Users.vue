<template>
  <div class="container py-5">
    <NavTabs />

    <h1 class="mt-5">
      員工資料
    </h1>
    <hr>

    <div class="row">
      <!-- 員工列表 UserTable -->
      <div class="col-md-12">
        <div class="card">
          <div class="card-header">
            員工資料表
          </div>
          <div class="card-body">
            <table class="table table-striped">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Staff Account</th>
                  <th scope="col">Staff Name</th>
                  <th scope="col">Staff Email</th>
                  <th scopr="col">Staff Description</th>
                  <th scope="col">Staff Created At time</th>
                  <th scope="col">Staff Updated At time</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(user, index) in users" :key="user.id" :index="index++">
                  <th scope="row">{{ index }}</th>
                  <td>{{ user.account }}</td>
                  <td>{{ user.name }}</td>
                  <td>{{ user.email }}</td>
                  <td>{{ user.description }}</td>
                  <td>{{ user.createdAt }}</td>
                  <td>{{ user.updatedAt }}</td>
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
// 透過 import 匯入呼叫 API 的方法
import usersAPI from './../apis/users'
import { Toast } from './../utils/helpers'

export default {
  name: 'App',
  setup() { },
  components: {
    NavTabs
  },
  data() {
    return {
      users: []
    }
  },
  created() {
    const { page = '', } = this.$route.query // categoryId = ''
    this.fetchUsers({ queryPage: page, }) // queryCategoryId: categoryId
  },
  beforeRouteUpdate(to, from, next) {
    const { page = '', } = to.query // categoryId = ''
    this.fetchUsers({ queryPage: page, }) // queryCategoryId: categoryId
    next()
  },
  methods: {
    async fetchUsers({ queryPage }) { // queryPage, queryCategoryId
      try {
        const response = await usersAPI.getUsers({
          page: queryPage,
          // categoryId: queryCategoryId
        })

        const {
          users,
          // categories,
          // categoryId,
          page,
          totalPage,
          prev,
          next
        } = response.data

        this.users = users
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
          title: '無法取得員工資料，請稍後再試'
        })
      }
    }
  }
}
</script>