<template>
  <ul
    class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
    id="accordionSidebar"
  >
    <!-- Sidebar - Brand -->
    <a
      class="sidebar-brand d-flex align-items-center justify-content-center"
      href="#"
    >
      <div class="sidebar-brand-icon rotate-n-15">
        <i class="fas fa-wheelchair"></i>
      </div>
    </a>
    <!-- Divider -->
    <hr class="sidebar-divider" />

    <!-- Heading -->
    <div class="sidebar-heading">
      內容
    </div>
    <!-- Nav Item - Pages Collapse Menu -->
    <li class="nav-item" v-if="isWho">
      <router-link
        class="nav-link font-weight-bold sidebarhover"
        :to="{ name: 'StoreInformation' }"
      >
        <i class="fas fa-store-alt mr-2"></i>
        <span>店家資訊管理</span></router-link
      >
    </li>
    <li class="nav-item" v-else>
      <router-link
        class="nav-link font-weight-bold sidebarhover"
        :to="{ name: 'StoreInformation' }"
      >
        <i class="fas fa-store-alt mr-2"></i>
        <span>個人資訊</span></router-link
      >
    </li>
    <li class="nav-item" v-if="isWho">
      <router-link
        class="nav-link font-weight-bold sidebarhover"
        :to="{ name: 'Designers' }"
      >
        <i class="fas fa-users mr-2"></i>
        <span>設計師管理</span></router-link
      >
    </li>
    <li class="nav-item" v-else>
      <router-link
        class="nav-link font-weight-bold sidebarhover"
        :to="{ name: 'StoreInformation' }"
      >
        <i class="fas fa-store-alt mr-2"></i>
        <span>個人作品</span></router-link
      >
    </li>

    <li class="nav-item" v-if="isWho">
      <router-link
        class="nav-link font-weight-bold sidebarhover"
        :to="{ name: 'Portfolio' }"
      >
        <i class="fas fa-box mr-2"></i>
        <span>作品集管理</span></router-link
      >
    </li>
    <li class="nav-item">
      <router-link
        class="nav-link font-weight-bold sidebarhover"
        :to="{ name: 'Checkout' }"
      >
        <i class="fas fa-money-check mr-2"></i>
        <span>結帳管理</span></router-link
      >
    </li>
    <li class="nav-item">
      <router-link
        class="nav-link font-weight-bold sidebarhover"
        :to="{ name: 'ReservationBack' }"
      >
        <i class="far fa-calendar-check mr-2"></i>
        <span>預約表</span></router-link
      >
    </li>
    <li class="nav-item">
      <router-link
        class="nav-link font-weight-bold sidebarhover"
        :to="{ name: 'HistoricalOrders' }"
      >
        <i class="fas fa-money-check mr-2"></i>
        <span>歷史帳單</span></router-link
      >
    </li>
    <li class="nav-item" @click="logout">
      <router-link
        class="nav-link font-weight-bold sidebarhover"
        :to="{ name: 'login' }"
      >
        <i class="fas fa-sign-out-alt mr-2"></i>
        <span>登出</span></router-link
      >
    </li>

    <!-- Divider -->
    <hr class="sidebar-divider d-none d-md-block" />

    <!-- Sidebar Toggler (Sidebar) -->
    <div class="text-center d-none d-md-inline">
      <button class="rounded-circle border-0" id="sidebarToggle"></button>
    </div>
  </ul>
  <!-- End of Sidebar -->
</template>

<script>
import sidebarseffect from '@/js/sidebarseffect';

export default {
  data() {
    return {
      isWho: true,
    };
  },
  methods: {
    logout() {
      this.$swal({
        position: 'center',
        icon: 'success',
        title: '成功登出',
        // showConfirmButton: false,
        timer: 1500,
      }).then(() => {
        document.cookie = 'desingerToken=; expires=; path=/';
        localStorage.clear();
      });
    },
    getInfo() {
      const loginInfo = JSON.parse(localStorage.getItem('desginderDetails'));
      console.log(loginInfo);
      if (loginInfo.identity === 'designer') {
        this.isWho = false;
      }
    },
  },
  mounted() {
    sidebarseffect();
    this.getInfo();
  },
  created() {},
};
</script>

<style lang="scss">
.sidebarhover {
  &:hover {
    // margin-left: 10px;
    border-radius: 0.35rem;
    background-color: #1d3d4a;
  }
}
</style>
