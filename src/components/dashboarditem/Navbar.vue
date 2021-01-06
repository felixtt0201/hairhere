<template>
  <!--Navbar-->
  <!-- Topbar -->
  <nav
    class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow"
  >
    <!-- Sidebar Toggle (Topbar) 手機版漢堡選單 -->
    <button
      id="sidebarToggleTop"
      class="btn btn-link d-md-none rounded-circle mr-3"
    >
      <i class="fa fa-bars"></i>
    </button>
    <div>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>|
      <router-link :to="{ name: 'Reservation' }">Dashboard</router-link>｜
      <router-link to="/login">後台登入</router-link>
    </div>
    <!-- Topbar Search Navbar搜尋欄位 -->
    <!-- <form
        class="d-none d-sm-inline-block
        form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search"
      >
        <div class="input-group">
          <input
            type="text"
            class="form-control bg-light border-0 small"
            placeholder="Search for..."
            aria-label="Search"
            aria-describedby="basic-addon2"
          />
          <div class="input-group-append">
            <button class="btn btn-primary" type="button">
              <i class="fas fa-search fa-sm"></i>
            </button>
          </div>
        </div>
      </form> -->
    <ul class="navbar-nav ml-auto">
      <li class="mr-4">
        <span>Cindy</span>
      </li>
      <li>
        <router-link :to="{ name: 'login' }">
          <i class="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-800"></i>
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {};
</script>

<style lang="scss"></style>
