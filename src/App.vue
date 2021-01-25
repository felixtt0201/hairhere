<template>
  <div id="app">
    <div>
      <router-link to="/login">後台登入</router-link>
      <router-link :to="{ name: 'DesignerSingle' }">DesignerSingle</router-link>
      <router-view v-if="isRouterAlive"></router-view>
    </div>
    <cartest />
  </div>
</template>

<script>
export default {
  name: 'app',
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
