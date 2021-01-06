<template>
  <div id="information" class="container-fluid">
    <div class="d-sm-flex align-items-center justify-content-between mb-4">
      <h1 class="h3 mb-0 text-gray-800">店家資訊管理</h1>
    </div>
    <!-- <div class="row justify-content-center">
      <router-link class="btn btn-primary" :to="{ name: 'StoreInformation' }"
        >基本資訊維護
      </router-link>
      <router-link class="btn btn-primary" :to="{ name: 'ServiceInfo' }"
        >服務項目維護
      </router-link>
    </div> -->
    <div class="card text-center border-0 mb-4">
      <div class="card-header">
        <ul class="nav nav-tabs card-header-tabs">
          <li class="nav-item">
            <router-link
              class="nav-link informationhover"
              :to="{ name: 'StoreInformation' }"
              >基本資訊
            </router-link>
            <!-- <a class="nav-link active" href="#">Active</a> -->
          </li>
          <li class="nav-item">
            <router-link
              class="nav-link informationhover"
              :to="{ name: 'ServiceInfo' }"
              >服務項目
            </router-link>
            <!-- <a class="nav-link" href="#">Link</a> -->
          </li>
        </ul>
      </div>
      <div class="card-body">
        <!-- <h5 class="card-title">Special title treatment</h5>
        <p class="card-text">
          With supporting text below as a natural lead-in to additional content.
        </p>
        <a href="#" class="btn btn-primary">Go somewhere</a> -->
        <router-view></router-view>
      </div>
    </div>
    <!-- <router-view></router-view> -->
  </div>
</template>

<script>
export default {};
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
