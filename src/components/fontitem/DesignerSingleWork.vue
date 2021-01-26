<template>
  <div class="container text-main" id="designerSingleWork">
    <div class="row justify-content-center">
      <!-- <div class="col-md-1 border"></div> -->
      <div class="col-md-8 mb-4">
        <div class="row">
          <div
            class="col-md-6 photo-size"
            :style="{ backgroundImage: `url(${designerDetail.PicturePath})` }"
          ></div>
          <div
            class="col-md-6 d-flex flex-column justify-content-around align-items-center"
          >
            <h4>{{ designerDetail.Name }}</h4>
            <p class="w-50 border-left">{{ designerDetail.Details }}</p>
            <router-link
              :to="`/reservationF/${workDetail.DesignerId}`"
              class="btn rounded-0 designer-btn"
            >
              立即預約</router-link
            >
          </div>
        </div>
      </div>
      <!-- <div class="col-md-1 border"></div> -->
    </div>
    <h4 class="title-line w-100 text-center mb-4 text-main">設計作品</h4>
    <!-- workDetails -->
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-10">
          <div class="row">
            <div class="col-md-12 p40">
              <!-- <cartest /> -->
              <!-- car -->
              <!-- Main slider -->

              <!-- <splide :options="primaryOptions" ref="primary">
                <splide-slide
                  v-for="(slide, index) in slides"
                  :key="index"
                  :id="`splide11-slide${index}`"
                  aria-hidden="false"
                  tabindex="0"
                  class="is-active is-visible"
                >
                  <img :src="slide.src" />
                </splide-slide>
              </splide>

              Thumbnail slider
              <splide :options="secondaryOptions" ref="secondary">
                <splide-slide
                  v-for="(slide, index) in slides"
                  :key="index"
                  class="is-active is-visible"
                  role="button"
                  :id="`splide11-slide${index}`"
                  aria-hidden="false"
                  tabindex="0"
                  :aria-controls="`splide11-slide${index}`"
                  aria-current="true"
                  :aria-label="`Go to slide ${index}`"
                >
                  <img :src="slide.src" />
                </splide-slide>
              </splide> -->
            </div>
            <!-- <div class="col-md-4">
              <h4 class="mb-4">{{ workDetail.Name }}</h4>
              <p class="mb-5 border-left">
                {{ workDetail.Summary }}
              </p>
              <ul class="d-flex justify-content-center p-0 mb-4">
                <li class="designer-tag" v-for="tag in category" :key="tag">
                  {{ tag }}
                </li>
              </ul>
            </div> -->
            <!--new Ca-->
            <div class="col-md-12 p40"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getSingleWork } from '@/js/FontAppServices';
// getDesigner
// import { Splide, SplideSlide } from '@splidejs/vue-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
// import cartest from './cartest.vue';

export default {
  components: {
    // cartest,
    // Splide,
    // SplideSlide,
  },
  data() {
    return {
      workId: '', // params接到的id
      workDetail: '', // get到的作品詳細資料
      // designerId: '',
      designerDetail: '', // get到的設計師詳細資料
      category: [], // get分類
    };
  },
  methods: {
    async getInfoHandler() {
      // getSingleWork(this.workId).then((res) => {
      //   console.log(res);
      //   this.workDetail = res.data.BasicData;
      //   this.category = this.workDetail.Category;
      //   const designerId = this.workDetail.DesignerId;
      //   getDesigner(designerId).then((response) => {
      //     console.log(response);
      //     this.designerDetail = response.data;
      //   });
      // });

      await getSingleWork(this.workId).then((res) => {
        console.log(res.data.BasicData.PathArray);
      });
      // this.isActive = true;
      this.$refs.main.reload();
      this.$refs.thumbnails.reload();
    },
  },
  created() {
    this.workId = this.$route.params.workId;
    // console.log(this.workId);
  },
};
</script>

<style>
#designerSingleWork {
  font-family: 'Lato', sans-serif;
  font-weight: 300;
  margin: 0 auto;
  max-width: 900px;
  padding: 30px;
}

.main {
  margin-bottom: 30px;
}

.thumbnails {
  margin: 0 -5px;
  width: calc(100% + 10px);
}

.agile__nav-button {
  background: transparent;
  border: none;
  color: #ccc;
  cursor: pointer;
  font-size: 24px;
  transition-duration: 0.3s;
}
.thumbnails .agile__nav-button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}
.thumbnails .agile__nav-button--prev {
  left: -45px;
}
.thumbnails .agile__nav-button--next {
  right: -45px;
}
.agile__nav-button:hover {
  color: #888;
}
.agile__dot {
  margin: 0 10px;
}
.agile__dot button {
  background-color: #eee;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  display: block;
  height: 10px;
  font-size: 0;
  line-height: 0;
  margin: 0;
  padding: 0;
  transition-duration: 0.3s;
  width: 10px;
}
.agile__dot--current button,
.agile__dot:hover button {
  background-color: #888;
}

.slide {
  align-items: center;
  box-sizing: border-box;
  color: #fff;
  display: flex;
  height: 450px;
  justify-content: center;
}
.slide--thumbniail {
  cursor: pointer;
  height: 100px;
  padding: 0 5px;
  transition: opacity 0.3s;
}
.slide--thumbniail:hover {
  opacity: 0.75;
}
.slide img {
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  -o-object-position: center;
  object-position: center;
  width: 100%;
}
</style>
