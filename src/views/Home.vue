<template>
  <div>
    <FontHeader></FontHeader>
    <Top class="down">123</Top>
    <transition name="page" mode="out-in">
      <router-view class="wrap" :key="$route.path"></router-view>
    </transition>
    <FontFooter></FontFooter>
  </div>
</template>

<script>
import FontHeader from '@/components/fontitem/FontHeader.vue';
import FontFooter from '@/components/fontitem/FontFooter.vue';
import Top from '@/components/fontitem/Top.vue';
import $ from 'jquery';

export default {
  name: 'Home',
  components: {
    FontHeader,
    FontFooter,
    Top,
  },
  mounted() {
    $(window).scroll(() => {
      $('.down').hide();
      // eslint-disable-next-line no-unused-vars
      const last = $(window).height();
      // eslint-disable-next-line no-undef
      if ($(window).scrollTop() >= last) {
        $('.down').fadeTo('slow', 0.8);
      }
    });
    // eslint-disable-next-line prefer-arrow-callback
    // eslint-disable-next-line space-before-function-paren
    $('.navbar a').on('click', () => {
      $('.navbar-toggler').click();
    });
  },
};
</script>

<style lang="scss">
@import './src/assets/hair.scss';
@import './src/assets/designerTotal.scss';
@import './src/assets/designerSingle.scss';
@import './src/assets/reservation.scss';
@import './src/assets/confirm.scss';
@import './src/assets/works.scss';
@import './src/assets/searchList.scss';
@import './src/assets/step.scss';

.wrap {
  max-width: 1200px;
  margin: 0 auto;
}
.page-enter-active,
.page-leave-active {
  transition: 1s;
}
.page-enter,
.page-leave {
  opacity: 0;
}
@media (max-width: 768px) {
  .nav-link {
    padding-right: 0.5rem !important;
    padding-left: 0.5rem !important;
  }
}
</style>
