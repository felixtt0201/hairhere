<template>
  <div id="information" class="container-fluid">
    <div class="d-sm-flex align-items-center justify-content-between mb-4">
      <h1 class="h3 mb-0 text-gray-800" v-if="isWho">店家資訊管理</h1>
      <h1 class="h3 mb-0 text-gray-800" v-else>個人資訊管理</h1>
    </div>
    <div class="card text-center border-0 mb-4">
      <div class="card-header">
        <ul class="nav nav-tabs card-header-tabs" v-if="isWho">
          <li class="nav-item">
            <router-link
              class="nav-link informationhover"
              :to="{ name: 'StoreInformation' }"
              >基本資訊
            </router-link>
          </li>
          <li class="nav-item">
            <router-link
              class="nav-link informationhover"
              :to="{ name: 'ServiceInfo' }"
              >服務項目
            </router-link>
          </li>
        </ul>
      </div>
      <div class="card-body">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isWho: true,
    };
  },
  methods: {
    getInfo() {
      const storeInfo = JSON.parse(localStorage.getItem('storeDetails'));
      const designerInfo = JSON.parse(localStorage.getItem('desginderDetails'));
      if (storeInfo !== null) {
        this.isWho = true;
      } else if (designerInfo !== null) {
        this.isWho = false;
      }
    },
  },
  created() {
    this.getInfo();
  },
};
</script>

<style lang="scss">
.informationhover {
  &:focus {
    border: none;
    background-color: #1d3d4a;
    color: #ffff;
  }
}
</style>
