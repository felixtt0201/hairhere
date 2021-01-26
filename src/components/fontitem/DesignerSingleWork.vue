<template>
  <div class="container text-main">
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
            <div class="col-md-12 p40 d-flex">
              <!-- Carsouel -->
              <!-- Main slider -->
              <template class="d-flex">
                <splide :options="primaryOptions" ref="primary">
                  <splide-slide
                    v-for="(slide, index) in slides"
                    :key="index"
                    class="carsouelImg border"
                    :style="{ backgroundImage: `url(${slide})` }"
                  >
                    <img :style="{ backgroundImage: `url(${slide})` }" />
                  </splide-slide>
                </splide>
              </template>
              <template>
                <div></div>
              </template>
              <div class="ao">
                <div>
                  <h4>{{ workDetail.Name }}</h4>
                  <p class="mb-5 border-left">
                    {{ workDetail.Summary }}
                  </p>
                  <ul class="d-flex justify-content-center p-0 mb-4 border">
                    <li
                      class="designer-tag"
                      v-for="tag in workDetail.Category"
                      :key="tag"
                    >
                      {{ tag }}
                    </li>
                  </ul>
                </div>
                <!-- Thumbnail slider -->
                <splide :options="secondaryOptions" ref="secondary">
                  <splide-slide
                    v-for="(slide, index) in slides"
                    :key="index"
                    :style="{ backgroundImage: `url(${slide})` }"
                    class="carsouelImg"
                  >
                    <img :style="{ backgroundImage: `url(${slide})` }" />
                  </splide-slide>
                </splide>
              </div>
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
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getSingleWork, getDesigner } from '@/js/FontAppServices';
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';

export default {
  components: {
    // cartest,
    Splide,
    SplideSlide,
  },
  data() {
    return {
      workId: '', // params接到的id
      workDetail: '', // get到的作品詳細資料
      // designerId: '',
      designerDetail: '', // get到的設計師詳細資料
      category: [], // get分類
      // slide
      slides: [
        { backgroundImage: '' },
        { backgroundImage: '' },
        { backgroundImage: '' },
      ],
      primaryOptions: {
        type: 'loop',
        perPage: 1,
        perMove: 1,
        gap: '1rem',
        pagination: false,
        arrows: false,
        fixedWidth: 300,
        fixedHeight: 300,
      },
      secondaryOptions: {
        type: 'slide',
        rewind: true,
        fixedWidth: 150,
        fixedHeight: 150,
        gap: '2rem',
        pagination: false,
        cover: true,
        focus: 'center',
        arrows: false,
        isNavigation: true,
        interval: 3000,
        autoplay: true,
      },
    };
  },
  methods: {
    getInfoHandler() {
      getSingleWork(this.workId).then((res) => {
        console.log(res);
        this.workDetail = res.data.BasicData;
        this.category = this.workDetail.Category;
        const designerId = this.workDetail.DesignerId;
        // this.slides[0].src = this.workDetail.Photo1Path;
        // this.slides[1].src = this.workDetail.Photo2Path;
        // this.slides[2].src = this.workDetail.Photo3Path;
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
    // Set the sync target.
    this.$refs.primary.sync(this.$refs.secondary.splide);
  },
};
</script>

<style lang="scss" scoped>
.ao {
  display: flex;
  flex-direction: column;
}
.splide__slide img {
  /* width: 200px; */
  height: 200px;
}
.my-class-arrows {
  color: pink !important;
  background-color: pink !important;
}
.splide__arrow--next,
.splide__arrow--prev {
  background-color: transparent;
}
#splide01 {
  max-width: 50%;
}
#splide01-track {
  width: 70%;
}
#splide02-track {
  /* width: 500px; */
  display: flex;
  justify-content: space-between;
  /* align-items: center; */
}
#splide02 {
  margin-left: auto;
}

.carsouelImg {
  background-position: center center;
  background-repeat: no-repeat;
  /* background-size: cover; */
}
</style>
