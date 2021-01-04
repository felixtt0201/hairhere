<template>
  <div id="wrapper">
    <Sidebar />
    <div id="content-wrapper" class="d-flex flex-column">
      <div id="content">
        <Navbar />
        <div class="container-fluid">
          <router-view></router-view>
        </div>
      </div>
      <Footer />
    </div>
  </div>
</template>

<script>
import Navbar from './dashboarditem/Navbar.vue';
import Sidebar from './dashboarditem/Sidebar.vue';
import Footer from './dashboarditem/Footer.vue';

export default {
  components: {
    Navbar,
    Sidebar,
    Footer,
    // test,
  },
};
</script>

<style lang="scss">
// @import './src/assets/all.scss';
@import './src/assets/scss/sb-admin-2.scss';
</style>
