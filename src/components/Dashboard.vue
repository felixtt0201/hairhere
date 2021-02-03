<template>
  <div id="wrapper">
    <Sidebar />
    <div id="content-wrapper" class="d-flex flex-column">
      <div id="content">
        <Navbar />
        <div>
          <p class="ml-2">歡迎使用</p>
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
  },
  data() {
    return {
      stoken: '',
      dtoken: '',
    };
  },
  created() {
    this.stoken = document.cookie.replace(
      // eslint-disable-next-line no-useless-escape
      /(?:(?:^|.*;\s*)storeToken\s*\=\s*([^;]*).*$)|^.*$/,
      '$1',
    );
    this.dtoken = document.cookie.replace(
      // eslint-disable-next-line no-useless-escape
      /(?:(?:^|.*;\s*)desingerToken\s*\=\s*([^;]*).*$)|^.*$/,
      '$1',
    );
  },
};
</script>

<style lang="scss" scoped>
@import './src/assets/scss/sb-admin-2.scss';
</style>
