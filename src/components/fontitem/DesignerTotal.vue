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
    <div class="container text-main">
      <h4 class="title-line w-100 text-center mb-4 text-main">設計師</h4>
      <div
        class="row mb-4 mt-4"
        v-for="designer in designers"
        :key="designer.Izsd"
      >
        <div
          class="col-md-4 photo-size"
          :style="{ backgroundImage: `url(${designer.PicturePath})` }"
        ></div>
        <div
          class="col-md-4 d-flex flex-column justify-content-around align-items-center"
        >
          <h4>{{ designer.Name }}</h4>
          <p class="w-50 border-left">{{ designer.Skill }}</p>
          <!-- routerlink連結至預約頁面 -->
          <router-link
            :to="`/reservationF/${designer.Id}`"
            class="btn rounded-0 designer-btn"
          >
            立即預約</router-link
          >
        </div>
        <div
          class="col-md-4 photo-size btn-viewmore"
          :style="{ backgroundImage: `url(${designer.Portfolio.Photo1})` }"
        >
          <!-- :style="{ backgroundImage: `url(${designer.Portfolio.Photo1})` }" -->
          <!-- routerlink連結至設計師個人 -->
          <router-link
            :to="`/designerSingle/${designer.Id}`"
            class="btn designer-btn a rounded-0 mb-4"
            data-hover="立即預約"
          >
            更多作品
          </router-link>
        </div>
      </div>

      <!-- 分頁 -->
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
  </div>
</template>

<script>
import { getAllDesignerPage } from '@/js/FontAppServices';
import loadingitem from '../dashboarditem/loadingitem.vue';

export default {
  components: {
    loadingitem,
  },
  data() {
    return {
      isLoading: true, // Loading遮罩
      fullPage: true,
      designers: [],
      pages: [],
      index: '',
    };
  },
  methods: {
    getInfoHandler(page = 1, limit = 6) {
      getAllDesignerPage(page, limit).then((res) => {
        console.log(res);
        this.index = res.data.Index;
        this.designers = res.data.BasicData;
        this.pages = Math.ceil(res.data.Count / res.data.Limit);
        console.log('pages', this.pages, typeof this.pages);
        console.log(this.index);
        this.isLoading = false;
      });
    },
  },
  created() {
    this.getInfoHandler();
  },
};
</script>

<style></style>
