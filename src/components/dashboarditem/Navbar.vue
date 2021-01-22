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
    <ul class="navbar-nav ml-auto">
      <li class="mr-4">
        <span>Benこ醬</span>
      </li>
      <li>
        <router-link :to="{ name: 'login' }">
          <i
            class="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-800"
            @click="logout"
          ></i>
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  methods: {
    logout() {
      this.$swal({
        position: 'center',
        icon: 'success',
        title: '成功登出',
        // showConfirmButton: false,
        timer: 1500,
      }).then(() => {
        localStorage.clear();
      });
    },
  },
};
</script>

<style lang="scss"></style>
