<template>
  <div id="reservation" class="container-fluid">
    <div class="row">
      <h3 class="mb-0 text-gray-800">預約表</h3>
    </div>
    <div class="row">
      <p>請點選下列日期方塊填寫預約資訊</p>
    </div>
    <Calendar />
  </div>
</template>

<script>
import Calendar from '../dashboarditem/Calendar.vue';

export default {
  methods: {},
  components: {
    Calendar,
  },
};
</script>

<style lang="scss">
@import 'src/assets/scss/sb-admin-2.scss';
</style>
