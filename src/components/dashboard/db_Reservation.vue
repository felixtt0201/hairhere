<template>
  <div>
    <h1>reservation</h1>
  </div>
</template>

<script>
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
};
</script>

<style lang="scss" scoped></style>
