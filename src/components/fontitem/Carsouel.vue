<template>
  <div>
    <splide
      :options="options"
      class="list-style d-flex justify-content-center mb-5"
    >
      <!-- <h4 class="title-line w-100 text-center mb-4 text-main">髮型作品</h4> -->
      <splide-slide
        v-for="work in msg"
        :key="work.Id"
        class="background-img mr-5"
        :style="{ backgroundImage: `url(${work.Photo1})` }"
      >
        <router-link :to="`/DesignerSingleWork/${work.Id}`" class="ap"
          ><p>作品詳細</p></router-link
        >
        <!-- {{ work }} -->
      </splide-slide>
      <!-- <h4 class="title-line w-100 text-center mb-4 text-main">設計師</h4> -->
      <splide-slide
        v-for="designer in des"
        :key="designer.Id"
        class="background-img mr-5"
        :style="{ backgroundImage: `url(${designer.PicturePath})` }"
      >
        <router-link :to="`/designerSingle/${designer.Id}`" class="ap">
          <p>{{ designer.Name }}</p>
        </router-link>
      </splide-slide>
    </splide>
  </div>
</template>

<script>
import { Splide, SplideSlide } from '@splidejs/vue-splide';
// import { getworkss } from '@/js/FontAppServices';
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
        perPage: 4, // 確定每頁應顯示多少張幻燈片
        // gap: 1,
        pagination: false,
        interval: 1500, // 移動時間
        // pauseOnHover: true, // 是否在懸停滑塊時停止自動播放
        cover: true,
        breakpoints: {
          // 斷點時候跑幾張
          576: {
            perPage: 2,
            destroy: true,
          },
        },
      },
      classes: {
        prev: 'splide__arrow--prev carsourl-prev',
        next: 'splide__arrow--next carsourl-next',
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

<style lang="scss">
.splide__arrow--next {
  right: -25px !important;
  background: transparent;
}
.splide__arrow--prev {
  left: -40px !important;
  background: transparent;
}
.background-img {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}
.ap {
  position: absolute;
  background-color: pink;
  // display: inline;
  width: 100%;
  height: 85%;
  opacity: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none !important;
  bottom: -80px;
  &:hover {
    width: 85%;
    background-color: rgb(237, 224, 221);
    bottom: 0;
    transition: 0.5s;
    opacity: 0.8;
  }
  p {
    text-align: center;
    text-decoration: none !important;
    font-size: 20px;
    padding: 10px;
    color: #1d3d4a;
    font-weight: bolder;
    background-color: white;
    border-radius: 50px 50px 50px 0;
  }
}
</style>
