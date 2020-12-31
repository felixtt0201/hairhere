<template>
  <div>
    <h1>店家資訊管理</h1>
    <router-link :to="{ name: 'ReservationList' }">預約表 </router-link>|
    <router-link to="/Dashboard/forms/vaction">休假表 </router-link>|
    <router-link to="/Dashboard/forms/performance">業績表 </router-link>|
    <router-link to="/Dashboard/forms/historicalOrders">歷史訂單 </router-link>|
    <router-view></router-view>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
