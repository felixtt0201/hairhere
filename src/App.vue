<template>
  <div id="app">
    <div>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>|
      <router-link :to="{ name: 'Dashboard' }">Dashboard</router-link>｜
      <router-link to="/login">後台登入</router-link>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import './src/assets/all.scss';
</style>
