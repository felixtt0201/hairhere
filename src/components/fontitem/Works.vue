<template>
  <div>
    <div class="container text-main works-center">
      <div class="works-filter">
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
        <label for="work"
          ><input
            type="text"
            class="searchInput"
            placeholder="搜尋作品名稱"
            v-model.trim="searchInput"
        /></label>
        <button type="button" class="btn w-100" @click="searchItem">
          <i class="fas fa-search mr-3"></i>搜尋
        </button>
      </div>
    </div>
    <div class="container">
      <h3 class="title-line w-100 text-center mt-5 mb-5 works-text-line">
        作品集
      </h3>
      <div class="row img-center">
        <!-- 測試關鍵字搜索 -->
        <div
          class="col-md-3 size"
          v-for="work in searchInputText"
          :key="work.Id"
        >
          <h2>{{ work.Name }}{{ work.Category }}</h2>
          <img :src="work.Photo1" alt="" class="img-size" />
          <div class="imgbackground">
            <p>{{ work.Name }}</p>
            <p>{{ work.Category }}</p>
            <router-link
              :to="`/designerSingle/${work.Id}`"
              class="btn btn-primary"
              >立即預約</router-link
            >
          </div>
        </div>
      </div>
      <!-- <div class="row img-center">
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
        </div>
      </div> -->
      <nav aria-label="Page navigation example">
        <ul class="pagination justify-content-center">
          <li class="page-item" :class="{ disabled: (i = 1) }">
            <a class="page-link path" href="#" aria-label="Previous"
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
          <li class="page-item">
            <a class="page-link path" href="#" aria-label="Next"
              ><i class="fas fa-chevron-right"></i>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
import { getpages, searchworks } from '@/js/FontAppServices';

export default {
  data() {
    return {
      worksarray: [], // 回傳資料位置
      list: [], // checkbox勾選倒入
      searchInput: '', // 關鍵字搜索輸入
      pages: '',
      paginationhas_pre: '',
      paginationhas_next: '',
      // get全部作品回傳資料
      count: '',
      index: 1,
      limit: 4,
      status: true, // 執行分頁方法時判斷是否已進行篩選
    };
  },
  computed: {
    // 關鍵字搜索
    searchInputText() {
      if (this.searchInput) {
        return this.worksarray.filter(
          (item) => item.Name.indexOf(this.searchInput) !== -1, // 有找到值
        );
      }
      return this.worksarray;
    },
  },
  methods: {
    // 渲染作品集＆切換分頁
    // changePage(page, show) {
    //   getpages(page, show).then((res) => {
    //     console.log(res, page);
    //     this.worksarray = res.data.BasicData;
    //     console.log(this.worksarray);
    //   });
    // },
    changePage(page) {
      if (this.status === false) {
        console.log('change');
        searchworks(this.list.toString(), page, 6).then((res) => {
          console.log(res);
          this.worksarray = res.data.BasicData;
        });
      } else {
        getpages(page, 6).then((res) => {
          console.log(res);
          this.worksarray = res.data.BasicData;
        });
      }
    },
    getHandlerInfo() {
      getpages(this.index, 6).then((res) => {
        console.log(res);
        this.pages = Math.ceil(res.data.Count / res.data.Limit);
        this.worksarray = res.data.BasicData;
      });
    },
    searchItem() {
      const searchItemArray = this.list.toString();
      searchworks(searchItemArray, this.index, 6).then((res) => {
        console.log(res);
        this.pages = Math.ceil(res.data.Count / 3);
        this.worksarray = res.data.BasicData;
        this.status = false;
      });
    },
  },
  created() {
    this.getHandlerInfo();
  },
};
</script>

<style lang="scss" scoped></style>
