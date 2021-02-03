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
      <router-link to="/">Home</router-link>
    </div>
    <ul class="navbar-nav ml-auto">
      <li class="mr-4">
        <span>{{ storeName }}</span>
        <span>{{ designerName }}</span>
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
import { getAllStoreInfo, getDesignerListSelect } from '@/js/AppServices';

export default {
  data() {
    return {
      designerName: '',
      storeName: '',
      isLogin: false,
    };
  },
  methods: {
    setName() {
      const storeInfo = JSON.parse(localStorage.getItem('storeDetails'));
      const designerInfo = JSON.parse(localStorage.getItem('desginderDetails'));
      if (storeInfo !== null) {
        getAllStoreInfo().then((res) => {
          res.data.forEach((item) => {
            if (item.Id === storeInfo.Id) {
              this.storeName = item.Name;
              this.isLogin = true;
            }
          });
        });
      } else if (designerInfo !== null) {
        getDesignerListSelect(designerInfo.StoreId).then((res) => {
          const designersInfo = res.data;
          designersInfo.forEach((item) => {
            if (item.Id === designerInfo.Id) {
              this.designerName = item.Name;
              this.isLogin = true;
            }
          });
        });
      }
    },
    // 取得店家登入名稱
    // getStoreName() {
    //   const getId = JSON.parse(localStorage.getItem('storeId'));
    //   getAllStoreInfo().then((res) => {
    //     res.data.forEach((item) => {
    //       if (item.Id === getId) {
    //         this.storeName = item.Name;
    //         this.isLogin = true;
    //       }
    //     });
    //   });
    // },

    // 取得設計師登入名稱
    // getDesignerName() {
    //   const loginInfo = JSON.parse(localStorage.getItem('desginderDetails'));
    //   getDesignerListSelect(loginInfo.StoreId).then((res) => {
    //     const designersInfo = res.data;
    //     designersInfo.forEach((item) => {
    //       if (item.Id === loginInfo.Id) {
    //         this.designerName = item.Name;
    //       }
    //     });
    //   });
    // },
    logout() {
      this.$swal({
        position: 'center',
        icon: 'success',
        title: '成功登出',
        // showConfirmButton: false,
        timer: 1500,
      }).then(() => {
        document.cookie = 'desingerToken=; expires=; path=/';
        document.cookie = 'storeToken=; expires=; path=/';
        localStorage.clear();
      });
    },
  },
  created() {
    // this.getDesignerName();
    // this.getStoreName();
    this.setName();
  },
};
</script>

<style lang="scss"></style>
