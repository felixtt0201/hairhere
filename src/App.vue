<template>
  <div id="app">
    <div>
      <!-- <router-link to="/login"> <i class="fas fa-cog"></i></router-link> -->
      <router-view v-if="isRouterAlive"></router-view>
    </div>
  </div>
</template>

<script>
export default {
  provide() {
    return {
      reload: this.reload,
    };
  },
  data() {
    return {
      isRouterAlive: true,
    };
  },
  methods: {
    // 頁面重新整理
    reload() {
      this.isRouterAlive = false;
      this.$nextTick(() => {
        this.isRouterAlive = true;
      });
    },
  },
};
</script>

<style lang="scss">
@import './src/assets/all.scss';
</style>
