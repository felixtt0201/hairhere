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
    <div class="row img-center">
      <div
        class="col-md-3"
        v-for="designerWork in designerWorks"
        :key="designerWork.Id"
      >
        <img :src="`${designerWork.Photo1}`" alt="" class="img-size" />
        <div class="works-btn"></div>
        <router-link
          :to="`/DesignerSingleWork/${designerWork.Id}`"
          class="img-btn"
          >See More</router-link
        >
        {{ designerWork.Id }}
      </div>
      <!-- <div class="col-md-3">
        <img
          src="https://images.unsplash.com/photo-1605980766335-d3a41c7332a1?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTZ8fGhhaXJ8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          alt=""
          class="img-size"
        />
        <div class="works-btn"></div>
        <button type="button" class="img-btn">立即預約</button>
      </div>
      <div class="col-md-3">
        <img
          src="https://images.unsplash.com/photo-1605980766335-d3a41c7332a1?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTZ8fGhhaXJ8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          alt=""
          class="img-size"
        />
        <div class="works-btn"></div>
        <button type="button" class="img-btn">立即預約</button>
      </div>
      <div class="col-md-3">
        <img
          src="https://images.unsplash.com/photo-1605980766335-d3a41c7332a1?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTZ8fGhhaXJ8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          alt=""
          class="img-size"
        />
        <div class="works-btn"></div>
        <button type="button" class="img-btn">立即預約</button>
      </div> -->
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

export default {
  data() {
    return {
      designerId: '',
      designer: '',
      designerWorks: [],
    };
  },
  methods: {
    getInfoHandler() {
      getDesigner(this.designerId).then((res) => {
        console.log(res);
        this.designer = res.data;
        console.log(this.designer);
        this.designerWorks = this.designer.Portfolios.BasicData;
        console.log(this.designerWorks);
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
