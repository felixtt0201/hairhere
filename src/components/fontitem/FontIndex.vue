<template>
  <div>
    <loading
      :opacity="1"
      color="#7e735d"
      loader="bars"
      background-color="#fff"
      :active.sync="isLoading"
      :is-full-page="fullPage"
    >
      <template slot="default"> <loadingitem></loadingitem></template
    ></loading>
    <header class="mb-5">
      <div
        id="carouselExampleIndicators"
        class="carousel slide"
        data-ride="carousel"
      >
        <ol class="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="0"
            class="active"
          ></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              class="d-block w-100"
              src="@/assets/img/unnamed 1.svg"
              alt="First slide"
            />
            <div class="carousel-caption d-none d-md-block">
              <div class="position-absolute">
                <img src="@/assets/img/lefa_logo_cn.png" alt="logo" />
                <p class="font-en">Feel Like Home.</p>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <img
              class="d-block w-100"
              src="@/assets/img/unnamed 1.svg"
              alt="Second slide"
            />
            <div class="carousel-caption d-none d-md-block">
              <div class="position-absolute">
                <img src="@/assets/img/lefa_logo_cn.png" alt="logo" />
                <p class="font-en">Feel Like Home.</p>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <img
              class="d-block w-100"
              src="@/assets/img/unnamed 1.svg"
              alt="Third slide"
            />
            <div class="carousel-caption d-none d-md-block">
              <div class="position-absolute">
                <img src="@/assets/img/lefa_logo_cn.png" alt="logo" />
                <p class="font-en">Feel Like Home.</p>
              </div>
            </div>
          </div>
        </div>
        <a
          class="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a
          class="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    </header>
    <div class="container-fluid font-tw mb-5">
      <div class="row">
        <div class="col-md-2 item-logo-position-relative">
          <img
            src="@/assets/img/lefa_logo_all_cn.svg"
            alt=""
            class="item-logo-position-absolute "
          />
        </div>
        <div class="col-md-10 text-main">
          <div class="row border-h70">
            <div class="col-md-3 index-infomation">
              <h4>About us</h4>
              <p v-html="basicData.Summary"></p>
            </div>
            <div class="col-md-2 index-infomation">
              <h4>服務項目</h4>
              <ul>
                <li>專業剪燙染護</li>
                <li>頭皮養護</li>
                <li>設計染髮</li>
                <li>精緻編髮</li>
                <li>彩妝及新娘秘書</li>
              </ul>
            </div>
            <div class="col-md-4 index-infomation">
              <h4>店家資訊</h4>
              <ul>
                <li>聯絡電話 (07)-{{ basicData.Phone }}</li>
                <li class="d-flex flex-column">
                  <span>店家地址</span>高雄市苓雅區青年一路4巷21號
                </li>
                <li>
                  營業時間
                  <p>
                    每週二至日 上午{{ business.StoreOpen }}~下午{{
                      business.StoreClose
                    }}
                    <span class="d-block">(每週{{ dayof }}公休)</span>
                  </p>
                </li>
              </ul>
            </div>
            <div class="col-md-3 index-infomation">
              <h4>Follow us</h4>
              <ul>
                <li>
                  <a :href="basicData.Facebook" class="follow-icon">
                    <i class="fab fa-instagram mr-2"></i>樂髮手作 Hair Salon</a
                  >
                </li>
                <li>
                  <a :href="basicData.Facebook" class="follow-icon">
                    <i class="fab fa-facebook-square mr-2"></i>樂髮手作 Hair
                    Salon</a
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="row justify-content-center bg-accent text-accent pb-3">
        <div class="col-md-8 menu-item mt-4">
          <div class="row flex-column">
            <h2 class="text-center">服務項目</h2>
            <ul class="p-0 line">
              <li class="d-flex" v-for="service in services" :key="service.Id">
                <span class="w-50 text-right pr-4">{{ service.Name }}</span
                ><span class="w-50 pl-4">${{ service.UnitPrice }} +</span>
              </li>
            </ul>
          </div>
          <router-link to="/designerTotal" class="menu-btn"
            >立即預約</router-link
          >
        </div>
      </div>
    </div>
    <div class="container">
      <h4 class="title-line w-100 text-center mb-4 text-main">作品集</h4>
      <swiper class="swiper" :options="swiperOption">
        <swiper-slide v-for="work in works" :key="work.Id">
          <router-link :to="`/DesignerSingleWork/${work.Id}`">
            LInkto
            <img :src="`${work.Photo1}`" alt=""
          /></router-link>
        </swiper-slide>
        <!-- <div class="swiper-pagination" slot="pagination"></div> -->
        <!-- <div class="swiper-button-prev" slot="button-prev"></div> -->
        <!-- <div class="swiper-button-next" slot="button-next"></div> -->
      </swiper>
      <h4 class="title-line w-100 text-center mb-4 text-main">設計師</h4>
      <swiper class="swiper mb-5" :options="swiperOption">
        <swiper-slide
          v-for="designer in designers"
          :key="designer.Id"
          style="width:150px;height:150px"
        >
          <router-link :to="`/designerSingle/${designer.Id}`">
            LInkto
            <img :src="`${designer.PicturePath}`" alt="" />
          </router-link>
        </swiper-slide>
        <!-- <div class="swiper-pagination" slot="pagination"></div> -->
        <!-- <div class="swiper-button-prev" slot="button-prev"></div> -->
        <!-- <div class="swiper-button-next" slot="button-next"></div> -->
      </swiper>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
