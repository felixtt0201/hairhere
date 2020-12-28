<template>
  <div>
    <dashboardNavbar />
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
import dashboardNavbar from '../components/dashboard/db_Navbar.vue';

export default {
  components: {
    dashboardNavbar,
  },
};
</script>

<style lang="scss">
@import './src/assets/db_all.scss';
</style>
