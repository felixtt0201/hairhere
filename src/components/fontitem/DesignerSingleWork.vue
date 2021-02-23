<template>
  <div class="container text-main" id="designerSingleWork">
    <loading
      :opacity="1"
      color="#7e735d"
      loader="bars"
      background-color="#fff"
      :active.sync="isLoading"
      :is-full-page="fullPage"
    >
    </loading>
    <div class="row justify-content-center">
      <div class="col-md-8 mb-4 desingerInfo">
        <div class="row w-90 flex-nowrap">
          <div
            class="col-md-6 photo-size"
            :style="{ backgroundImage: `url(${designerDetail.PicturePath})` }"
          ></div>
          <div class="col-md-6 p-4 personInfo">
            <h4>{{ designerDetail.Name }}</h4>
            <p class="border-left" v-html="reDesignerDetails"></p>
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
          <div
            class="row d-flex align-items-md-center mb-4 desinger-detailwork"
          >
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
                  </swiper>
                </div>
              </template>
            </div>
            <div class="col-md-3 desinger-detailwork-detail">
              <h4 class="mb-4">{{ workDetail.Name }}</h4>
              <p class="mb-5 border-left" v-html="reWorkSummary"></p>
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
      // Loading效果
      isLoading: false,
      fullPage: true,
      // carsouel-----
      swiperOptionTop: {
        loop: true,
        loopedSlides: 3, // looped slides should be the same
        spaceBetween: 10,
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
      designerDetail: '', // get到的設計師詳細資料
      category: [], // get分類
      reDesignerDetails: '',
      reWorkSummary: '',
    };
  },
  methods: {
    getInfoHandler() {
      this.isLoading = true;
      getSingleWork(this.workId).then((res) => {
        this.workDetail = res.data.BasicData;
        this.category = this.workDetail.Category;
        const designerId = this.workDetail.DesignerId;
        this.slides = this.workDetail.PathArray;
        getDesigner(designerId).then((response) => {
          this.designerDetail = response.data;
          this.reDesignerDetails = response.data.Details.replace(
            /(?:\r\n|\r|\n)/g,
            '<br />',
          );
        });
        this.reWorkSummary = res.data.BasicData.Summary.replace(
          /(?:\r\n|\r|\n)/g,
          '<br />',
        );
        this.isLoading = false;
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
@media (max-width: 768px) {
  .thumb-example {
    max-width: 100%;
  }
}
@media (max-width: 767px) {
  .desinger-detailwork {
    flex-direction: column-reverse;
  }
  .desinger-detailwork-detail {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
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
