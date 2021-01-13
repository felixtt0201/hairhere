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
        <i class="fas fa-laugh-wink"></i>
      </div>
    </a>
    <!-- Divider -->
    <hr class="sidebar-divider" />

    <!-- Heading -->
    <div class="sidebar-heading">
      內容
    </div>
    <!-- Nav Item - Pages Collapse Menu -->
    <li class="nav-item">
      <router-link
        class="nav-link font-weight-bold sidebarhover"
        :to="{ name: 'StoreInformation' }"
      >
        <i class="fas fa-store-alt mr-2"></i>
        <span>店家資訊管理</span></router-link
      >
    </li>
    <li class="nav-item ">
      <router-link
        class="nav-link font-weight-bold sidebarhover"
        :to="{ name: 'Designers' }"
      >
        <i class="fas fa-users mr-2"></i>
        <span>設計師管理</span></router-link
      >
    </li>

    <li class="nav-item">
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
      <a
        class="nav-link collapsed font-weight-bold sidebarhover"
        href="#"
        data-toggle="collapse"
        data-target="#collapseTwo"
        aria-expanded="true"
        aria-controls="collapseTwo"
      >
        <i class="fas fa-fw fa-chart-area mr-2"></i>
        <span>表單管理</span>
      </a>
      <div
        id="collapseTwo"
        class="collapse"
        aria-labelledby="headingTwo"
        data-parent="#accordionSidebar"
      >
        <div class="bg-white py-2 collapse-inner rounded">
          <router-link class="collapse-item" :to="{ name: 'ReservationList' }"
            >預約表
          </router-link>
          <router-link class="collapse-item" :to="{ name: 'Vaction' }"
            >休假表
          </router-link>
          <router-link class="collapse-item" :to="{ name: 'Performance' }"
            >業績表
          </router-link>
          <router-link class="collapse-item" :to="{ name: 'HistoricalOrders' }"
            >歷史訂單
          </router-link>
        </div>
      </div>
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
  mounted() {
    sidebarseffect();
  },
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
