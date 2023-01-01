<template>
  <nav class="navbar navbar-expand-lg fixed-top navbar-dark bg-dark">
    <router-link
      class="navbar-brand"
      to="/"
    >
      Titan 考勤系統
    </router-link>
  
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div
      id="navbarSupportedContent"
      class="navbar-collapse collapse"
    >
      <div class="ml-auto d-flex align-items-center">
        <!-- user is admin -->
        <router-link
          to="#"
          class="text-white mr-3"
        >
          管理員後台
        </router-link>

        <!-- user is login -->
        <router-link
          to="#"
          class="text-white mr-3"
        >
          使用者 您好
        </router-link>

        <button
          type="button"
          class="btn btn-sm btn-outline-success my-2 my-sm-0"
        >
          登出
        </button>
      </div>
    </div>
  </nav>
</template>