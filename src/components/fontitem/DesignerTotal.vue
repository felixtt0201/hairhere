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
    <div class="container text-main">
      <h4 class="title-line w-100 text-center mb-4 text-main">設計師</h4>
      <div
        class="row mb-4 mt-4"
        v-for="designer in designers"
        :key="designer.Id"
      >
        <div
          class="col-md-4 photo-size border"
          :style="{ backgroundImage: `url(${designer.PicturePath})` }"
        ></div>
        <div
          class="col-md-4 d-flex flex-column justify-content-around align-items-center p-3"
        >
          <h4>{{ designer.Name }}</h4>
          <p
            class="w-50 border-left"
            v-html="designer.Summary.replace(/(?:\r\n|\r|\n)/g, '<br />')"
          ></p>
          <router-link
            :to="`/reservationF/${designer.Id}`"
            class="btn rounded-0 designer-btn"
          >
            <p>立即預約</p></router-link
          >
        </div>
        <div
          class="col-md-4 photo-size btn-viewmore"
          :style="{ backgroundImage: `url(${designer.Portfolio.Photo1})` }"
        >
          <router-link
            :to="`/designerSingle/${designer.Id}`"
            class="btn designer-btn a rounded-0 mb-4"
            data-hover="立即預約"
          >
            更多作品
          </router-link>
        </div>
      </div>
      <nav aria-label="Page navigation example">
        <ul class="pagination justify-content-center mt-3">
          <li class="page-item" :class="{ disabled: index == 1 }">
            <a
              class="page-link path"
              href="#"
              aria-label="Previous"
              @click.prevent="getInfoHandler(index - 1)"
              ><i class="fas fa-chevron-left"></i>
            </a>
          </li>
          <li
            class="page-item"
            v-for="page in pages"
            :key="page"
            @click="getInfoHandler(page)"
          >
            <a class="page-link" href="#">{{ page }}</a>
          </li>
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
        this.index = res.data.Index;
        this.designers = res.data.BasicData;
        this.pages = Math.ceil(res.data.Count / res.data.Limit);
        this.isLoading = false;
      });
    },
  },
  created() {
    this.getInfoHandler();
  },
};
</script>

<style lang="scss" scoped>
.photo-size {
  background-color: #e0e0e0;
  opacity: 1;
  &:hover {
    transition: all 0.5s;
    transform: scale(1.05);
    cursor: pointer;
  }
}
.text-main {
  .row {
    width: 90%;
    margin: 0 auto;
  }
}
</style>
