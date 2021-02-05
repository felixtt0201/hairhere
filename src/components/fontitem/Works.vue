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
    <div class="container text-main works-center">
      <div class="works-filter">
        <div class="works-filter-search">
          <input
            type="text"
            class="searchInput"
            placeholder="輸入搜尋作品名稱"
            v-model.trim="searchInput"
          />
          <button type="button" class="search-btn" @click="searchItem">
            <i class="fas fa-search"></i>
          </button>
        </div>
        <div>
          <label for="c1"
            ><input
              type="checkbox"
              id="c1"
              value="男"
              v-model="list"
            />男生</label
          >
          <label for="c2"
            ><input
              type="checkbox"
              id="c2"
              value="女"
              v-model="list"
            />女生</label
          >

          <label for="c3"
            ><input
              type="checkbox"
              id="c3"
              value="短髮"
              v-model="list"
            />短髮(不過下巴)</label
          >

          <label for="c14"
            ><input
              type="checkbox"
              id="c14"
              value="中長髮"
              v-model="list"
            />中長髮(及肩長度)</label
          >
          <label for="c15"
            ><input
              type="checkbox"
              id="c15"
              value="長髮"
              v-model="list"
            />長髮(過肩膀)</label
          >
          <label for="c16"
            ><input
              type="checkbox"
              id="c16"
              value="染髮"
              v-model="list"
            />染髮</label
          >

          <label for="c17"
            ><input
              type="checkbox"
              id="c17"
              value="設計染"
              v-model="list"
            />特殊/設計染髮</label
          >
          <label for="c18"
            ><input
              type="checkbox"
              id="c18"
              value="燙髮"
              v-model="list"
            />燙髮</label
          >
        </div>
      </div>
    </div>
    <div class="container">
      <h3 class="title-line w-100 text-center mt-5 mb-5 works-text-line">
        作品集
      </h3>
      <div class="row img-center">
        <div class="col-md-3 size" v-for="work in worksarray" :key="work.Id">
          <router-link :to="`/designerSingleWork/${work.Id}`" class="itemimg">
            <h2 class="item-tittle">{{ work.Name }}</h2>
            <img :src="work.Photo1" alt="" />
          </router-link>
        </div>
      </div>
      <nav aria-label="Page navigation example">
        <ul class="pagination justify-content-center">
          <li class="page-item" :class="{ disabled: index === 1 }">
            <a
              class="page-link path"
              href="#"
              aria-label="Previous"
              @click="changePage(index - 1)"
              ><i class="fas fa-chevron-left"></i>
            </a>
          </li>
          <li
            class="page-item"
            v-for="page in pages"
            :key="page"
            @click="changePage(page)"
          >
            <a class="page-link" href="#">{{ page }}</a>
          </li>
          <li class="page-item" :class="{ disabled: index === pages }">
            <a
              class="page-link path"
              href="#"
              aria-label="Next"
              @click="changePage(index + 1)"
              ><i class="fas fa-chevron-right"></i>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
import { getworkss, searchworks } from '@/js/FontAppServices';
// import $ from 'jquery';
import loadingitem from '../dashboarditem/loadingitem.vue';

export default {
  components: { loadingitem },
  data() {
    return {
      // Loading遮罩
      isLoading: true,
      fullPage: true,
      worksarray: [], // 回傳資料位置
      list: [], // checkbox勾選倒入
      searchInput: '', // 關鍵字搜索輸入
      pages: '', // 總頁數
      // get全部作品回傳資料
      index: '', // 拿來裝目前分頁讓，讓上面可以做比對
      status: true, // 執行分頁方法時判斷是否已進行篩選
    };
  },
  watch: {
    // 如果 `question` 发生改变，这个函数就会运行
    list() {
      this.searchItem();
    },
  },
  methods: {
    changePage(page) {
      if (this.status === false) {
        this.searchItem(page);
      } else {
        this.getHandlerInfo(page);
      }
    },
    getHandlerInfo(page = 1) {
      getworkss(page).then((res) => {
        console.log(res);
        this.pages = Math.ceil(res.data.Count / res.data.Limit);
        this.worksarray = res.data.BasicData;
        this.status = true;
        this.isLoading = false;
        this.index = res.data.Index;
      });
    },
    searchItem(page = 1) {
      const searchItemArray = this.list.toString();
      searchworks(searchItemArray, this.searchInput, page).then((res) => {
        if (res.data.status) {
          this.pages = Math.ceil(res.data.Count / res.data.Limit);
          this.worksarray = res.data.BasicData;
          console.log('分類', this.worksarray, this.pages, page);
          this.status = false;
          this.index = res.data.Index;
        } else {
          this.$swal({
            title: '搜索查無符合作品',
            text: '請重新勾選分類或輸入關鍵字再次查詢',
            position: 'center',
            icon: 'error',
          });
        }
      });
    },
  },
  created() {
    this.getHandlerInfo();
  },
};
</script>

<style lang="scss" scoped></style>
