<template>
  <div class="wrapper">
    <splide
      :options="options"
      class="list-style d-flex justify-content-center mb-5"
    >
      <splide-slide
        class="background-img mr-5"
        :style="{ backgroundImage: `url(${pic1})` }"
      >
      </splide-slide>
      <splide-slide
        class="background-img mr-5"
        :style="{ backgroundImage: `url(${pic2})` }"
      >
      </splide-slide>
      <splide-slide
        class="background-img mr-5"
        :style="{ backgroundImage: `url(${pic3})` }"
      >
      </splide-slide>
      <splide-slide
        class="background-img mr-5"
        :style="{ backgroundImage: `url(${pic1})` }"
      >
      </splide-slide>
      <splide-slide
        class="background-img mr-5"
        :style="{ backgroundImage: `url(${pic2})` }"
      >
      </splide-slide>
      <splide-slide
        class="background-img mr-5"
        :style="{ backgroundImage: `url(${pic3})` }"
      >
      </splide-slide>
    </splide>
  </div>
</template>

<script>
import { getworkss } from '@/js/FontAppServices';
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';

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
        perPage: 1, // 確定每頁應顯示多少張幻燈片
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
      pic1: '',
      pic2: '',
      pic3: '',
    };
  },
  methods: {
    getPicInfo() {
      getworkss().then((res) => {
        this.pic1 = res.data.BasicData[0].Photo1;
        this.pic2 = res.data.BasicData[0].Photo2;
        this.pic3 = res.data.BasicData[0].Photo3;
        // console.log(this.pic1, this.pic2, this.pic3);
      });
    },
    // moved(splide, newIndex) {
    //   console.log('moved', newIndex);
    // },
  },
  created() {
    this.getPicInfo();
  },
};
</script>

<style lang="scss" scoped>
.our-class-arrows {
  color: black;
}
</style>
