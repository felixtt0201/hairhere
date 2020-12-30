<template>
  <div>
    <h1>reservation</h1>
    <Calendar />
  </div>
</template>

<script>
import Calendar from './dashboarditem/Calendar.vue';

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

<style lang="scss" scoped></style>
