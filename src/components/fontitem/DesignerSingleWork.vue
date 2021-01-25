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
            <div class="col-md-12 p40">
              <VueAgile
                class="main"
                ref="main"
                :options="options1"
                :as-nav-for="asNavFor1"
              >
                <div
                  class="slide"
                  v-for="(slide, index) in slides"
                  :key="index"
                  :class="`slide--${index}`"
                >
                  <img :src="slide" />
                </div>
              </VueAgile>
              <VueAgile
                class="thumbnails"
                ref="thumbnails"
                :options="options2"
                :as-nav-for="asNavFor2"
              >
                <div
                  class="slide slide--thumbniail"
                  v-for="(slide, index) in slides"
                  :key="index"
                  :class="`slide--${index}`"
                  @click="$refs.thumbnails.goTo(index)"
                >
                  <img :src="slide" />
                </div>
                <template slot="prevButton"
                  ><i class="fas fa-chevron-left"></i
                ></template>
                <template slot="nextButton"
                  ><i class="fas fa-chevron-right"></i
                ></template>
              </VueAgile>
            </div>
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
import { VueAgile } from 'vue-agile';

export default {
  components: {
    // cartest,
    // Splide,
    // SplideSlide,
    VueAgile,
  },
  data() {
    return {
      isActive: false,
      workId: '', // params接到的id
      workDetail: '', // get到的作品詳細資料
      // designerId: '',
      designerDetail: '', // get到的設計師詳細資料
      category: [], // get分類

      // vue agile輪播圖資料
      asNavFor1: [],
      asNavFor2: [],
      options1: {
        dots: false,
        fade: true,
        navButtons: false,
      },
      options2: {
        autoplay: true,
        centerMode: true,
        dots: false,
        navButtons: false,
        slidesToShow: 3,
        responsive: [
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 3,
            },
          },

          {
            breakpoint: 1000,
            settings: {
              navButtons: true,
            },
          },
        ],
      },
      slides: [],
      // slides: [
      //   'https://images.unsplash.com/photo-1453831362806-3d5577f014a4?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ',
      //   'https://images.unsplash.com/photo-1496412705862-e0088f16f791?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ',
      //   'https://images.unsplash.com/photo-1506354666786-959d6d497f1a?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ',
      //   'https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ',
      //   'https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ',
      //   'https://images.unsplash.com/photo-1472926373053-51b220987527?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ',
      //   'https://images.unsplash.com/photo-1497534547324-0ebb3f052e88?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ',
      // ],
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
        // const data = res.data.BasicData;
        // this.slides.push({ src: data.Photo1Path });
        // this.slides.push({ src: data.Photo2Path });
        // this.slides.push({ src: data.Photo3Path });
        console.log(res.data.BasicData.PathArray);
        // const newData = res.data.BasicData.PathArray;
        // newData.forEach((i) => {
        //   this.slides.push(i);
        // });
        this.slides = res.data.BasicData.PathArray;
        // this.slides = this.slides.concat(res.data.BasicData.PathArray);
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
  mounted() {
    // Set the sync target.
    // this.$refs.primary.sync(this.$refs.secondary.splide);
    this.getInfoHandler();
    // this.isActive = true;
    this.asNavFor1.push(this.$refs.thumbnails);
    this.asNavFor2.push(this.$refs.main);
    console.log('123', this.$refs.main);
    this.$refs.main.reload();
    this.$refs.thumbnails.reload();
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
