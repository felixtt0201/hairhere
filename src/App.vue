<template>
  <div id="app">
    <div>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>|
      <router-link :to="{ name: 'Dashboard' }">Dashboard</router-link>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
@import './src/assets/all.scss';
</style>
