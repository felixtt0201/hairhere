<template>
  <div class="home">
    <FontHeader></FontHeader>
    <router-view></router-view>
    <FontFooter></FontFooter>
  </div>
</template>

<script>
import FontHeader from '@/components/fontitem/FontHeader.vue';
import FontFooter from '@/components/fontitem/FontFooter.vue';

export default {
  name: 'Home',
  components: {
    FontHeader,
    FontFooter,
  },
};
</script>

<style lang="scss">
@import './src/assets/hair.scss';
</style>
