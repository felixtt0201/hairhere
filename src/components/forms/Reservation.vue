<template>
  <div id="reservation" class="container-fluid">
    <div class="d-sm-flex align-items-center justify-content-between mb-4">
      <h3 class="mb-0 text-gray-800">預約表</h3>
    </div>
    <div class="row">
      <div class="col"><Calendar /></div>
      <!-- <div class="col"></div> -->
    </div>
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
