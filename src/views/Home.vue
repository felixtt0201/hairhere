<template>
  <div class="home">
    <Top></Top>
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

export default {
  name: 'Home',
  components: {
    FontHeader,
    FontFooter,
    Top,
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
