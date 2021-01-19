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
            v-model="searchInput"
        /></label>
        <button type="button" class="btn w-100" @click="search">
          <i class="fas fa-search mr-3"></i>搜尋
        </button>
      </div>
    </div>
    <div class="container">
      <h3 class="title-line w-100 text-center mt-5 mb-5 works-text-line">
        作品集
      </h3>
      <div class="row img-center">
        <div class="col-md-3" v-for="work in worksarray" :key="work.Id">
          {{ searchinput }}
          <hr />
          {{ work }}
          <img :src="work.Photo1" alt="" class="img-size" />
          <p>{{ work.Name }}</p>
          <div class="works-btn"></div>
          <button type="button" class="img-btn">立即預約</button>
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
  </div>
</template>

<script>
import { getworks, searchworks } from '@/js/FontAppServices';

export default {
  data() {
    return {
      worksarray: [],
      list: [], // checkbox勾選倒入
      searchInput: '',
      filterarray: [],
    };
  },
  computed: {
    // 關鍵字搜索
    searchinput() {
      // eslint-disable-next-line arrow-body-style
      this.worksarray.filter((i) => {
        return this.filterarray.push(i.Name.match(this.searchInput));
      });
      return this.filterarray;
    },
  },
  methods: {
    getHandlerInfo() {
      getworks().then((res) => {
        console.log(res);
        this.worksarray = res.data.BasicData;
        console.log(this.worksarray);
      });
    },
    search() {
      console.log(this.list);
      const bb = this.list.toString();
      console.log(bb);
      searchworks(bb).then((res) => {
        console.log(res);
        console.log(bb);
        this.worksarray = res.data.BasicData;
      });
    },
  },
  created() {
    this.getHandlerInfo();
  },
};
</script>

<style></style>
