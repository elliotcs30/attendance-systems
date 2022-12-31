<template>
  <div class="container py-5">
    <img src="../assets/titanlogo.png" alt="titan logo">
    <form class="w-100">
      <div class="text-center mb-4">
        <h1 class="h3 mb-3 font-weight-normal">
          Sign In
        </h1>
      </div>

      <div class="form-label-group mb-2">
        <label for="email">Email</label>
        <input 
          id="email"
          name="email"
          type="text"
          class="form-control"
          placeholder="Email"
          autocomplete="username"
          required
          autofocus
        >
      </div>

      <div class="form-label-group mb-3">
        <label for="passwaor">Password</label>
        <input 
          id="password"
          name="password"
          type="password"
          class="form-control"
          placeholder="Password"
          autocomplete="current-password"
          required
        >
      </div>

      <button
        class="btn btn-lg btn-primary btn-block mb-3"
        type="submit"
      >
        Submit
      </button>

      <div class="text-center mb-3">
        <p>
          <a href="/signup">Sign Up</a>
        </p>
      </div>

      <p class="mt-5 mb-3 text-muted text-center">
        &copy; 2022-2023
      </p>
    </form>
  </div>
</template>