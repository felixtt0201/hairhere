<template>
  <div id="information">
    <div class="container">
      <h1 class="text-center">店家資訊管理</h1>
      <div class="row justify-content-center">
        <router-link class="btn btn-primary" :to="{ name: 'StoreInformation' }"
          >基本資訊維護
        </router-link>
        <router-link class="btn btn-primary" :to="{ name: 'ServiceInfo' }"
          >服務項目維護
        </router-link>
      </div>

      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
