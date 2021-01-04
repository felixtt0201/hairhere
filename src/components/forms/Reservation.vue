<template>
  <div id="reservation">
    <div class="d-sm-flex align-items-center justify-content-between mb-4">
      <h1 class="h3 mb-0 text-gray-800">預約表</h1>
    </div>
    <Calendar />
  </div>
</template>

<script>
import Calendar from '../dashboarditem/Calendar.vue';

export default {
  methods: {
    getInfo() {
      const api = 'https://vue-course-api.hexschool.io/api/dsprj/products';
      this.axios.get(api).then((res) => {
        console.log(res);
      });
    },
  },
  created() {
    this.getInfo();
  },
  components: {
    Calendar,
  },
};
</script>

<style lang="scss">
@import 'src/assets/scss/sb-admin-2.scss';
</style>
