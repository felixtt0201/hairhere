<template>
  <div class="home">
    <Top class="down"></Top>
    <FontHeader></FontHeader>
    <transition name="page" mode="out-in">
      <router-view :key="$route.path"></router-view>
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
      // 最後一頁scrollTop=body-window，50是預留空間
      // eslint-disable-next-line no-undef
      // eslint-disable-next-line no-unused-vars
      const last = $(window).height();
      console.log(last);
      console.log('scr', $(window).scrollTop());
      // console.log();
      // eslint-disable-next-line no-undef
      if ($(window).scrollTop() >= last) {
        $('.down').show('slow');
      }
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
.page-enter-active,
.page-leave-active {
  transition: 1s;
}
.page-enter,
.page-leave {
  opacity: 0;
}
</style>
