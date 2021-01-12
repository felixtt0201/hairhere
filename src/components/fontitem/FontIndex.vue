<template>
  <div>
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
              src="@/assets/img/carsouel-test.jpg"
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
        <div class="col-md-10  text-main">
          <div class="row">
            <div class="col-md-3 border-left">
              <h4 class="font-en">About us</h4>
              <p>
                {{ basicData.Summary }}
              </p>
            </div>
            <div class="col-md-3 border-left">
              <h4>服務項目</h4>
              <p>
                專業剪燙染護<br />頭皮養護 ｜設計染髮 | 精緻編髮<br />
                彩妝及新娘秘書
              </p>
            </div>
            <div class="col-md-3 border-left">
              <h4>店家資訊</h4>
              <ul class="p-0">
                <li class="">
                  <h5 class="mr-2">聯絡電話 (07) - {{ basicData.Phone }}</h5>
                </li>
                <li class="">
                  <h5 class="mr-2">店家地址 {{ basicData.Address }}</h5>
                </li>
                <li class="">
                  <h5 class="mr-2">營業時間</h5>
                  每週二至日<br />上午{{ business.BusinessHoursOpen }}～下午{{
                    business.BusinessHoursClose
                  }}<br />
                  (每週一公休)
                </li>
              </ul>
            </div>
            <div class="col-md-3 border-left">
              <h4 class="font-en">Follow us!</h4>
              <div>
                <a :href="basicData.Facebook" class="d-flex"
                  ><i class="fab fa-instagram mr-2"></i>
                  <p class="mb-0 font-en">樂髮手作 Hair Salon</p></a
                >
              </div>
              <div>
                <a :href="basicData.Facebook" class="d-flex"
                  ><i class="fab fa-facebook-square mr-2"></i>
                  <p class="mb-0 font-en">樂髮手作 Hair Salon</p></a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row justify-content-center bg-accent text-accent pb-3">
        <div class="col-md-8 letter-space mt-4">
          <div class="row flex-column">
            <h2 class="text-center">服務項目</h2>
            <ul class="list-style p-0 line">
              <li
                class="d-flex"
                v-for="service in services"
                :key="service.Name"
              >
                <span class="w-50 text-right pr-3">{{ service.Name }}</span
                ><span class="w-50 pl-3">${{ service.UnitPrice }} +</span>
              </li>
            </ul>
            <router-link
              to="/reservation"
              class="btn btn-secondary mx-auto rounded-0"
              >立即預約</router-link
            >
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <h4 class="title-line w-100 text-center mb-4 text-main">髮型作品</h4>
      <ul class="list-style d-flex justify-content-center mb-5">
        <li
          class="background-img mr-5"
          style="background-image: url(https://images.unsplash.com/photo-1581674210501-c760093514e8?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NTl8fGhhaXIlMjBzYWxvbnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60);"
        ></li>
        <li
          class="background-img mr-5"
          style="background-image: url(https://images.unsplash.com/photo-1605980625600-88b46abafa8d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDh8fGhhaXIlMjBzYWxvbnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60);"
        ></li>
        <li
          class="background-img mr-5"
          style="background-image: url(https://images.unsplash.com/photo-1444820518794-41bbbccf4ccd?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTZ8fGhhaXIlMjBzYWxvbnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60);"
        ></li>
        <li
          class="background-img mr-5"
          style="background-image: url(https://images.unsplash.com/photo-1586548634342-04801afc8b13?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjA5fHxoYWlyJTIwc2Fsb258ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60);"
        ></li>
      </ul>
      <h4 class="title-line w-100 text-center mb-4 text-main">設計師</h4>
      <ul class="list-style d-flex justify-content-center mb-5">
        <li
          class="background-img mr-5"
          style="background-image: url(https://images.unsplash.com/photo-1581674210501-c760093514e8?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NTl8fGhhaXIlMjBzYWxvbnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60);"
        ></li>
        <li
          class="background-img mr-5"
          style="background-image: url(https://images.unsplash.com/photo-1605980625600-88b46abafa8d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDh8fGhhaXIlMjBzYWxvbnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60);"
        ></li>
        <li
          class="background-img mr-5"
          style="background-image: url(https://images.unsplash.com/photo-1444820518794-41bbbccf4ccd?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTZ8fGhhaXIlMjBzYWxvbnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60);"
        ></li>
        <li
          class="background-img mr-5"
          style="background-image: url(https://images.unsplash.com/photo-1586548634342-04801afc8b13?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjA5fHxoYWlyJTIwc2Fsb258ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60);"
        ></li>
      </ul>
    </div>
  </div>
</template>

<script>
import { storeTotalInfo } from '@/js/AppServices';

export default {
  data() {
    return {
      basicData: {
        // address: '',
        // details: '',
        // facebook: '',
        // phone: '',
        // summary: '',
      },
      business: {
        // BusinessDaysOfWeek: '',
        // BusinessHoursClose: '',
        // BusinessHoursOpen: '',
        // RestDayOfWeekString: '',
      },
      services: [],
    };
  },
  methods: {
    GetStoreInfo() {
      storeTotalInfo().then((res) => {
        console.log(res.data);
        this.basicData = res.data.BasicData;
        this.business = res.data.Business;
        this.services = res.data.ServicesPublic;
        console.log(this.services);
      });
    },
  },
  mounted() {
    this.GetStoreInfo();
  },
};
</script>

<style></style>
