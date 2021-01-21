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
            <div class="col-md-12 p40">
              <cartest />
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
import { getSingleWork } from '@/js/FontAppServices';
import cartest from './cartest.vue';

export default {
  components: {
    cartest,
  },
  data() {
    return {
      designerId: '',
      designer: '',
      workId: '', // params接到的id
      workDetail: '', // get到的詳細資料
      category: [],
    };
  },
  methods: {
    getInfoHandler() {
      getSingleWork(this.workId).then((res) => {
        this.workDetail = res.data.BasicData;
        console.log(this.workDetail);
        this.category = this.workDetail.Category;
        this.designerId = this.workDetail.DesignerId;
      });
    },
  },
  created() {
    // this.designerId = this.$route.params.id;
    // console.log(this.designerId);
    this.workId = this.$route.params.workId;
    console.log(this.workId);
    this.getInfoHandler();
  },
};
</script>

<style></style>
