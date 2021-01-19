<template>
  <div class="container text-main">
    <div class="row justify-content-center">
      <!-- <div class="col-md-1 border"></div> -->
      <div class="col-md-8 mb-4">
        <div class="row">
          <div
            class="col-md-6 photo-size"
            :style="{
              'background-image':
                'url(' + require('@/assets/img/photo2.svg') + ')',
            }"
          ></div>
          <div
            class="col-md-6 d-flex flex-column justify-content-around align-items-center"
          >
            <h4>{{ designer.Name }}</h4>
            <p class="w-50 border-left">{{ designer.Details }}</p>
            <router-link
              :to="`/reservationF/${designerId}`"
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
            <div class="col-md-4">
              <img
                src="@/assets/img/photo1.png"
                alt=""
                style="height: 100%;width: 100%;"
              />
            </div>
            <div class="col-md-8 p40">
              <h4 class="mb-4">沙龍護髮</h4>
              <p class="mb-5 border-left">
                本次預約設計師師師師本次預約設計師師師師本次預約設計師師師師本次預約設計師
                師師師本次預約設計師師師師本次預約設計師師師師本次預約設計師師師師本次預約設計師師師師本次預約設計師師師師本次預約設計師師師師
                本次預約設計師師師師本次預約設計師師師師本次預約設計師師師師本次預約設計師師師師
              </p>
              <cartest />
              <ul class="d-flex justify-content-center p-0 mb-4">
                <li class="designer-tag">沙龍護髮</li>
                <li class="designer-tag">解構護髮</li>
                <li class="designer-tag">梨花護髮</li>
              </ul>

              <!-- <ul class="d-flex justify-content-center p-0">
                <li class="mr-4">
                  <img src="@/assets/img/z23255028O.png" alt="" />
                </li>

                <li class="mr-4">
                  <img src="@/assets/img/z23255028O.png" alt="" />
                </li>

                <li class="mr-4">
                  <img src="@/assets/img/z23255028O.png" alt="" />
                </li>
              </ul> -->
            </div>
          </div>
        </div>
      </div>
    </div>
    <nav aria-label="Page navigation example">
      <ul class="pagination justify-content-center">
        <li class="page-item">
          <a class="page-link path" href="#" aria-label="Previous"
            ><i class="fas fa-chevron-left"></i>
          </a>
        </li>
        <li class="page-item"><a class="page-link" href="#">1</a></li>
        <li class="page-item"><a class="page-link" href="#">2</a></li>
        <li class="page-item"><a class="page-link" href="#">3</a></li>
        <li class="page-item"><a class="page-link" href="#">4</a></li>
        <li class="page-item"><a class="page-link" href="#">5</a></li>
        <li class="page-item"><a class="page-link" href="#">6</a></li>
        <li class="page-item">
          <a class="page-link path" href="#" aria-label="Next"
            ><i class="fas fa-chevron-right"></i>
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import { getDesigner } from '@/js/FontAppServices';
import cartest from './cartest.vue';

export default {
  components: {
    cartest,
  },
  data() {
    return {
      designerId: '',
      designer: '',
    };
  },
  methods: {
    getInfoHandler() {
      getDesigner(this.designerId).then((res) => {
        this.designer = res.data;
        console.log(this.designer);
      });
    },
  },
  created() {
    this.designerId = this.$route.params.id;
    console.log(this.designerId);
    this.getInfoHandler();
  },
};
</script>

<style></style>
