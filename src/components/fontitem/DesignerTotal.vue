<template>
  <div>
    <div class="container text-main">
      <h4 class="title-line w-100 text-center mb-4 text-main">設計師</h4>
      <div
        class="row mb-4 mt-4"
        v-for="designer in designers"
        :key="designer.id"
      >
        <div
          class="col-md-4 photo-size"
          :style="{
            'background-image':
              'url(' + require('@/assets/img/photo2.svg') + ')',
          }"
        ></div>
        <div
          class="col-md-4 d-flex flex-column justify-content-around align-items-center"
        >
          <h4>{{ designer.Name }}</h4>
          <p class="w-50 border-left">設計專業專業剪燙染護頭皮養護精緻編髮</p>
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
          :style="{
            'background-image':
              'url(' + require('@/assets/img/photo1.png') + ')',
          }"
        >
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

export default {
  data() {
    return {
      designers: [],
      pages: [],
      index: '',
    };
  },
  methods: {
    getInfoHandler(page) {
      getAllDesignerPage(page, 3).then((res) => {
        console.log(res);
        this.designers = res.data.BasicData;
        this.pages = Math.ceil(res.data.Count / res.data.Limit);
        this.index = res.data.Index;
        console.log(this.index);
        console.log(this.designers);
        console.log('pages', this.pages, typeof this.pages);
      });
    },
  },
  created() {
    this.getInfoHandler();
  },
};
</script>

<style></style>
