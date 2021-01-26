<template>
  <div>
    <splide
      :options="options"
      class="list-style d-flex justify-content-center mb-5"
    >
      <splide-slide
        v-for="work in msg"
        :key="work.Id"
        class="background-img mr-5"
        :style="{ backgroundImage: `url(${work.Photo1})` }"
      >
      </splide-slide>
      <!-- <h4 class="title-line w-100 text-center mb-4 text-main">設計師</h4> -->
      <splide-slide
        v-for="designer in des"
        :key="designer.Id"
        class="background-img mr-5"
        :style="{ backgroundImage: `url(${designer.PicturePath})` }"
      >
      </splide-slide>
    </splide>
  </div>
</template>

<script>
// import { getworkss } from '@/js/FontAppServices';
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';

export default {
  components: {
    Splide,
    SplideSlide,
  },
  props: ['msg', 'des'],
  data() {
    return {
      options: {
        type: 'loop',
        rewind: true,
        width: '100%',
        // gap: '1rem',
        autoplay: true,
        autoWidth: true,
        perPage: 1, // 確定每頁應顯示多少張幻燈片
        // gap: 1,
        pagination: false,
        interval: 500, // 移動時間
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
      // works: [],
    };
  },
  // methods: {
  //   getALlworks() {
  //     getworkss().then((res) => {
  //       console.log(res);
  //       this.works = res.data.BasicData;
  //     });
  //   },
  // },
  // mounted() {
  //   this.getALlworks();
  // },
};
</script>

<style lang="scss" scoped>
.our-class-arrows {
  color: black;
}
</style>
