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
      <router-link :to="{ name: 'Dashboard' }">Dashboard</router-link>｜
      <router-link to="/login">後台登入</router-link>
    </div>
    <ul class="navbar-nav ml-auto">
      <li class="mr-4">
        <span>{{ storeName }}</span>
      </li>
      <li>
        <router-link :to="{ name: 'login' }">
          <i
            class="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-800"
            @click="logout"
            v-if="isLogin"
          ></i>
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
import { getAllStoreInfo } from '@/js/AppServices';

export default {
  data() {
    return {
      storeName: '',
      isLogin: false,
    };
  },
  methods: {
    getStoreName() {
      const getId = JSON.parse(localStorage.getItem('storeId'));
      getAllStoreInfo().then((res) => {
        res.data.forEach((item) => {
          if (item.Id === getId) {
            this.storeName = item.Name;
            this.isLogin = true;
          }
        });
      });
    },
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
  created() {
    this.getStoreName();
  },
};
</script>

<style lang="scss"></style>
