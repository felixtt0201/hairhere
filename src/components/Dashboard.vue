<template>
  <div>
    <Navbar />
    <div class="container-fluid">
      <div class="container">
        <main>
          <router-view></router-view>
        </main>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from './dashboarditem/Navbar.vue';

export default {
  components: {
    Navbar,
  },
};
</script>

<style lang="scss">
@import './src/assets/all.scss';
</style>
