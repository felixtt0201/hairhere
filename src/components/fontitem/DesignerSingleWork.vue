<template>
  <div class="container text-main" id="designerSingleWork">
    <div class="row justify-content-center">
      <div class="col-md-8 mb-4 desingerInfo">
        <div class="row w-80">
          <div
            class="col-md-6 photo-size"
            :style="{ backgroundImage: `url(${designerDetail.PicturePath})` }"
          ></div>
          <div class="col-md-6 p-4 personInfo">
            <h4>{{ designerDetail.Name }}</h4>
            <p class="border-left">{{ designerDetail.Details }}</p>
            <router-link
              :to="`/reservationF/${workDetail.DesignerId}`"
              class="btn rounded-0 designer-btn"
            >
              立即預約</router-link
            >
          </div>
        </div>
      </div>
    </div>
    <h4 class="title-line w-100 text-center mb-4 text-main">設計作品</h4>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-10">
          <div class="row d-flex align-items-md-center mb-4">
            <!-- Carsouel -->
            <div class="col-md-9">
              <template>
                <div class="thumb-example">
                  <!-- swiper1 -->
                  <swiper
                    class="swiper gallery-top"
                    :options="swiperOptionTop"
                    ref="swiperTop"
                  >
                    <swiper-slide
                      class="slide-1"
                      :style="{
                        backgroundImage: `url(${workDetail.Photo1Path})`,
                      }"
                    ></swiper-slide>
                    <swiper-slide
                      class="slide-2"
                      :style="{
                        backgroundImage: `url(${workDetail.Photo2Path})`,
                      }"
                    ></swiper-slide>
                    <swiper-slide
                      class="slide-3"
                      :style="{
                        backgroundImage: `url(${workDetail.Photo3Path})`,
                      }"
                    ></swiper-slide>
                    <!-- <div
                      class="swiper-button-next swiper-button-white"
                      slot="button-next"
                    ></div>
                    <div
                      class="swiper-button-prev swiper-button-white"
                      slot="button-prev"
                    ></div> -->
                  </swiper>
                  <!-- swiper2 Thumbs -->
                  <swiper
                    class="swiper gallery-thumbs"
                    :options="swiperOptionThumbs"
                    ref="swiperThumbs"
                  >
                    <swiper-slide
                      class="slide-1"
                      :style="{
                        backgroundImage: `url(${workDetail.Photo1Path})`,
                      }"
                    ></swiper-slide>
                    <swiper-slide
                      class="slide-2"
                      :style="{
                        backgroundImage: `url(${workDetail.Photo2Path})`,
                      }"
                    ></swiper-slide>
                    <swiper-slide
                      class="slide-3"
                      :style="{
                        backgroundImage: `url(${workDetail.Photo3Path})`,
                      }"
                    >
                    </swiper-slide>
                    <!-- <div
                      class="swiper-button-next swiper-button-white"
                      slot="button-next"
                    ></div>
                    <div
                      class="swiper-button-prev swiper-button-white"
                      slot="button-prev"
                    ></div> -->
                  </swiper>
                </div>
              </template>
            </div>
            <div class="col-md-3">
              <h4 class="mb-4">{{ workDetail.Name }}</h4>
              <p class="mb-5 border-left">
                {{ workDetail.Summary }}
              </p>
              <ul class="">
                <li class="designer-tag" v-for="tag in category" :key="tag">
                  {{ tag }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getSingleWork, getDesigner } from '@/js/FontAppServices';
import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
import 'swiper/css/swiper.css';

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      // carsouel-----
      swiperOptionTop: {
        loop: true,
        loopedSlides: 3, // looped slides should be the same
        spaceBetween: 10,
        // navigation: {
        //   nextEl: '.swiper-button-next',
        //   prevEl: '.swiper-button-prev',
        // },
      },
      swiperOptionThumbs: {
        loop: true,
        loopedSlides: 3, // looped slides should be the same
        spaceBetween: 10,
        centeredSlides: true,
        slidesPerView: 'auto',
        touchRatio: 0.2,
        slideToClickedSlide: true,
      },
      // carsouel-----
      workId: '', // params接到的id
      workDetail: '', // get到的作品詳細資料
      // designerId: '',
      designerDetail: '', // get到的設計師詳細資料
      category: [], // get分類
    };
  },
  methods: {
    getInfoHandler() {
      getSingleWork(this.workId).then((res) => {
        console.log(res);
        this.workDetail = res.data.BasicData;
        console.log(this.workDetail);
        this.category = this.workDetail.Category;
        const designerId = this.workDetail.DesignerId;
        this.slides = this.workDetail.PathArray;
        console.log(this.slides);
        getDesigner(designerId).then((response) => {
          console.log(response);
          this.designerDetail = response.data;
        });
      });
    },
  },
  created() {
    this.workId = this.$route.params.workId;
    this.getInfoHandler();
  },
  mounted() {
    this.$nextTick(() => {
      const swiperTop = this.$refs.swiperTop.$swiper;
      const swiperThumbs = this.$refs.swiperThumbs.$swiper;
      swiperTop.controller.control = swiperThumbs;
      swiperThumbs.controller.control = swiperTop;
    });
  },
};
</script>

<style lang="scss" scoped>
.thumb-example {
  height: 480px;
  width: 600px;
  background-color: white;
}
.swiper {
  .swiper-slide {
    background-size: cover;
    background-position: center;
    &.slide-1 {
      background-image: url('/images/example/1.jpg');
    }
    &.slide-2 {
      background-image: url('/images/example/2.jpg');
    }
    &.slide-3 {
      background-image: url('/images/example/4.jpg');
    }
    &.slide-4 {
      background-image: url('/images/example/5.jpg');
    }
    &.slide-5 {
      background-image: url('/images/example/6.jpg');
    }
  }

  &.gallery-top {
    height: 80%;
    width: 100%;
  }
  &.gallery-thumbs {
    height: 20%;
    box-sizing: border-box;
    padding: 5 0;
  }
  &.gallery-thumbs .swiper-slide {
    width: 25%;
    height: 100%;
    opacity: 0.8;
  }
  &.gallery-thumbs .swiper-slide-active {
    opacity: 1;
  }
}
</style>
