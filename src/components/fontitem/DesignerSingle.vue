<template>
  <div class="container text-main">
    <div class="row justify-content-center">
      <!-- <div class="col-md-1 border"></div> -->
      <div class="col-md-8 mb-4">
        <div class="row">
          <div
            class="col-md-6 photo-size"
            :style="{ backgroundImage: `url(${designer.PicturePath})` }"
          ></div>
          <div class="col-md-6 p-4 personInfo">
            <h4>{{ designer.Name }}</h4>
            <p class="border-left" v-html="designer.Details"></p>
            <router-link
              :to="`/reservationF/${designerId}`"
              class="btn rounded-0 designer-btn"
            >
              立即預約</router-link
            >
          </div>
        </div>
      </div>
    </div>
    <h4 class="title-line w-100 text-center mb-4 text-main">設計作品</h4>
    <div class="row img-center">
      <div
        class="col-md-3"
        v-for="designerWork in designerWorks"
        :key="designerWork.Id"
      >
        <router-link
          :to="`/DesignerSingleWork/${designerWork.Id}`"
          class="itemimg"
        >
          <h2 class="item-tittle">{{ designerWork.Name }}</h2>
          <div class="seemore"></div>
          <img
            :src="`${designerWork.Photo1}`"
            alt=""
            class="designerWork-img"
          />
          <!-- <div class="btn designerWork-btn">see</div> -->
        </router-link>
      </div>
    </div>
    <nav aria-label="Page navigation example">
      <ul class="pagination justify-content-center">
        <li class="page-item" :class="{ disabled: index == 1 }">
          <a
            class="page-link path"
            href="#"
            aria-label="Previous"
            @click.prevent="getInfoHandler(index - 1)"
            ><i class="fas fa-chevron-left"></i>
          </a>
        </li>
        <!-- pageLi -->
        <li
          class="page-item"
          v-for="page in pages"
          :key="page"
          @click="getInfoHandler(page)"
        >
          <a class="page-link" href="#">{{ page }}</a>
        </li>
        <!-- pageLi -->
        <li class="page-item" :class="{ disabled: index == pages }">
          <a
            class="page-link path"
            href="#"
            aria-label="Next"
            @click="getInfoHandler(index + 1)"
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
      pages: [],
      index: '',
    };
  },
  methods: {
    getInfoHandler(page = 1, limit = 6) {
      getDesigner(this.designerId, page, limit).then((res) => {
        console.log(res);
        this.designer = res.data;
        this.index = res.data.Portfolios.Index;
        this.designerWorks = this.designer.Portfolios.BasicData;
        this.pages = Math.ceil(
          res.data.Portfolios.Count / res.data.Portfolios.Limit,
        );
        console.log(this.index);
        // console.log(this.designerWorks);
      });
    },
  },
  created() {
    this.designerId = this.$route.params.id;
    // console.log(this.designerId);
    this.getInfoHandler();
  },
};
</script>

<style lang="scss">
.seemore {
  position: absolute;
  display: inline-block;
  overflow: hidden;
  right: 20px;
  bottom: 20px;
  width: 66px;
  height: 66px;
  opacity: 0;
  transition: all 0.5s;
  z-index: 2;
  &::before {
    position: absolute;
    content: 'more';
    right: 0px;
    bottom: 7px;
    color: #7d7265;
    font-size: 18px;
    line-height: 28px;
    z-index: 1;
  }
  &::after {
    position: absolute;
    content: '';
    top: 0;
    left: 33px;
    right: -33px;
    bottom: 0;
    background: #ffffff;
    transform: skewX(-45deg);
  }
}
</style>