import 'swiper/css/swiper.css';
import {
  getStoreTotalInfo,
  getworkss,
  getAllDesigner,
} from '@/js/FontAppServices';
import loadingitem from '../dashboarditem/loadingitem.vue';

export default {
  components: {
    loadingitem,
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      swiperOption: {
        slidesPerView: 4,
        spaceBetween: 30,
        // centeredSlides: true,
        // slidesPerGroup: 6,
        loop: true,
        // loopFillGroupWithBlank: true,
        autoplay: {
          delay: 2000,
          disableOnInteraction: false,
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      },
      // Loading遮罩
      isLoading: true,
      fullPage: true,

      basicData: {
        // address: '',
        // details: '',
        // facebook: '',
        // phone: '',
        // summary: '',
      },
      dayof: '',
      business: {}, // 店家營業時間
      services: [], // 店家服務項目
      works: [], // 所有作品
      designers: [], // 所有設計師
    };
  },
  methods: {
    getInfoHandler() {
      getStoreTotalInfo().then((res) => {
        this.basicData = res.data.BasicData;
        this.business = res.data.Business;
        this.services = res.data.ServicesPublic;
        console.log(this.services);
        this.dayof = this.business.RestDayOfWeek.toString();
      });
    },
    getAllworks() {
      getworkss().then((res) => {
        this.works = res.data.BasicData;
        this.isLoading = false;
      });
    },
    getAllDesigners() {
      getAllDesigner().then((res) => {
        this.designers = res.data.BasicData;
        this.isLoading = false;
      });
    },
  },
  created() {
    this.getInfoHandler();
    this.getAllworks();
    this.getAllDesigners();
  },
};
</script>

<style lang="scss">
// .splide__arrow--next {
//   right: -25px !important;
//   background: transparent;
// }
// .splide__arrow--prev {
//   left: -40px !important;
//   background: transparent;
// }
// .background-img {
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   position: relative;
// }
// .ap {
//   position: absolute;
//   background-color: pink;
//   // display: inline;
//   width: 100%;
//   height: 85%;
//   opacity: 0;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   text-decoration: none !important;
//   bottom: -80px;
//   &:hover {
//     width: 85%;
//     background-color: rgb(237, 224, 221);
//     bottom: 0;
//     transition: 0.5s;
//     opacity: 0.8;
//   }
//   p {
//     text-align: center;
//     text-decoration: none !important;
//     font-size: 20px;
//     padding: 10px;
//     color: #1d3d4a;
//     font-weight: bolder;
//     background-color: white;
//     border-radius: 50px 50px 50px 0;
//   }
// }
</style>
