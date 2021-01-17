<template>
  <div class="wrapper">
    <splide
      :options="options"
      class="list-style d-flex justify-content-center mb-5"
    >
      <splide-slide
        class="background-img mr-5"
        style="background-image: url(https://images.unsplash.com/photo-1605980625600-88b46abafa8d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDh8fGhhaXIlMjBzYWxvbnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60);"
      >
      </splide-slide>
      <splide-slide
        class="background-img mr-5"
        style="background-image: url(https://images.unsplash.com/photo-1586548634342-04801afc8b13?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjA5fHxoYWlyJTIwc2Fsb258ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60);"
      >
      </splide-slide>
      <splide-slide
        class="background-img mr-5"
        style="background-image: url(https://images.unsplash.com/photo-1581674210501-c760093514e8?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NTl8fGhhaXIlMjBzYWxvbnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60);"
      >
      </splide-slide>
      <splide-slide
        class="background-img mr-5"
        style="background-image: url(https://images.unsplash.com/photo-1581674210501-c760093514e8?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NTl8fGhhaXIlMjBzYWxvbnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60);"
      >
      </splide-slide>
      <splide-slide
        class="background-img mr-5"
        style="background-image: url(https://images.unsplash.com/photo-1581674210501-c760093514e8?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NTl8fGhhaXIlMjBzYWxvbnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60);"
      >
      </splide-slide>
      <splide-slide
        class="background-img mr-5"
        style="background-image: url(https://images.unsplash.com/photo-1581674210501-c760093514e8?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NTl8fGhhaXIlMjBzYWxvbnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60);"
      >
      </splide-slide>
    </splide>
  </div>
</template>

<script>
import { Splide, SplideSlide } from '@splidejs/vue-splide';

import '@splidejs/splide/dist/css/themes/splide-default.min.css';
// or

export default {
  components: {
    Splide,
    SplideSlide,
  },
  data() {
    return {
      options: {
        type: 'loop',
        rewind: true,
        width: '100%',
        // gap: '1rem',
        autoplay: true,
        autoWidth: true,
        perPage: 4, // 確定每頁應顯示多少張幻燈片
        // gap: 1,
        pagination: false,
        interval: 3000, // 移動時間
        pauseOnHover: true, // 是否在懸停滑塊時停止自動播放
        cover: true,
        breakpoints: {
          // 斷點時候跑幾張
          576: {
            perPage: 2,
            destroy: true,
          },
        },
      },
    };
  },
  methods: {
    // moved(splide, newIndex) {
    //   console.log('moved', newIndex);
    // },
  },
};
</script>

<style lang="scss" scoped>
.our-class-arrows {
  color: black;
}
</style>
