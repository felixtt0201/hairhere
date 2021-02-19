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
    </loading>
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
              <h4 class="font-weight-bold">About us</h4>
              <p>{{ basicData.Summary }}</p>
            </div>
            <div class="col-md-2 index-infomation">
              <h4 class="font-weight-bold">服務項目</h4>
              <ul>
                <li>專業剪燙染護</li>
                <li>頭皮養護</li>
                <li>設計染髮</li>
                <li>精緻編髮</li>
                <li>彩妝及新娘秘書</li>
              </ul>
            </div>
            <div class="col-md-4 index-infomation">
              <h4 class="font-weight-bold">店家資訊</h4>
              <ul>
                <li>聯絡電話 （07）{{ basicData.Phone }}</li>
                <li class="d-flex flex-column">
                  <span>店家地址</span>{{ basicData.Address }}
                </li>
                <li>
                  營業時間
                  <p>
                    每週二至日 上午{{ business.StoreOpen }}～下午{{
                      business.StoreClose
                    }}
                    <span class="d-block"
                      >（每週{{
                        dayof.replace(/(,|,|,)/g, '、').replace('6', '六')
                      }}公休）</span
                    >
                  </p>
                </li>
              </ul>
            </div>
            <div class="col-md-3 index-infomation">
              <h4 class="font-weight-bold">Follow us</h4>
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
      <swiper
        class="swiper"
        :options="swiperOptionTop"
        style="height:300px;width:90%"
      >
        <swiper-slide v-for="work in works" :key="work.Id">
          <router-link
            :to="`/DesignerSingleWork/${work.Id}`"
            class="swiper-item"
          >
            <h2 class="swiper-item-tittle">立即預約</h2>
            <img :src="`${work.Photo1}`" alt=""
          /></router-link>
        </swiper-slide>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
      </swiper>
      <h4 class="title-line w-100 text-center mb-4 mt-5 text-main">設計師</h4>
      <swiper
        class="swiper mb-5"
        :options="swiperOptionBot"
        style="height:300px;width:90%"
      >
        <swiper-slide
          v-for="designer in designers"
          :key="designer.Id"
          style="width:150px"
        >
          <router-link
            :to="`/designerSingle/${designer.Id}`"
            class="swiper-item"
          >
            <h2 class="swiper-item-tittle">立即預約</h2>
            <img :src="`${designer.PicturePath}`" alt="" />
          </router-link>
        </swiper-slide>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
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

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      swiperOptionTop: {
        loop: true,
        autoplay: {
          delay: 3000,
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
        breakpoints: {
          1024: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
        },
      },
      swiperOptionBot: {
        loop: true,
        autoplay: {
          delay: 5000,
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
        breakpoints: {
          1024: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
        },
      },
      // Loading遮罩
      isLoading: true,
      fullPage: true,

      basicData: {},
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

<style lang="scss" scoped>
.swiper-slide {
  background: #000000;
}
.swiper-button-next,
.swiper-button-prev {
  color: #7d7265;
  right: 0;
  opacity: 0.8;
}
.swiper-item {
  display: block;
  background: #000000;
  overflow: hidden;
  transition: all 0.3s ease-in-out;
  width: auto;
  height: 100%;
  img {
    display: block;
    height: 100%;
    width: 100%;
    object-fit: cover;
    transition: all 0.5s;
    z-index: 1;
    will-change: transform;
    border-style: none;
  }
  &:hover {
    ::after {
      opacity: 1;
      transform: translate(10%, 10%);
      transition: all 1s;
    }
    img {
      opacity: 0.8;
      transform: scale(1.05);
      width: 100%;
      height: 100%;
    }
    .swiper-item-tittle {
      opacity: 1;
    }
  }
}
.swiper-item-tittle {
  position: absolute;
  top: 50%;
  left: 50%;
  font-size: 24px;
  font-weight: 700;
  color: #ffffff;
  transform: translate(-50%, -50%);
  transition: all 0.3s;
  opacity: 0;
  z-index: 2;
  &::after {
    position: absolute;
    content: '';
    right: 0;
    left: 0;
    top: 30px;
    border: 2px solid #d6997a;
    transition: all 0.5s;
    opacity: 0;
    z-index: 2;
  }
}
</style>
